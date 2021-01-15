import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './features/menu/menu.component';
import { ListarSegurosComponent } from './features/listar-seguros/listar-seguros.component';
import { CadastroSeguroComponent } from './features/cadastro-seguro/cadastro-seguro.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { FormSeguroComponent } from './form-seguro/form-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarSegurosComponent,
    CadastroSeguroComponent,
    FormSeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
