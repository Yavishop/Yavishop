import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ProductoDetailsComponent } from './components/producto-details/producto-details.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddProductoComponent,
    ProductoDetailsComponent,
    ProductoListComponent,
    HomeComponent,
    AddUsuarioComponent,
    UsuarioDetailsComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
