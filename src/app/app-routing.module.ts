import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { AgregarComponent } from './componente/producto/agregar/agregar.component';
import { DetalleComponent } from './componente/producto/detalle/detalle.component';
import { EditarComponent } from './componente/producto/editar/editar.component';
import { ListaComponent } from './componente/producto/lista/lista.component';

const routes: Routes = 
[
{path:'',redirectTo:'/inicio', pathMatch:'full'},
{path:'inicio' , component: InicioComponent},
{path:'producto/add', component:AgregarComponent},
{path:'producto/detalle:id', component:DetalleComponent},
{path:'producto/lista:id', component:ListaComponent},
{path:'producto/editar:id', component:EditarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
