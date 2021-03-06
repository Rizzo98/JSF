// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "functionList$ebnf$1", "symbols": ["function"]},
    {"name": "functionList$ebnf$1", "symbols": ["functionList$ebnf$1", "function"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "functionList", "symbols": ["functionList$ebnf$1"], "postprocess": function(d){return d}},
    {"name": "function$string$1", "symbols": [{"literal":":"}, {"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function$string$2", "symbols": [{"literal":":"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function$string$3", "symbols": [{"literal":":"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function$string$4", "symbols": [{"literal":":"}, {"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function", "symbols": ["_funDeclaration", "_decl", "_varList", "E", "_", "function$string$1", "E", "_loop", "_loopInstanceList", "E", "_", "function$string$2", "E", "_event", "_eventInstanceList", "E", "_", "function$string$3", "E", "_", "function$string$4", "e"], "postprocess": function(d) {return  {'funName':d[0],'vars':d[2],'loop':d[8],'events':d[14]}}},
    {"name": "_funDeclaration$string$1", "symbols": [{"literal":"<"}, {"literal":"f"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_funDeclaration", "symbols": ["_funDeclaration$string$1", "__", "_name", "_", {"literal":":"}, "E"], "postprocess": function(d){return d[2]}},
    {"name": "_decl$string$1", "symbols": [{"literal":"<"}, {"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_decl", "symbols": ["_", "_decl$string$1", "_", {"literal":":"}, "E"], "postprocess": function(){}},
    {"name": "_loop$string$1", "symbols": [{"literal":"<"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_loop", "symbols": ["_", "_loop$string$1", "_", {"literal":":"}, "E"], "postprocess": function(){}},
    {"name": "_event$string$1", "symbols": [{"literal":"<"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_event", "symbols": ["_", "_event$string$1", "_", {"literal":":"}, "E"], "postprocess": function(){}},
    {"name": "_eventInstanceList$ebnf$1", "symbols": ["_eventInstance"]},
    {"name": "_eventInstanceList$ebnf$1", "symbols": ["_eventInstanceList$ebnf$1", "_eventInstance"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_eventInstanceList", "symbols": ["_eventInstanceList$ebnf$1"], "postprocess": ([items])=>(items)},
    {"name": "_eventInstance$string$1", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_eventInstance", "symbols": ["_eventInstance$string$1", "_", {"literal":"("}, "_", "_number", "_", {"literal":")"}, "e"], "postprocess": function(d){return {'type':'keyPress','key':parseFloat(d[4])}}},
    {"name": "_eventInstance$string$2", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_eventInstance", "symbols": ["_eventInstance$string$2", "_name", "_", "_operator", "_", "_number", "e"], "postprocess": function(d){return {'type':'condition','param':d[1],'operator':d[3],'value':parseFloat(d[5])} }},
    {"name": "_loopInstanceList$ebnf$1", "symbols": ["_loopInstance"]},
    {"name": "_loopInstanceList$ebnf$1", "symbols": ["_loopInstanceList$ebnf$1", "_loopInstance"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_loopInstanceList", "symbols": ["_loopInstanceList$ebnf$1"], "postprocess": ([items])=>(items)},
    {"name": "_loopInstance", "symbols": ["_", "_name", "_", {"literal":"."}, "_name", "_", {"literal":"("}, "_", "_paramList", "_", {"literal":")"}, "e"], "postprocess": function(d){return {'var':d[1],'method':d[4],'params':d[8],'paramsNumber':d[8].length} }},
    {"name": "_varList$ebnf$1", "symbols": ["_var"]},
    {"name": "_varList$ebnf$1", "symbols": ["_varList$ebnf$1", "_var"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_varList", "symbols": ["_varList$ebnf$1"], "postprocess": ([items])=>(items)},
    {"name": "_var$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_var$string$2", "symbols": [{"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_var", "symbols": ["_", "_var$string$1", "_", "_name", "_", "_var$string$2", "_", "_name", "_", {"literal":"("}, "_", "_paramList", "_", {"literal":")"}, "e"], "postprocess": function(d){return  {'varName' : d[3], 'type' : d[7], 'params':d[11] } }},
    {"name": "_paramList$ebnf$1", "symbols": ["_CommaParam"]},
    {"name": "_paramList$ebnf$1", "symbols": ["_paramList$ebnf$1", "_CommaParam"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_paramList", "symbols": ["_paramList$ebnf$1", "_param"], "postprocess": function(d){var l =[]; for (i=0; i<d[0].length;i++){l.push(d[0][i])};l.push(d[1]);return l; }},
    {"name": "_paramList", "symbols": ["_param"]},
    {"name": "_param", "symbols": ["_", "_number", "_"], "postprocess": function(d){return parseFloat(d[1]) }},
    {"name": "_param", "symbols": ["_", "_name", "_"], "postprocess": function(d){return d[1] }},
    {"name": "_CommaParam", "symbols": ["_", "_number", "_", {"literal":","}, "_"], "postprocess": function(d){return parseFloat(d[1]) }},
    {"name": "_CommaParam", "symbols": ["_", "_name", "_", {"literal":","}, "_"], "postprocess": function(d){return d[1] }},
    {"name": "_name", "symbols": [/[a-zA-Z_]/], "postprocess": id},
    {"name": "_name", "symbols": ["_name", /[\w_]/], "postprocess": function(d) {return d[0] + d[1]; }},
    {"name": "Number", "symbols": ["_number"], "postprocess": function(d) {return {'literal': parseFloat(d[0])}}},
    {"name": "_posint", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "_posint", "symbols": ["_posint", /[0-9]/], "postprocess": function(d) {return d[0] + d[1]}},
    {"name": "_int", "symbols": [{"literal":"-"}, "_posint"], "postprocess": function(d) {return d[0] + d[1]; }},
    {"name": "_int", "symbols": ["_posint"], "postprocess": id},
    {"name": "_float", "symbols": ["_int"], "postprocess": id},
    {"name": "_float", "symbols": ["_int", {"literal":"."}, "_posint"], "postprocess": function(d) {return d[0] + d[1] + d[2]; }},
    {"name": "_number", "symbols": ["_float"], "postprocess": id},
    {"name": "_number", "symbols": ["_float", {"literal":"e"}, "_int"], "postprocess": function(d){return d[0] + d[1] + d[2]; }},
    {"name": "String", "symbols": [{"literal":"\""}, "_string", {"literal":"\""}], "postprocess": function(d) {return {'literal':d[1]}; }},
    {"name": "_string", "symbols": [], "postprocess": function() {return ""; }},
    {"name": "_string", "symbols": ["_string", "_stringchar"], "postprocess": function(d) {return d[0] + d[1];}},
    {"name": "_stringchar", "symbols": [/[^\\"]/], "postprocess": id},
    {"name": "_stringchar", "symbols": [{"literal":"\\"}, /[^]/], "postprocess": function(d) {return JSON.parse("\"" + d[0] + d[1] + "\""); }},
    {"name": "_operator", "symbols": [{"literal":"="}], "postprocess": id},
    {"name": "_operator$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_operator", "symbols": ["_operator$string$1"], "postprocess": id},
    {"name": "_operator", "symbols": [{"literal":">"}], "postprocess": id},
    {"name": "_operator", "symbols": [{"literal":"<"}], "postprocess": id},
    {"name": "_operator$string$2", "symbols": [{"literal":"="}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_operator", "symbols": ["_operator$string$2"], "postprocess": id},
    {"name": "_operator$string$3", "symbols": [{"literal":"="}, {"literal":"<"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_operator", "symbols": ["_operator$string$3"], "postprocess": id},
    {"name": "e", "symbols": []},
    {"name": "e", "symbols": ["e", /[\r]/]},
    {"name": "e", "symbols": ["e", /[\n]/], "postprocess": function() {}},
    {"name": "E", "symbols": [/[\r]/]},
    {"name": "E", "symbols": ["E", /[\r]/]},
    {"name": "E", "symbols": ["E", /[\n]/], "postprocess": function() {}},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": ["_", /[\s]/], "postprocess": function() {}},
    {"name": "__", "symbols": [/[\s]/]},
    {"name": "__", "symbols": ["__", /[\s]/], "postprocess": function() {}}
]
  , ParserStart: "functionList"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
