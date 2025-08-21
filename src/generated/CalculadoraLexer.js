// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,84,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,
3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,59,8,10,11,10,
12,10,60,1,10,1,10,4,10,65,8,10,11,10,12,10,66,3,10,69,8,10,1,11,1,11,5,
11,73,8,11,10,11,12,11,76,9,11,1,12,4,12,79,8,12,11,12,12,12,80,1,12,1,12,
0,0,13,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,1,
0,4,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,
10,13,13,32,32,88,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,
21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,32,1,0,0,0,5,40,1,0,
0,0,7,43,1,0,0,0,9,45,1,0,0,0,11,47,1,0,0,0,13,49,1,0,0,0,15,51,1,0,0,0,
17,53,1,0,0,0,19,55,1,0,0,0,21,58,1,0,0,0,23,70,1,0,0,0,25,78,1,0,0,0,27,
28,5,108,0,0,28,29,5,101,0,0,29,30,5,105,0,0,30,31,5,97,0,0,31,2,1,0,0,0,
32,33,5,101,0,0,33,34,5,115,0,0,34,35,5,99,0,0,35,36,5,114,0,0,36,37,5,101,
0,0,37,38,5,118,0,0,38,39,5,97,0,0,39,4,1,0,0,0,40,41,5,58,0,0,41,42,5,61,
0,0,42,6,1,0,0,0,43,44,5,40,0,0,44,8,1,0,0,0,45,46,5,41,0,0,46,10,1,0,0,
0,47,48,5,59,0,0,48,12,1,0,0,0,49,50,5,43,0,0,50,14,1,0,0,0,51,52,5,45,0,
0,52,16,1,0,0,0,53,54,5,42,0,0,54,18,1,0,0,0,55,56,5,47,0,0,56,20,1,0,0,
0,57,59,7,0,0,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,
61,68,1,0,0,0,62,64,5,46,0,0,63,65,7,0,0,0,64,63,1,0,0,0,65,66,1,0,0,0,66,
64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,62,1,0,0,0,68,69,1,0,0,0,69,22,
1,0,0,0,70,74,7,1,0,0,71,73,7,2,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,
0,0,0,74,75,1,0,0,0,75,24,1,0,0,0,76,74,1,0,0,0,77,79,7,3,0,0,78,77,1,0,
0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,6,12,0,
0,83,26,1,0,0,0,6,0,60,66,68,74,80,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculadoraLexer extends antlr4.Lexer {

    static grammarFileName = "Calculadora.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'leia'", "'escreva'", "':='", "'('", "')'", 
                         "';'", "'+'", "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, "LEIA", "ESCREVA", "ATRIBUICAO", "ABRE_PAREN", 
                          "FECHA_PAREN", "PONTO_VIRGULA", "OP_SOMA", "OP_SUB", 
                          "OP_MULT", "OP_DIV", "NUMERO", "ID", "WS" ];
	static ruleNames = [ "LEIA", "ESCREVA", "ATRIBUICAO", "ABRE_PAREN", "FECHA_PAREN", 
                      "PONTO_VIRGULA", "OP_SOMA", "OP_SUB", "OP_MULT", "OP_DIV", 
                      "NUMERO", "ID", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculadoraLexer.EOF = antlr4.Token.EOF;
CalculadoraLexer.LEIA = 1;
CalculadoraLexer.ESCREVA = 2;
CalculadoraLexer.ATRIBUICAO = 3;
CalculadoraLexer.ABRE_PAREN = 4;
CalculadoraLexer.FECHA_PAREN = 5;
CalculadoraLexer.PONTO_VIRGULA = 6;
CalculadoraLexer.OP_SOMA = 7;
CalculadoraLexer.OP_SUB = 8;
CalculadoraLexer.OP_MULT = 9;
CalculadoraLexer.OP_DIV = 10;
CalculadoraLexer.NUMERO = 11;
CalculadoraLexer.ID = 12;
CalculadoraLexer.WS = 13;



