import { Component, OnInit } from '@angular/core';
import { Menu } from './model/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Lanchonete';

  listMenu: Array<Menu> = [
    { icon: 'dashboard', nome: 'Home', url: '/Home' },
    { icon: 'point_of_sale', nome: 'Central de comanda', url: '/CentralComanda' },
    { icon: 'lunch_dining', nome: 'Produto', url: '/Produto' },
    { icon: 'monetization_on', nome: 'Financeiro', url: '/Finenceiro' },
    { icon: 'inventory_2', nome: 'Estoque', url: '/Estoque' },
    { icon: 'person', nome: 'Funcionário', url: '/Funcionario' },
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
