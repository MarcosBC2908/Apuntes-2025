import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Marcos', path: '/marcos' },
    { label: 'Marco', path: '/marco' },
    { label: 'Ibra', path: '/ibra' },
    { label: 'Samantha', path: '/samantha' },
    { label: 'Salir', path: '/salir' }
  ];
}
