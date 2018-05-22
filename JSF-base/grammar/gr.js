// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "function", "symbols": ["declaration", "loop", "event"]},
    {"name": "declaration$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "declaration$string$2", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"D"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "declaration", "symbols": ["declaration$string$1", "_", "varList", "_", "declaration$string$2", /[\n]/], "postprocess": function(d){ return d[2]}},
    {"name": "loop$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "loop$string$2", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"L"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "loop", "symbols": ["_", "loop$string$1", "_", "instructions", "_", "loop$string$2", /[\n]/], "postprocess": function(d){return d[3]}},
    {"name": "event$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "event$string$2", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"E"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "event", "symbols": ["_", "event$string$1", "_", "eventIn", "_", "eventOut", "_", "event$string$2", /[\n]/], "postprocess": function(d){return {'struct':'event','eventIn': JSON.stringify(d[3]),'eventOut':JSON.stringify(d[5])} }},
    {"name": "eventIn$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "eventIn", "symbols": ["_", "eventIn$string$1", "_", "singleEvent"], "postprocess": function(d){return d[3]}},
    {"name": "eventOut$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "eventOut", "symbols": ["_", "eventOut$string$1", "_", "singleEvent"], "postprocess": function(d){return d[3]}},
    {"name": "singleEvent$string$1", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent", "symbols": ["_", "singleEvent$string$1", "_", {"literal":"("}, "_", {"literal":"'"}, "_", "String", "_", {"literal":"'"}, "_", {"literal":")"}], "postprocess": function(d){ return {'type': 'keyPress','key':d[7]} }},
    {"name": "singleEvent$string$2", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent", "symbols": ["singleEvent$string$2", "_", {"literal":"("}, "_", {"literal":"'"}, "_", "Number", "_", {"literal":"'"}, "_", {"literal":")"}], "postprocess": function(d){ return {'type': 'keyPress','key':d[7]} }},
    {"name": "singleEvent$string$3", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent$string$4", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent", "symbols": ["_", "singleEvent$string$3", "playerMethods", "_", "singleEvent$string$4", "_", "Number"], "postprocess": function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } }},
    {"name": "singleEvent$string$5", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent$string$6", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent", "symbols": ["_", "singleEvent$string$5", "playerMethods", "_", "singleEvent$string$6", "_", "Number"], "postprocess": function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } }},
    {"name": "singleEvent$string$7", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent", "symbols": ["_", "singleEvent$string$7", "playerMethods", "_", {"literal":">"}, "_", "Number"], "postprocess": function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } }},
    {"name": "singleEvent$string$8", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "singleEvent", "symbols": ["_", "singleEvent$string$8", "playerMethods", "_", {"literal":"<"}, "_", "Number"], "postprocess": function(d){ return {'type': 'pgCondition', 'condition': JSON.stringify( JSON.stringify(d[1]) + JSON.stringify(d[2]) +JSON.stringify(d[4]) +JSON.stringify(d[6]) ) } }},
    {"name": "instructions", "symbols": ["_", "instruction"], "postprocess": function(d){return d[1]}},
    {"name": "instructions", "symbols": ["_", "instructions", "_", /[\n]/, "_", "instruction"], "postprocess": function(d){return JSON.stringify(d[1])+JSON.stringify(d[5])}},
    {"name": "instruction", "symbols": ["_", "String", {"literal":"."}, "String", "_", {"literal":"("}, "_", {"literal":"'"}, "_", "String", "_", {"literal":"'"}, "_", {"literal":")"}], "postprocess": function(d){return {'struct':'instruction','varName':d[1],'method':d[3],'param':d[9]} }},
    {"name": "instruction", "symbols": ["_", "String", {"literal":"."}, "String", "_", {"literal":"("}, "_", "Number", "_", {"literal":")"}], "postprocess": function(d){return {'struct':'instruction','varName':d[1],'method':d[3],'param':d[7]} }},
    {"name": "varList", "symbols": ["variable"], "postprocess": id},
    {"name": "varList", "symbols": ["varList", "_", /[\n]/, "_", "variable"], "postprocess": function(d) {return JSON.stringify(d[0])+JSON.stringify(d[4]) }},
    {"name": "variable$string$1", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$1", "__", "String", "_", {"literal":"="}, "_", "type", "_", "params", "_"], "postprocess":  function(d){
            return {
              'struct' : 'declaration',
              'varName': d[2],
              'type': d[6],
              'params': d[8]
        
            }
        
        } },
    {"name": "params", "symbols": [{"literal":"("}, "_", "ParamList", "_", {"literal":")"}], "postprocess": function(d){return d[2]}},
    {"name": "ParamList", "symbols": ["Number"], "postprocess": id},
    {"name": "ParamList", "symbols": ["ParamList", "_", {"literal":","}, "_", "Number"], "postprocess": function(d) {return d[0]+","+d[4]; }},
    {"name": "ParamList", "symbols": ["String"], "postprocess": id},
    {"name": "ParamList", "symbols": ["ParamList", "_", {"literal":","}, "_", "String"], "postprocess": function(d) {return d[0]+","+d[4]; }},
    {"name": "type$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"g"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$1"], "postprocess": id},
    {"name": "playerMethods$string$1", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"A"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "playerMethods", "symbols": ["playerMethods$string$1"], "postprocess": id},
    {"name": "playerMethods$string$2", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"X"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "playerMethods", "symbols": ["playerMethods$string$2"], "postprocess": id},
    {"name": "playerMethods$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"Y"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "playerMethods", "symbols": ["playerMethods$string$3"], "postprocess": id},
    {"name": "Number", "symbols": ["_number"], "postprocess": id},
    {"name": "_posint", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "_posint", "symbols": ["_posint", /[0-9]/], "postprocess": function(d) {return d[0] + d[1]}},
    {"name": "_int", "symbols": [{"literal":"-"}, "_posint"], "postprocess": function(d) {return d[0] + d[1]; }},
    {"name": "_int", "symbols": ["_posint"], "postprocess": id},
    {"name": "_float", "symbols": ["_int"], "postprocess": id},
    {"name": "_float", "symbols": ["_int", {"literal":"."}, "_posint"], "postprocess": function(d) {return d[0] + d[1] + d[2]; }},
    {"name": "_number", "symbols": ["_float"], "postprocess": id},
    {"name": "_number", "symbols": ["_float", {"literal":"e"}, "_int"], "postprocess": function(d){return d[0] + d[1] + d[2]; }},
    {"name": "String", "symbols": ["_str"], "postprocess": id},
    {"name": "_str", "symbols": [/[a-zA-Z_]/], "postprocess": id},
    {"name": "_str", "symbols": ["_str", /[a-zA-Z_]/], "postprocess": function(d) {return d[0] + d[1]}},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": ["_", /[\s]/], "postprocess": function() {}},
    {"name": "__", "symbols": [/[\s]/]},
    {"name": "__", "symbols": ["__", /[\s]/], "postprocess": function() {}}
]
  , ParserStart: "function"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
