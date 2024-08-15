import { Component } from '@angular/core';

@Component({
  selector: 'app-choix-seconde',
  templateUrl: './choix-seconde.component.html',
  styleUrl: '../app.component.css',
})
export class ChoixSecondeComponent {
  // Variable qui détermine l'onglet actuellement actif
  activeTab: number = 0;
}
