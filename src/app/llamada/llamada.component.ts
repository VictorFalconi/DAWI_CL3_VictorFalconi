import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-llamada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './llamada.component.html',
  styleUrl: './llamada.component.scss'
})
export class LlamadaComponent {
  llamada = {
    resultado: "",
    minutos: 0,
  }
  mostrarMensaje = false;
  calcularPago() {
    if(Number(this.llamada.minutos) > 5) {
      this.llamada.resultado = "El total a pagar es S/" + Number(this.llamada.minutos) * 2;
    } else {
      this.llamada.resultado = "El total a pagar es S/10";
    }
    this.mostrarMensaje = true;
  }
}
