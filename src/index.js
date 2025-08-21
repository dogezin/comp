
import fs from 'fs';
import path from 'path';
import antlr4 from 'antlr4';
import CalculadoraLexer from './generated/CalculadoraLexer.js';
import CalculadoraParser from './generated/CalculadoraParser.js';
import { Visitor } from './CalculadoraVisitorImpl.js'; 

const nomeArquivo = process.argv[2]; 


if (!nomeArquivo) {
    console.error("ERRO: Por favor, especifique qual arquivo de exemplo você quer executar.");
    console.log("Exemplo de uso: node src/index.js exemplos/teste_sucesso.calc");
    process.exit(1); 
}

let input;
try {
    
    const filePath = path.resolve(process.cwd(), nomeArquivo);
    input = fs.readFileSync(filePath, 'utf8');
} catch (e) {
    console.error(`ERRO: Não foi possível ler o arquivo '${nomeArquivo}'. Verifique se o caminho `);
    process.exit(1); 
}



console.log(">>> Iniciando compilação \n");
console.log(input);


const chars = new antlr4.InputStream(input);
const lexer = new CalculadoraLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CalculadoraParser(tokens);


let hasError = false;
parser.removeErrorListeners(); 
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
        hasError = true;
        console.error(`\n>>> ERRO DE SINTAXE na Linha ${line}:${column} - ${msg}`);
    }
});

try {
    const tree = parser.programa(); 

    
    if (hasError) {
        console.log("\n>>> Compilação falhou ");
        process.exit(1); 
    }

    
    console.log("\n>>> Análise sintática concluída");
    const visitor = new Visitor();
    visitor.visit(tree);

} catch (e) {
    
    console.error(`\n>>> ERRO: ${e.message}`);
}