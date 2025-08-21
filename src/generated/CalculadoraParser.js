// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculadoraListener from './CalculadoraListener.js';
import CalculadoraVisitor from './CalculadoraVisitor.js';

const serializedATN = [4,1,13,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,5,2,37,8,2,10,2,12,2,40,9,2,1,
3,1,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,
1,4,0,0,5,0,2,4,6,8,0,2,1,0,7,8,1,0,9,10,59,0,13,1,0,0,0,2,31,1,0,0,0,4,
33,1,0,0,0,6,41,1,0,0,0,8,55,1,0,0,0,10,11,3,2,1,0,11,12,5,6,0,0,12,14,1,
0,0,0,13,10,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,17,1,0,
0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,5,1,0,0,20,21,5,4,0,0,21,22,5,12,0,
0,22,32,5,5,0,0,23,24,5,2,0,0,24,25,5,4,0,0,25,26,3,4,2,0,26,27,5,5,0,0,
27,32,1,0,0,0,28,29,5,12,0,0,29,30,5,3,0,0,30,32,3,4,2,0,31,19,1,0,0,0,31,
23,1,0,0,0,31,28,1,0,0,0,32,3,1,0,0,0,33,38,3,6,3,0,34,35,7,0,0,0,35,37,
3,6,3,0,36,34,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,5,1,0,
0,0,40,38,1,0,0,0,41,46,3,8,4,0,42,43,7,1,0,0,43,45,3,8,4,0,44,42,1,0,0,
0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,46,1,0,0,0,49,
50,5,4,0,0,50,51,3,4,2,0,51,52,5,5,0,0,52,56,1,0,0,0,53,56,5,11,0,0,54,56,
5,12,0,0,55,49,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,9,1,0,0,0,5,15,31,
38,46,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculadoraParser extends antlr4.Parser {

    static grammarFileName = "Calculadora.g4";
    static literalNames = [ null, "'leia'", "'escreva'", "':='", "'('", 
                            "')'", "';'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "LEIA", "ESCREVA", "ATRIBUICAO", "ABRE_PAREN", 
                             "FECHA_PAREN", "PONTO_VIRGULA", "OP_SOMA", 
                             "OP_SUB", "OP_MULT", "OP_DIV", "NUMERO", "ID", 
                             "WS" ];
    static ruleNames = [ "programa", "comando", "expr", "termo", "fator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculadoraParser.ruleNames;
        this.literalNames = CalculadoraParser.literalNames;
        this.symbolicNames = CalculadoraParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculadoraParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.comando();
	            this.state = 11;
	            this.match(CalculadoraParser.PONTO_VIRGULA);
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4102) !== 0));
	        this.state = 17;
	        this.match(CalculadoraParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculadoraParser.RULE_comando);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new CmdLeiaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.match(CalculadoraParser.LEIA);
	            this.state = 20;
	            this.match(CalculadoraParser.ABRE_PAREN);
	            this.state = 21;
	            this.match(CalculadoraParser.ID);
	            this.state = 22;
	            this.match(CalculadoraParser.FECHA_PAREN);
	            break;
	        case 2:
	            localctx = new CmdEscrevaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.match(CalculadoraParser.ESCREVA);
	            this.state = 24;
	            this.match(CalculadoraParser.ABRE_PAREN);
	            this.state = 25;
	            this.expr();
	            this.state = 26;
	            this.match(CalculadoraParser.FECHA_PAREN);
	            break;
	        case 12:
	            localctx = new CmdAtribuicaoContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.match(CalculadoraParser.ID);
	            this.state = 29;
	            this.match(CalculadoraParser.ATRIBUICAO);
	            this.state = 30;
	            this.expr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculadoraParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.termo();
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 34;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 35;
	            this.termo();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculadoraParser.RULE_termo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.fator();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9 || _la===10) {
	            this.state = 42;
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 43;
	            this.fator();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fator() {
	    let localctx = new FatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculadoraParser.RULE_fator);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new FatorParenContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.match(CalculadoraParser.ABRE_PAREN);
	            this.state = 50;
	            this.expr();
	            this.state = 51;
	            this.match(CalculadoraParser.FECHA_PAREN);
	            break;
	        case 11:
	            localctx = new FatorNumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.match(CalculadoraParser.NUMERO);
	            break;
	        case 12:
	            localctx = new FatorIdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.match(CalculadoraParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculadoraParser.EOF = antlr4.Token.EOF;
CalculadoraParser.LEIA = 1;
CalculadoraParser.ESCREVA = 2;
CalculadoraParser.ATRIBUICAO = 3;
CalculadoraParser.ABRE_PAREN = 4;
CalculadoraParser.FECHA_PAREN = 5;
CalculadoraParser.PONTO_VIRGULA = 6;
CalculadoraParser.OP_SOMA = 7;
CalculadoraParser.OP_SUB = 8;
CalculadoraParser.OP_MULT = 9;
CalculadoraParser.OP_DIV = 10;
CalculadoraParser.NUMERO = 11;
CalculadoraParser.ID = 12;
CalculadoraParser.WS = 13;

CalculadoraParser.RULE_programa = 0;
CalculadoraParser.RULE_comando = 1;
CalculadoraParser.RULE_expr = 2;
CalculadoraParser.RULE_termo = 3;
CalculadoraParser.RULE_fator = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(CalculadoraParser.EOF, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	PONTO_VIRGULA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculadoraParser.PONTO_VIRGULA);
	    } else {
	        return this.getToken(CalculadoraParser.PONTO_VIRGULA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_comando;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CmdAtribuicaoContext extends ComandoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CalculadoraParser.ID, 0);
	};

	ATRIBUICAO() {
	    return this.getToken(CalculadoraParser.ATRIBUICAO, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterCmdAtribuicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitCmdAtribuicao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitCmdAtribuicao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.CmdAtribuicaoContext = CmdAtribuicaoContext;

class CmdLeiaContext extends ComandoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LEIA() {
	    return this.getToken(CalculadoraParser.LEIA, 0);
	};

	ABRE_PAREN() {
	    return this.getToken(CalculadoraParser.ABRE_PAREN, 0);
	};

	ID() {
	    return this.getToken(CalculadoraParser.ID, 0);
	};

	FECHA_PAREN() {
	    return this.getToken(CalculadoraParser.FECHA_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterCmdLeia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitCmdLeia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitCmdLeia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.CmdLeiaContext = CmdLeiaContext;

class CmdEscrevaContext extends ComandoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ESCREVA() {
	    return this.getToken(CalculadoraParser.ESCREVA, 0);
	};

	ABRE_PAREN() {
	    return this.getToken(CalculadoraParser.ABRE_PAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	FECHA_PAREN() {
	    return this.getToken(CalculadoraParser.FECHA_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterCmdEscreva(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitCmdEscreva(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitCmdEscreva(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.CmdEscrevaContext = CmdEscrevaContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_expr;
    }

	termo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoContext);
	    } else {
	        return this.getTypedRuleContext(TermoContext,i);
	    }
	};

	OP_SOMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculadoraParser.OP_SOMA);
	    } else {
	        return this.getToken(CalculadoraParser.OP_SOMA, i);
	    }
	};


	OP_SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculadoraParser.OP_SUB);
	    } else {
	        return this.getToken(CalculadoraParser.OP_SUB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_termo;
    }

	fator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FatorContext);
	    } else {
	        return this.getTypedRuleContext(FatorContext,i);
	    }
	};

	OP_MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculadoraParser.OP_MULT);
	    } else {
	        return this.getToken(CalculadoraParser.OP_MULT, i);
	    }
	};


	OP_DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculadoraParser.OP_DIV);
	    } else {
	        return this.getToken(CalculadoraParser.OP_DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitTermo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitTermo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_fator;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FatorParenContext extends FatorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ABRE_PAREN() {
	    return this.getToken(CalculadoraParser.ABRE_PAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	FECHA_PAREN() {
	    return this.getToken(CalculadoraParser.FECHA_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterFatorParen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitFatorParen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitFatorParen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.FatorParenContext = FatorParenContext;

class FatorIdContext extends FatorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CalculadoraParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterFatorId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitFatorId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitFatorId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.FatorIdContext = FatorIdContext;

class FatorNumeroContext extends FatorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(CalculadoraParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterFatorNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitFatorNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitFatorNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.FatorNumeroContext = FatorNumeroContext;


CalculadoraParser.ProgramaContext = ProgramaContext; 
CalculadoraParser.ComandoContext = ComandoContext; 
CalculadoraParser.ExprContext = ExprContext; 
CalculadoraParser.TermoContext = TermoContext; 
CalculadoraParser.FatorContext = FatorContext; 
