import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
paisBuscar: string ="";
paisRecibido: any;
paisContinents: any;
langValues: any;
iddRoot: any;
error: boolean = false;

  getPaisesWithFetch(pais: string) {
    //fetch(`https://www.apicountries.com/name/${pais}`)
    fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=false`)
    //fetch(`https://restcountries.com/v3.1/all`)
      .then(response => response.json())
      .then(data => {
        this.paisRecibido = data[0];
        this.paisContinents = data[0].continents[0];
        this.langValues = Object.values(data[0].languages);
        this.iddRoot = data[0].idd.root + data[0].idd.suffixes[0];
        this.error = false;
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.error = true;
        this.paisRecibido = null;
        console.error('Error con Fetch:', error);
      })
  }
}
