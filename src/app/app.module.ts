import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot ([
      { path: '', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'pedidos', component: PedidosComponent}
      ]) ],
  declarations: [ AppComponent, CabeceraComponent, NosotrosComponent, PedidosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
