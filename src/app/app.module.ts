import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConteudoComponent } from './conteudo/conteudo.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { TemplateModule } from './template/template.module';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { ClientesRoutingModule } from './cliente/clientes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConteudoComponent,
    Erro404Component,
    HomeComponent,
    LayoutComponent,
    ClienteFormComponent,
    ClienteListaComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    TemplateModule,
    RouterModule,

    ClientesRoutingModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
