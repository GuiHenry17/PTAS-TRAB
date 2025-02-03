import express from "express";
import {
  listarLivros,
  buscarLivro,
  cadastrarLivro,
  atualizarLivro,
  removerLivro,
} from "../controllers/livrosController.js";

const rotas = express.Router();

rotas.get("/livros", listarLivros);
rotas.get("/livros/:id", buscarLivro);
rotas.post("/livros", cadastrarLivro);
rotas.put("/livros/:id", atualizarLivro);
rotas.delete("/livros/:id", removerLivro);

export default rotas;
