  function -> declaration loop event


  declaration -> "##declaration"  _ varList _  "##endDeclaration" [\n] {% function(d){ return d[2]} %}

  loop -> _ "##loop" _ instructions _ "##endLoop" [\n] {% function(d){return d[3]} %}

  event -> _ "##event" _ eventIn _ eventOut _  "##endEvent" [\n] {% function(d){return {'struct':'event','eventIn': JSON.stringify(d[3]),'eventOut':JSON.stringify(d[5])} } %}


# ---------------

  eventIn -> _ "in:" _ singleEvent {% function(d){return d[3]} %}
  eventOut -> _ "out:" _ singleEvent {% function(d){return d[3]} %}

  singleEvent -> _ "keyPress" _ "(" _ "'" _ String _ "'" _ ")" {% function(d){ return {'type': 'keyPress','key':d[7]} } %}
                | "keyPress" _ "(" _ "'" _ Number _ "'" _ ")" {% function(d){ return {'type': 'keyPress','key':d[7]} } %}
                | _ "player." playerMethods _ "==" _ Number {% function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } } %}
                | _ "player." playerMethods _ "!=" _ Number {% function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } } %}
                | _ "player." playerMethods _ ">" _ Number {% function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } } %}
                | _ "player." playerMethods _ "<" _ Number {% function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } } %}

  instructions -> _ instruction {% function(d){return d[1]} %}
              | _ instructions _ [\n] _ instruction {% function(d){return JSON.stringify(d[1])+JSON.stringify(d[5])} %}

  instruction -> _ String "." String _ "(" _ "'" _ String _ "'" _ ")" {% function(d){return {'struct':'instruction','varName':d[1],'method':d[3],'param':d[9]} } %}
              |  _ String "." String _ "(" _ Number _ ")" {% function(d){return {'struct':'instruction','varName':d[1],'method':d[3],'param':d[7]} } %}

  varList -> variable {% id %}
           | varList _ [\n] _ variable {% function(d) {return JSON.stringify(d[0])+JSON.stringify(d[4]) } %}

  variable -> "var" __ String _ "=" _ type _ params _
  {% function(d){
      return {
        'struct' : 'declaration',
        'varName': d[2],
        'type': d[6],
        'params': d[8]

      }

  } %}

  params -> "(" _ ParamList _ ")" {% function(d){return d[2]} %}

  ParamList ->  Number {% id %}
           | ParamList _ "," _ Number {% function(d) {return d[0]+","+d[4]; }%}
           | String {% id %}
           | ParamList _ "," _ String {% function(d) {return d[0]+","+d[4]; }%}



# ----------------

  type -> "energy" {% id %}

  playerMethods -> "getA()" {% id %}
                | "getX()" {% id %}
                | "getY()" {% id %}


#----------------

# Numbers

  Number -> _number {% id %}

  _posint ->
  	[0-9] {% id %}
  	| _posint [0-9] {% function(d) {return d[0] + d[1]} %}

  _int ->
  	"-" _posint {% function(d) {return d[0] + d[1]; }%}
  	| _posint {% id %}

  _float ->
  	_int {% id %}
  	| _int "." _posint {% function(d) {return d[0] + d[1] + d[2]; }%}

  _number ->
  	_float {% id %}
  	| _float "e" _int {% function(d){return d[0] + d[1] + d[2]; } %}


#Strings
  String -> _str {% id %}
  _str -> [a-zA-Z_] {% id %}
        | _str [a-zA-Z_] {% function(d) {return d[0] + d[1]} %}


#white space:
  _ -> null | _ [\s] {% function() {} %}
  __ -> [\s] | __ [\s] {% function() {} %}
