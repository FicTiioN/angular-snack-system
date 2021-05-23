import { Produto } from "./produto";

export interface VendaProduto {
    id: Number,
    quantidade: Number,
    _Produto: Produto
  }