grammar Calculadora;

programa : (comando PONTO_VIRGULA)+ EOF;

comando
    : LEIA ABRE_PAREN ID FECHA_PAREN       #CmdLeia
    | ESCREVA ABRE_PAREN expr FECHA_PAREN #CmdEscreva
    | ID ATRIBUICAO expr                  #CmdAtribuicao
    ;

expr: termo ( (OP_SOMA | OP_SUB) termo )*;
termo: fator ( (OP_MULT | OP_DIV) fator )*;
fator
    : ABRE_PAREN expr FECHA_PAREN #FatorParen
    | NUMERO                      #FatorNumero
    | ID                          #FatorId
    ;

LEIA: 'leia';
ESCREVA: 'escreva';
ATRIBUICAO: ':=';
ABRE_PAREN: '(';
FECHA_PAREN: ')';
PONTO_VIRGULA: ';';
OP_SOMA: '+';
OP_SUB: '-';
OP_MULT: '*';
OP_DIV: '/';
NUMERO: [0-9]+ ('.' [0-9]+)?;
ID: [a-zA-Z_] [a-zA-Z_0-9]*;
WS: [ \t\r\n]+ -> skip;