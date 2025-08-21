


import CalculadoraVisitor from './generated/CalculadoraVisitor.js';


export class Visitor extends CalculadoraVisitor {

    constructor() {
        super();
        this.memoria = new Map(); 
    }

    
    visitCmdAtribuicao(ctx) {
        const nomeVariavel = ctx.ID().getText();
        const valor = this.visit(ctx.expr()); 
        
        console.log(`[LOG] Atribuindo valor ${valor} para a variável '${nomeVariavel}'`);
        this.memoria.set(nomeVariavel, valor); 
    }

    
    visitCmdEscreva(ctx) {
        const valor = this.visit(ctx.expr());
        
        
        console.log(`--------------------\nSAÍDA: ${valor}\n--------------------`);
    }

    
    visitFatorNumero(ctx) {
        
        return parseFloat(ctx.NUMERO().getText());
    }

    
    visitFatorId(ctx) {
        const nomeVariavel = ctx.ID().getText();
        
        
        if (this.memoria.has(nomeVariavel)) {
            return this.memoria.get(nomeVariavel); 
        } else {
            
            throw new Error(`Erro Semântico: Variável '${nomeVariavel}' não foi definida antes de seu uso.`);
        }
    }

    
    visitFatorParen(ctx) {
        return this.visit(ctx.expr());
    }

    
    visitTermo(ctx) {
        let valorEsquerda = this.visit(ctx.fator(0)); 

        
        for (let i = 1; i < ctx.fator().length; i++) {
            const operador = ctx.getChild(i * 2 - 1).getText(); 
            const valorDireita = this.visit(ctx.fator(i));

            if (operador === '*') {
                valorEsquerda *= valorDireita;
            } else {
                if (valorDireita === 0) {
                    throw new Error("Erro de Execução: Divisão por zero.");
                }
                valorEsquerda /= valorDireita;
            }
        }
        return valorEsquerda;
    }
    
    
    visitExpr(ctx) {
        let valorEsquerda = this.visit(ctx.termo(0)); 

        
        for (let i = 1; i < ctx.termo().length; i++) {
            const operador = ctx.getChild(i * 2 - 1).getText(); 
            const valorDireita = this.visit(ctx.termo(i));

            if (operador === '+') {
                valorEsquerda += valorDireita;
            } else {
                valorEsquerda -= valorDireita;
            }
        }
        return valorEsquerda;
    }
}