import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { Profil } from './Components/profil/profil';
import { Friends } from './Components/friends/friends';
import { Notifications } from './Components/notifications/notifications';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Profil, Friends, Notifications, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plateformeConf');
}
