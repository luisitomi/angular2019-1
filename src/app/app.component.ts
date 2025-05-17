import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncarTextoPipe } from './truncar-texto.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TruncarTextoPipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demostración de Pipes en Angular';
  fechaActual: Date = new Date(); //DatePipe
  mensaje: string = 'Hola Mundo, Angular!'; //UpperCasePipe - LowerCasePipe
  precioProducto: number = 1234.56789;//CurrencyPipe -  DecimalPipe
  progresoCompletado: number = 0.75; //PercenPipe
  datosUsuario: {nombre: string, edad: number, ciudad: string} = {
    nombre: 'Alicia',
    edad: 28,
    ciudad: 'Lima',
  };//Jsonpipe
  textoLargo: string = 'Este es un texto muy largo para demostrar el pipe slice.';//SlicePipe
  arrayNumeros: number[] = [10, 20, 30, 40, 50, 60];//SlicePipe
  datosAsincrono$: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
      resolve('¡Datos cargados exitosamente después de 2 segundos!')
    }, 2000);
  })//AsyncPipe
}
