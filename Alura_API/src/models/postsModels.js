import conectarAoBanco from "./config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("BigJohnDB");
    const colecao = db.collection("colecao");
    return colecao.find().toArray();
}