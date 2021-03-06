import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AminesComponent } from './components/amines/amines.component';
import { AmineComponent } from './components/amine/amine.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'amines', component: AminesComponent },
    { path: 'amine/:id', component: AmineComponent },
    { path: 'buscador/:term', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
