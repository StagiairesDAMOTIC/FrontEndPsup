import { Component } from '@angular/core';
import {ProfilAdmisFilieresComponent} from "../profil-admis-filieres/profil-admis-filieres.component";
import {ProfilAdmisSpesComponent} from "../profil-admis-spes/profil-admis-spes.component";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrl: './statistiques.component.css'
})
export class StatistiquesComponent {

  protected readonly ProfilAdmisFilieresComponent = ProfilAdmisFilieresComponent;
  protected readonly ProfilAdmisSpesComponent = ProfilAdmisSpesComponent;
}
