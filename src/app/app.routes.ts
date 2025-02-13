import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarcosComponent } from './pages/marcos/marcos.component';

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
        path: "**",
        redirectTo: "home"
    }





];
