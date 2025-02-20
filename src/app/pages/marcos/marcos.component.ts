import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-marcos',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './marcos.component.html',
  styleUrl: './marcos.component.css'
})
export class MarcosComponent {

}
