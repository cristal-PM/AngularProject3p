import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AppRountingModule, AppRoutingProviders } from './app.Routing';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule,
    ReactiveFormsModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

