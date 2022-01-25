import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AppRountingModule, AppRoutingProviders } from './app.Routing';
import { HomeComponent } from './components/home/home.component';
import { ListUsuComponent } from './components/listUsu/listUsu.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    HomeComponent,
    ListUsuComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

