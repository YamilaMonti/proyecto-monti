import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PieComponent } from './pie/pie.component';
import { ProductosComponent} from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot ([
      { path: ' ', component: NosotrosComponent },
      { path: 'pedidos', component: PedidosComponent},
      { path: 'productos', component: ProductosComponent}
      ]) ],
  declarations: [ AppComponent, NosotrosComponent, PedidosComponent, ProductosComponent,ContactoComponent,CabeceraComponent, PieComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
