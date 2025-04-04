import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TerminalComponent } from '../../components/terminal/terminal.component';
import { HtmlCssJsComponent } from '../../components/html-css-js/html-css-js.component';
import { CommonModule } from '@angular/common';
import { AngularComponent } from '../../components/angular/angular.component';
import { GitComponent } from '../../components/git/git.component';
import { ProgramacionComponent } from '../../components/programacion/programacion.component';
import { FunctionsComponent } from '../../components/functions/functions.component';

type OptionsVisibility = {
  [key: string]: boolean; // Firma de índice para acceso dinámico
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ProgramacionComponent, 
    GitComponent, 
    AngularComponent, 
    CommonModule, 
    HtmlCssJsComponent, 
    TerminalComponent, 
    FunctionsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  optionShow: OptionsVisibility = {};

  // Actualiza el estado cuando se recibe el evento del sidebar
  onOptionChanged(visibleState: OptionsVisibility) {
    this.optionShow = visibleState;
    console.log(this.optionShow);
  }
}
