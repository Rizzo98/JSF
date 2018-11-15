// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
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
  , ParserStart: "_varList"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
