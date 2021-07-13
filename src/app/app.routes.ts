import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { VillanosComponent } from "./components/villanos/villanos.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VillanoComponent } from "./components/villano/villano.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscador/:termino', component: BuscadorComponent },
  { path: 'villanos', component: VillanosComponent},
  { path: 'villano/:id', component: VillanoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});