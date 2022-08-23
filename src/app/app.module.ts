import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClienteRoutingModule } from './clientes/cliente-routing.module';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ConteudoComponent,
    Erro404Component,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    TemplateModule,
    RouterModule,

    ClienteRoutingModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
