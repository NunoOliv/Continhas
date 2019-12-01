import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  description: String;
  rows: number;
  text: string;
  ref: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Encomendar', description:"Adiciona produtos às tuas encomendas", cols: 1, rows: 1, ref: '/order'},
    {text: 'As minhas Encomendas', description:"Ve o historico das tuas encomendas", cols: 1, rows: 1, ref: 'lightgreen'},
    {text: 'Adicionar Despesa', description:"Adiciona uma despesa à tua conta", cols: 1, rows: 1, ref: 'lightpink'},
    {text: 'As minhas contas', description:"Vê o teu saldo", cols: 1, rows: 1, ref: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
