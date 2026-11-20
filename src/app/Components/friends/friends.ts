import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  liste = signal('Liste des amis');
    n1 = signal([
      {'name': 'Ryan'},
      {'name': 'Aziz'},
      {'name': 'Fedi'}
    ]);
}
