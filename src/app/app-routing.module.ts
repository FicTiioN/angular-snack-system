import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralComandaComponent } from './pages/central-comanda/central-comanda.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoComponent } from './pages/produto/produto.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'CentralComanda', component: CentralComandaComponent },
  { path: 'Produto', component: ProdutoComponent },
  { path: 'Financeiro', component: FinanceiroComponent },
  { path: 'Estoque', component: EstoqueComponent },
  { path: 'Funcionario', component: FuncionarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
