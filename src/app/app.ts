import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cv } from './cv/cv';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cv],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv-angular');
}
