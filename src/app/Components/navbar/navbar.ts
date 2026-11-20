import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = signal([
    {name: 'Accueil', path: '/home'},
    {name: 'Profil', path: '/profil'},
    {name: 'Conferences', path: '/conferences'},
    {name: 'Details', path: '/details'},
    {name: 'Amis', path: '/friends'},
    {name: 'Notifications', path: '/notifications'}
  ]);
}

