import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent} from './productos/productos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot ([
      { path: '', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'pedidos', component: PedidosComponent},
      { path: 'productos', component: ProductosComponent}
      ]) ],
  declarations: [ AppComponent, InicioComponent,CabeceraComponent,NosotrosComponent, PedidosComponent, ProductosComponent, PieComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
