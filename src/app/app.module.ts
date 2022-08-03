import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componente/producto/lista/lista.component';
import { DetalleComponent } from './componente/producto/detalle/detalle.component';
import { AgregarComponent } from './componente/producto/agregar/agregar.component';
import { LoginComponent } from './componente/login/login.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ListapedidosComponent } from './componente/pedidos/listapedidos/listapedidos.component';
import { DetallepedidosComponent } from './componente/pedidos/detallepedidos/detallepedidos.component';
import { EditarComponent } from './componente/producto/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    AgregarComponent,
    LoginComponent,
    InicioComponent,
    ListapedidosComponent,
    DetallepedidosComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
