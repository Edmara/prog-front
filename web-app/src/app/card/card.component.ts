import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imagem = '../../assets/img/edmara.png';
  public exibe = false;
  public descricao = 'Disciplina de programação';
  public usuario = 'Edmara Cavalcante';
  public profissao = 'Engenheira de Software';

  public lista = [

    {
      id:'1',
      year: '2007',
      cert: 'SCWCD 1.5'
    },
    {
      id:'2',
      year: '2009',
      cert: 'SCWCD 1.5'
    },
    {
      id:'3',
      year: '2011',
      cert: 'CTFL'
    }
  ];





  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil() {
    this.exibe = true;
  }

  public ocultar(){
    this.exibe = false;
  }

}
