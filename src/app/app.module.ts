import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AminesComponent } from './components/amines/amines.component';

// Routes
import { AppRoutingModule } from './routes';


// Servicios
import { AminesService } from './services/amines.service';
import { AmineComponent } from './components/amine/amine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AminesComponent,
    AmineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AminesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
