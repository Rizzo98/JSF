#function -> _funDeclaration _decl _varList  {% function(d) {return {'funName':d[0],'vars':d[2]} } %}

#_funDeclaration -> "fun" __  _name _ ":" E {% function(d){return d[2]} %}
#_decl -> _ "declaration" _ ":" E {% function(){} %}

# Primitives
# ==========

_varList -> _var:+ {% ([items])=>(items) %}

_var -> _ "set" _ _name _ "as" _ _name _ "(" _  _paramList  _ ")" e {% function(d){return  {'varName' : d[3], 'type' : d[7], 'params':d[11] } } %}


_paramList -> _CommaParam:+ _param {% function(d){var l =[]; for (i=0; i<d[0].length;i++){l.push(d[0][i])};l.push(d[1]);return l; } %}
            | _param

_param -> _ _number _ {% function(d){return parseFloat(d[1]) } %}
        | _ _name _  {% function(d){return d[1] } %}

_CommaParam ->_ _number _ "," _ {% function(d){return parseFloat(d[1]) } %}
				 |_ _name _ "," _ {% function(d){return d[1] } %}


_name -> [a-zA-Z_] {% id %}
	| _name [\w_] {% function(d) {return d[0] + d[1]; } %}

# Numbers

Number -> _number {% function(d) {return {'literal': parseFloat(d[0])}} %}

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

String -> "\"" _string "\"" {% function(d) {return {'literal':d[1]}; } %}

_string ->
	null {% function() {return ""; } %}
	| _string _stringchar {% function(d) {return d[0] + d[1];} %}

_stringchar ->
	[^\\"] {% id %}
	| "\\" [^] {% function(d) {return JSON.parse("\"" + d[0] + d[1] + "\""); } %}


# Enter
e -> null | e [\r] | e [\n] {% function() {} %}
E -> [\r] | E [\r] | E [\n] {% function() {} %}

# Whitespace
_ -> null | _ [\s] {% function() {} %}
__ -> [\s] | __ [\s] {% function() {} %}
