import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miguel Angel Orjuela Riaño';
  correo = 'miguel-orjuelar@unilibre.edu.co';
  Quimicos: any = [
    {nombre: 'Nombre elemento', simbolo: 'Simbolo', numero : 'Numero atomico', peso: 'Peso atomico'},
    {nombre: 'Titanio', simbolo: 'Ti', numero : 22, peso: 47.867},
    {nombre: 'Calcio', simbolo: 'Ca', numero : 20, peso: 40.078},
    {nombre: 'Litio', simbolo: 'Li', numero : 3, peso: 6.94},
    {nombre: 'Helio', simbolo: 'He', numero : 2, peso: 4.0026},
    {nombre: 'Hidrogeno', simbolo: 'H', numero : 1, peso: 1.008},
    {nombre: 'Oxigeno', simbolo: 'O', numero : 8, peso: 15.999},
    {nombre: 'Tantalo', simbolo: 'Ta', numero : 73, peso: 180.95},
    {nombre: 'Francio', simbolo: 'Fr', numero : 87, peso: 223},
    {nombre: 'Fosforo', simbolo: 'P', numero : 15, peso: 30.974},
  ]
}
