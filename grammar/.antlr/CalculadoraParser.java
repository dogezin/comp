// Generated from d:/dev/compilador-final/grammar/Calculadora.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CalculadoraParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LEIA=1, ESCREVA=2, ATRIBUICAO=3, ABRE_PAREN=4, FECHA_PAREN=5, PONTO_VIRGULA=6, 
		OP_SOMA=7, OP_SUB=8, OP_MULT=9, OP_DIV=10, NUMERO=11, ID=12, WS=13;
	public static final int
		RULE_programa = 0, RULE_comando = 1, RULE_expr = 2, RULE_termo = 3, RULE_fator = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "comando", "expr", "termo", "fator"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'leia'", "'escreva'", "':='", "'('", "')'", "';'", "'+'", "'-'", 
			"'*'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEIA", "ESCREVA", "ATRIBUICAO", "ABRE_PAREN", "FECHA_PAREN", "PONTO_VIRGULA", 
			"OP_SOMA", "OP_SUB", "OP_MULT", "OP_DIV", "NUMERO", "ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Calculadora.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CalculadoraParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CalculadoraParser.EOF, 0); }
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public List<TerminalNode> PONTO_VIRGULA() { return getTokens(CalculadoraParser.PONTO_VIRGULA); }
		public TerminalNode PONTO_VIRGULA(int i) {
			return getToken(CalculadoraParser.PONTO_VIRGULA, i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(10);
				comando();
				setState(11);
				match(PONTO_VIRGULA);
				}
				}
				setState(15); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 4102L) != 0) );
			setState(17);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoContext extends ParserRuleContext {
		public ComandoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando; }
	 
		public ComandoContext() { }
		public void copyFrom(ComandoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CmdAtribuicaoContext extends ComandoContext {
		public TerminalNode ID() { return getToken(CalculadoraParser.ID, 0); }
		public TerminalNode ATRIBUICAO() { return getToken(CalculadoraParser.ATRIBUICAO, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public CmdAtribuicaoContext(ComandoContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CmdLeiaContext extends ComandoContext {
		public TerminalNode LEIA() { return getToken(CalculadoraParser.LEIA, 0); }
		public TerminalNode ABRE_PAREN() { return getToken(CalculadoraParser.ABRE_PAREN, 0); }
		public TerminalNode ID() { return getToken(CalculadoraParser.ID, 0); }
		public TerminalNode FECHA_PAREN() { return getToken(CalculadoraParser.FECHA_PAREN, 0); }
		public CmdLeiaContext(ComandoContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CmdEscrevaContext extends ComandoContext {
		public TerminalNode ESCREVA() { return getToken(CalculadoraParser.ESCREVA, 0); }
		public TerminalNode ABRE_PAREN() { return getToken(CalculadoraParser.ABRE_PAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode FECHA_PAREN() { return getToken(CalculadoraParser.FECHA_PAREN, 0); }
		public CmdEscrevaContext(ComandoContext ctx) { copyFrom(ctx); }
	}

	public final ComandoContext comando() throws RecognitionException {
		ComandoContext _localctx = new ComandoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_comando);
		try {
			setState(31);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LEIA:
				_localctx = new CmdLeiaContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(19);
				match(LEIA);
				setState(20);
				match(ABRE_PAREN);
				setState(21);
				match(ID);
				setState(22);
				match(FECHA_PAREN);
				}
				break;
			case ESCREVA:
				_localctx = new CmdEscrevaContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				match(ESCREVA);
				setState(24);
				match(ABRE_PAREN);
				setState(25);
				expr();
				setState(26);
				match(FECHA_PAREN);
				}
				break;
			case ID:
				_localctx = new CmdAtribuicaoContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(28);
				match(ID);
				setState(29);
				match(ATRIBUICAO);
				setState(30);
				expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public List<TermoContext> termo() {
			return getRuleContexts(TermoContext.class);
		}
		public TermoContext termo(int i) {
			return getRuleContext(TermoContext.class,i);
		}
		public List<TerminalNode> OP_SOMA() { return getTokens(CalculadoraParser.OP_SOMA); }
		public TerminalNode OP_SOMA(int i) {
			return getToken(CalculadoraParser.OP_SOMA, i);
		}
		public List<TerminalNode> OP_SUB() { return getTokens(CalculadoraParser.OP_SUB); }
		public TerminalNode OP_SUB(int i) {
			return getToken(CalculadoraParser.OP_SUB, i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			termo();
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OP_SOMA || _la==OP_SUB) {
				{
				{
				setState(34);
				_la = _input.LA(1);
				if ( !(_la==OP_SOMA || _la==OP_SUB) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(35);
				termo();
				}
				}
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermoContext extends ParserRuleContext {
		public List<FatorContext> fator() {
			return getRuleContexts(FatorContext.class);
		}
		public FatorContext fator(int i) {
			return getRuleContext(FatorContext.class,i);
		}
		public List<TerminalNode> OP_MULT() { return getTokens(CalculadoraParser.OP_MULT); }
		public TerminalNode OP_MULT(int i) {
			return getToken(CalculadoraParser.OP_MULT, i);
		}
		public List<TerminalNode> OP_DIV() { return getTokens(CalculadoraParser.OP_DIV); }
		public TerminalNode OP_DIV(int i) {
			return getToken(CalculadoraParser.OP_DIV, i);
		}
		public TermoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termo; }
	}

	public final TermoContext termo() throws RecognitionException {
		TermoContext _localctx = new TermoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_termo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			fator();
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OP_MULT || _la==OP_DIV) {
				{
				{
				setState(42);
				_la = _input.LA(1);
				if ( !(_la==OP_MULT || _la==OP_DIV) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(43);
				fator();
				}
				}
				setState(48);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FatorContext extends ParserRuleContext {
		public FatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fator; }
	 
		public FatorContext() { }
		public void copyFrom(FatorContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FatorParenContext extends FatorContext {
		public TerminalNode ABRE_PAREN() { return getToken(CalculadoraParser.ABRE_PAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode FECHA_PAREN() { return getToken(CalculadoraParser.FECHA_PAREN, 0); }
		public FatorParenContext(FatorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FatorIdContext extends FatorContext {
		public TerminalNode ID() { return getToken(CalculadoraParser.ID, 0); }
		public FatorIdContext(FatorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FatorNumeroContext extends FatorContext {
		public TerminalNode NUMERO() { return getToken(CalculadoraParser.NUMERO, 0); }
		public FatorNumeroContext(FatorContext ctx) { copyFrom(ctx); }
	}

	public final FatorContext fator() throws RecognitionException {
		FatorContext _localctx = new FatorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_fator);
		try {
			setState(55);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ABRE_PAREN:
				_localctx = new FatorParenContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(49);
				match(ABRE_PAREN);
				setState(50);
				expr();
				setState(51);
				match(FECHA_PAREN);
				}
				break;
			case NUMERO:
				_localctx = new FatorNumeroContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(53);
				match(NUMERO);
				}
				break;
			case ID:
				_localctx = new FatorIdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(54);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\r:\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0004\u0000\u000e\b\u0000\u000b\u0000\f"+
		"\u0000\u000f\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001 \b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002%\b\u0002\n\u0002\f\u0002(\t\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003-\b\u0003\n\u0003\f\u0003"+
		"0\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u00048\b\u0004\u0001\u0004\u0000\u0000\u0005\u0000"+
		"\u0002\u0004\u0006\b\u0000\u0002\u0001\u0000\u0007\b\u0001\u0000\t\n;"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0002\u001f\u0001\u0000\u0000\u0000\u0004"+
		"!\u0001\u0000\u0000\u0000\u0006)\u0001\u0000\u0000\u0000\b7\u0001\u0000"+
		"\u0000\u0000\n\u000b\u0003\u0002\u0001\u0000\u000b\f\u0005\u0006\u0000"+
		"\u0000\f\u000e\u0001\u0000\u0000\u0000\r\n\u0001\u0000\u0000\u0000\u000e"+
		"\u000f\u0001\u0000\u0000\u0000\u000f\r\u0001\u0000\u0000\u0000\u000f\u0010"+
		"\u0001\u0000\u0000\u0000\u0010\u0011\u0001\u0000\u0000\u0000\u0011\u0012"+
		"\u0005\u0000\u0000\u0001\u0012\u0001\u0001\u0000\u0000\u0000\u0013\u0014"+
		"\u0005\u0001\u0000\u0000\u0014\u0015\u0005\u0004\u0000\u0000\u0015\u0016"+
		"\u0005\f\u0000\u0000\u0016 \u0005\u0005\u0000\u0000\u0017\u0018\u0005"+
		"\u0002\u0000\u0000\u0018\u0019\u0005\u0004\u0000\u0000\u0019\u001a\u0003"+
		"\u0004\u0002\u0000\u001a\u001b\u0005\u0005\u0000\u0000\u001b \u0001\u0000"+
		"\u0000\u0000\u001c\u001d\u0005\f\u0000\u0000\u001d\u001e\u0005\u0003\u0000"+
		"\u0000\u001e \u0003\u0004\u0002\u0000\u001f\u0013\u0001\u0000\u0000\u0000"+
		"\u001f\u0017\u0001\u0000\u0000\u0000\u001f\u001c\u0001\u0000\u0000\u0000"+
		" \u0003\u0001\u0000\u0000\u0000!&\u0003\u0006\u0003\u0000\"#\u0007\u0000"+
		"\u0000\u0000#%\u0003\u0006\u0003\u0000$\"\u0001\u0000\u0000\u0000%(\u0001"+
		"\u0000\u0000\u0000&$\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000"+
		"\'\u0005\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000).\u0003\b\u0004"+
		"\u0000*+\u0007\u0001\u0000\u0000+-\u0003\b\u0004\u0000,*\u0001\u0000\u0000"+
		"\u0000-0\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000./\u0001\u0000"+
		"\u0000\u0000/\u0007\u0001\u0000\u0000\u00000.\u0001\u0000\u0000\u0000"+
		"12\u0005\u0004\u0000\u000023\u0003\u0004\u0002\u000034\u0005\u0005\u0000"+
		"\u000048\u0001\u0000\u0000\u000058\u0005\u000b\u0000\u000068\u0005\f\u0000"+
		"\u000071\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u000076\u0001\u0000"+
		"\u0000\u00008\t\u0001\u0000\u0000\u0000\u0005\u000f\u001f&.7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}