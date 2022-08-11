import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { ProductoListComponent  } from './components/producto-list/producto-list.component';
import { ProductoDetailsComponent } from './components/producto-details/producto-details.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'addtutorials', component: AddTutorialComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/:id', component: ProductoDetailsComponent },
  { path: 'addproductos', component: AddProductoComponent },
// usuarios
// { path: 'usuarios', component: UsuarioListComponent },
// { path: 'usuarios/:id', component: UsuarioDetailsComponent },
// { path: 'addusuarios', component: AddUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }