import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.scss'
})
export class CapicuaComponent {
  capicua = {
    resultado: "",
    numero: 0,
  }
  mostrarResultado = false;
  calcularCapicua(){
    if(Number(this.capicua.numero) == Number(String(this.capicua.numero).split("").reverse().join(""))) {
      this.capicua.resultado = "El número " + this.capicua.numero + " es capicúa";
    } else {
      this.capicua.resultado = "El número " + this.capicua.numero + " no es capicúa";
    }
    this.mostrarResultado = true;
  }
}
