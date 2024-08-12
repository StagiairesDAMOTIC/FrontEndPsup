import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CentreDinteretComponent} from "./centre-dinteret/centre-dinteret.component";
import {ChoixDeParcoursComponent} from "./choix-de-parcours/choix-de-parcours.component";
import {DomainesDeFormationComponent} from "./domaines-de-formation/domaines-de-formation.component";
import {HomeComponent} from "./home/home.component";
import {SimulateurDeParcoursComponent} from "./simulateur-de-parcours/simulateur-de-parcours.component";
import {StatistiquesComponent} from "./statistiques/statistiques.component";
import {TrouverSaFormationComponent} from "./trouver-sa-formation/trouver-sa-formation.component";
import {TrouverSonMetierComponent} from "./trouver-son-metier/trouver-son-metier.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {ChoixPremiereTechnoComponent} from "./choix-premiere-techno/choix-premiere-techno.component";
import {ChoixPremiereGeneraleComponent} from "./choix-premiere-generale/choix-premiere-generale.component";
import {ChoixSecondeComponent} from "./choix-seconde/choix-seconde.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'centre-dinteret', component : CentreDinteretComponent},
  { path: 'trouver-sa-formation', component: TrouverSaFormationComponent},
  { path: 'simulateur-de-parcours', component: SimulateurDeParcoursComponent},
  { path: 'choix-de-parcours', component: ChoixDeParcoursComponent},
  { path: 'statistiques', component : StatistiquesComponent},
  { path: 'domaines-de-formation', component: DomainesDeFormationComponent},
  { path: 'trouver-son-metier', component: TrouverSonMetierComponent},
  { path: 'mon-profil', component : UserViewComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'choix-de-parcours/seconde', component: ChoixSecondeComponent},
  { path: 'choix-de-parcours/premiere-generale', component: ChoixPremiereGeneraleComponent},
  { path: 'choix-de-parcours/premiere-techno', component : ChoixPremiereTechnoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    CentreDinteretComponent,
    ChoixDeParcoursComponent,
    DomainesDeFormationComponent,
    HomeComponent,
    SimulateurDeParcoursComponent,
    StatistiquesComponent,
    TrouverSaFormationComponent,
    TrouverSonMetierComponent,
    UserViewComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
