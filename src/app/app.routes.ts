import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarcosComponent } from './pages/marcos/marcos.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

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
        path: "**",
        redirectTo: "home"
    },




];
