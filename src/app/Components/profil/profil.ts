import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  profil = signal('Profil Utilisateur');
  nom = signal('Nom:');
  nom1 = signal('Hedi');
  email = signal('Email:');
  e = signal('mohamedhedi.mehdoui@esprit.tn');
}
