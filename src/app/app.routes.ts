import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarcosComponent } from './pages/marcos/marcos.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PaisesComponent } from './pages/paises/paises.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "marcos",
        component: MarcosComponent
    },
    {
        path: "pokemon",
        component: PokemonComponent
    },
    {
        path: "paises",
        component: PaisesComponent
    },
    {
        path: "**",
        redirectTo: "home"
    },




];
