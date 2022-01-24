import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { HomeComponent } from "./components/home/home.component";

const routes : Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'articulos/:lang/:duration',component:ArticulosComponent},
    {path:'articulos/:lang',component:ArticulosComponent},
    {path:'articulos',component:ArticulosComponent},
];

export const AppRountingModule : ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
export const AppRoutingProviders : any[] = new Array();