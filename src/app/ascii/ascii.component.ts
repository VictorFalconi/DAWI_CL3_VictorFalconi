import { Component } from '@angular/core';

@Component({
  selector: 'app-ascii',
  standalone: true,
  imports: [],
  templateUrl: './ascii.component.html',
  styleUrl: './ascii.component.scss'
})
export class AsciiComponent {
  lista: {codigo: number, caracter: string}[] = [];
  mostrarTabla = false;
  generarLista() {
    for(let i = 32; i < 97; i++) {
      let elemento = {codigo: i, caracter: String.fromCharCode(i)};
      this.lista.push(elemento);
    }
    for(let i = 123; i < 165; i++) {
      let elemento = {codigo: i, caracter: String.fromCharCode(i)};
      this.lista.push(elemento);
    }
    this.mostrarTabla = true;
  }
}
