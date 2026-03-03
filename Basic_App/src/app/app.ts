import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'Basic_App';

  sayHello(){
    alert('Welcome Users');
  }

isLoggedIn = true;

items=['Java','Angular','HTML','CSS','TS'];

names='angular';
}

