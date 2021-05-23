import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Menu } from 'src/app/model/menu';
import { Produto } from 'src/app/model/produto';
import { VendaProduto } from 'src/app/model/venda-produto';
import { productValidator } from 'src/app/shared/directive/custom-validator/product.validator';

@Component({
  selector: 'app-cadastro-simplificado',
  templateUrl: './cadastro-simplificado.component.html',
  styleUrls: ['./cadastro-simplificado.component.scss']
})
export class CadastroSimplificadoComponent implements OnInit {

  title = 'Lanchonete';

  listMenu: Array<Menu> = [
    { icon: 'dashboard', nome: 'Home', url: '/home' },
    { icon: 'point_of_sale', nome: 'Central de comanda', url: '/central-comanda' },
    { icon: 'lunch_dining', nome: 'Produto', url: '/produto' },
    { icon: 'monetization_on', nome: 'Financeiro', url: '/financeiro' },
    { icon: 'inventory_2', nome: 'Estoque', url: '/estoque' },
    { icon: 'person', nome: 'Funcionário', url: '/funcionario' },
  ];

  productCtrl = new FormControl();
  filteredProducts: Observable<Produto[]>;
  listProduto: Produto[] = [
    { id: 1, codigo: 100, nome: 'Batata Frita', valor: 5.00, image: '/assets/products/batata-frita.jpg' },
    { id: 2, codigo: 200, nome: 'Batata Frita', valor: 10.00, image: '/assets/products/batata-frita.jpg' },
    { id: 3, codigo: 300, nome: 'Batata Frita', valor: 15.00, image: '/assets/products/batata-frita.jpg' },
    { id: 4, codigo: 400, nome: 'Coca 350ML', valor: 8.00, image: '/assets/products/coca-cola-350.jpg' },
    { id: 5, codigo: 500, nome: 'Coca 600ML', valor: 12.00, image: '/assets/products/coca-cola-600.jpg' },
    { id: 6, codigo: 600, nome: 'X-Bacon', valor: 18.00, image: '/assets/products/x-bacon.jpg' },
  ];


  displayedColumns: string[] = ['image', 'nome', 'valor', 'quantidade', 'actions'];
  dataSource: MatTableDataSource<VendaProduto>;
  listVendaProduto: VendaProduto[] = [
    { id: 1, quantidade: 1, _Produto: { id: 1, codigo: 100, nome: 'Batata Frita', valor: 5.00, image: '/assets/products/batata-frita.jpg' } },
    { id: 2, quantidade: 2, _Produto: { id: 6, codigo: 600, nome: 'X-Bacon', valor: 18.00, image: '/assets/products/x-bacon.jpg' } }
  ]

  loadingCode: Boolean = false;
  saleForm = new FormGroup({
    code: new FormControl(''),
    amount: new FormControl('', [
      Validators.required
    ]),
    product: new FormControl('', [
      Validators.required,
      productValidator(this.listProduto)
    ]),
    value: new FormControl(
      {
        value: '',
        disabled: true
      }, [
      Validators.required,
    ]),
  });

  @ViewChild('amount') amountVW: ElementRef;
  @ViewChild('product') productVW: ElementRef;

  constructor() {

  }

  ngOnInit(): void {

    this.listennerInputForm();
    this.dataSource = new MatTableDataSource(this.listVendaProduto);

  }

  private listennerInputForm() {

    this.filteredProducts = this.saleForm.get('product').valueChanges
      .pipe(
        startWith(''),
        map(product => product ? this._filterProducts(product) : this.listProduto.slice())
      );

  }

  public onFormSubmit(): void {

    const productSell = this.listProduto.find( product => product.codigo === this.saleForm.get('code').value);
    this.dataSource.data = this.dataSource.data.concat([{id: 1, quantidade: this.saleForm.get('amount').value ,_Produto: productSell}]);

    this.saleForm.reset();

    this.productVW.nativeElement.focus();

  }

  public getOptionSelected(idProduct: Number) {
    this.setValues(this.listProduto.find(product => product.id == idProduct))
  }

  private setValues(product: Produto) {
    if (product) {
      this.saleForm.get('code').setValue(product.codigo)
      this.saleForm.get('product').setValue(product.nome)
      this.saleForm.get('value').setValue(product.valor)
    } else {
      this.saleForm.get('code').setValue('')
      this.saleForm.get('product').setValue('')
      this.saleForm.get('value').setValue('')
    }
    
    this.amountVW.nativeElement.focus();
  }

  private _filterProducts(value: string): Produto[] {
    const filterValue = value.toLowerCase();

    return this.listProduto.filter(product => product.nome.toLowerCase().indexOf(filterValue) === 0);
  }

}