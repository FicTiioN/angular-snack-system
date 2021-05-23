import { VendaProduto } from "./venda-produto";

export interface Venda {
    id: number,
    comanda: number,
    _VendaProduto: VendaProduto[]
  }