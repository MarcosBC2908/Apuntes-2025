import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type OptionsVisibility = {
  [key: string]: boolean; 
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  @Output() optionChanged = new EventEmitter<OptionsVisibility>(); 

   // Controlar la visibilidad de cada opción
   isOptionVisible: OptionsVisibility = {
    htmlCssJs: false,
    angular: false,
    git: false,
    terminal: false,
    programacion: false
  };

  // Alterna la visibilidad de la opción seleccionada
  toggleOption(option: string) {
    //Reinicia el valor inicial 
    this.isOptionVisible = {
      htmlCssJs: false,
      angular: false,
      git: false,
      terminal: false,
      programacion: false
    };
    this.isOptionVisible[option] = !this.isOptionVisible[option];
    this.optionChanged.emit(this.isOptionVisible);
  
  }

}
