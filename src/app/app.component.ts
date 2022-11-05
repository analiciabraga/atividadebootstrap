import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade_pratica';
  data: Array<any>;//criação do array com os dados para povoar a tabela
  
  constructor() {//inserção dos elementos da tabela
    this.data = [
      {
        nome: 'Ana Licia Braga', ru: '3423922', curso: 'ADS', nasc: '09-11'
      },
      {
        nome: 'Maria', ru: '1234567', curso: 'ADS', nasc: '01-01'
      },
      {
        nome: 'Felipe', ru: '7654321', curso: 'Medicina', nasc: '23-11'
      },
      {
        nome: 'Joao', ru: '0987654', curso: 'Sistemas', nasc: '24-05'
      },
      {
        nome: 'Carla', ru: '4567890', curso: 'Direito', nasc: '14-07'
      }
    ];
  }
}
