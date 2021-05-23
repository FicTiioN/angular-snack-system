import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomeModule } from './pages/home/home.module';
import { TestComponent } from './shared/component/test/test.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { CentralComandaComponent } from './pages/central-comanda/central-comanda.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';

registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavBarComponent,
    SideBarComponent,
    CentralComandaComponent,
    ProdutoComponent,
    FinanceiroComponent,
    EstoqueComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HomeModule,
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    },

    /* if you don't provide the currency symbol in the pipe, 
    this is going to be the default symbol (R$) ... */
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
