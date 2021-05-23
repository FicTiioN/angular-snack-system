import { NgModule } from '@angular/core';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';

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
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './home.component';
import { CadastroSimplificadoComponent } from './component/cadastro-simplificado/cadastro-simplificado.component';
import { EstatisticasComponent } from './component/estatisticas/estatisticas.component';
import { RelatoriosComponent } from './component/relatorios/relatorios.component';

registerLocaleData(localePt, 'pt');


@NgModule({
    declarations: [
        HomeComponent,
        CadastroSimplificadoComponent,
        EstatisticasComponent,
        RelatoriosComponent
    ],
    imports: [
        CommonModule,
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
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt'
        },

        /* if you don't provide the currency symbol in the pipe, 
        this is going to be the default symbol (R$) ... */
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        },
    ],
    exports:[
        HomeComponent,
        CadastroSimplificadoComponent,
        EstatisticasComponent,
        RelatoriosComponent
    ]
})
export class HomeModule { }
