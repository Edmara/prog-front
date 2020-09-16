import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imagem = '';
  public exibe = false;
  public descricao = 'Disciplina de programação';
  public usuario = 'Edmara Cavalcante';
  public profissao = 'Engenheira de Software';

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil() {
    this.exibe = !this.exibe;
  }

}
