import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edades.component.html',
  styleUrl: './edades.component.scss'
})
export class EdadesComponent {
  mostrarMensaje = false;
  edades = {
    edad1: 0,
    edad2: 0,
    resultado: "",
  }
  calcularResultado() {
    if(Number(this.edades.edad1) > Number(this.edades.edad2)) {
      this.edades.resultado = "Edad 1 es mayor que Edad 2 y la diferencia de edades es " + (Number(this.edades.edad1) - Number(this.edades.edad2));
    } else if(Number(this.edades.edad1) < Number(this.edades.edad2)) {
      this.edades.resultado = "Edad 2 es mayor que Edad 1 y la diferencia de edades es " + (Number(this.edades.edad2) - Number(this.edades.edad1));
    } else {
      this.edades.resultado = "Edad 1 es igual que Edad 2 y no hay diferencia de edades"
    }
    this.mostrarMensaje = true;
  }
}
