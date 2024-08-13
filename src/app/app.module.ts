import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CentreDinteretComponent} from "./centre-dinteret/centre-dinteret.component";
import {DomainesDeFormationComponent} from "./domaines-de-formation/domaines-de-formation.component";
import {HomeComponent} from "./home/home.component";
import {SimulateurDeParcoursComponent} from "./simulateur-de-parcours/simulateur-de-parcours.component";
import {TrouverSaFormationComponent} from "./trouver-sa-formation/trouver-sa-formation.component";
import {TrouverSonMetierComponent} from "./trouver-son-metier/trouver-son-metier.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {ChoixPremiereTechnoComponent} from "./choix-premiere-techno/choix-premiere-techno.component";
import {ChoixPremiereGeneraleComponent} from "./choix-premiere-generale/choix-premiere-generale.component";
import {ChoixSecondeComponent} from "./choix-seconde/choix-seconde.component";
import {ProfilAdmisFilieresComponent} from "./profil-admis-filieres/profil-admis-filieres.component";
import {ProfilAdmisSpesComponent} from "./profil-admis-spes/profil-admis-spes.component";
import {ChancesAdmissionNiveauComponent} from "./chances-admission-niveau/chances-admission-niveau.component";
import {InfoEleveComponent} from "./info-eleve/info-eleve.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'centre-dinteret', component : CentreDinteretComponent},
  { path: 'trouver-sa-formation', component: TrouverSaFormationComponent},
  { path: 'simulateur-de-parcours', component: SimulateurDeParcoursComponent},
  { path: 'domaines-de-formation', component: DomainesDeFormationComponent},
  { path: 'trouver-son-metier', component: TrouverSonMetierComponent},
  { path: 'mon-profil', component : UserViewComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'choix-de-parcours/seconde', component: ChoixSecondeComponent},
  { path: 'choix-de-parcours/premiere-generale', component: ChoixPremiereGeneraleComponent},
  { path: 'choix-de-parcours/premiere-techno', component : ChoixPremiereTechnoComponent},
  { path: 'statistiques/ProfilAdmisFilieres', component: ProfilAdmisFilieresComponent },
  { path: 'statistiques/ProfilAdmisSpes', component: ProfilAdmisSpesComponent },
  { path: 'statistiques/ChancesAdmissionNiveau', component: ChancesAdmissionNiveauComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    InfoEleveComponent,
    CentreDinteretComponent,
    ChoixSecondeComponent,
    ChoixPremiereGeneraleComponent,
    ChoixPremiereTechnoComponent,
    DomainesDeFormationComponent,
    HomeComponent,
    SimulateurDeParcoursComponent,
    TrouverSaFormationComponent,
    TrouverSonMetierComponent,
    UserViewComponent,
    LoginComponent,
    RegisterComponent,
    ProfilAdmisFilieresComponent,
    ProfilAdmisSpesComponent,
    ChancesAdmissionNiveauComponent,
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
