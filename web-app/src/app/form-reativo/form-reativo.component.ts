import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {

  formCadastro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(5),
        Validators.maxLength(150)
      ])),
      'email': new FormControl(null, Validators.compose([Validators.email])),
      'telefone': new FormControl(null, Validators.required),
      'cpf': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required),
    });
  }


  ngOnInit(): void {
  }

  enviar() {
    let dados = `
      Nome: ${this.formCadastro.value.nome}
      Email: ${this.formCadastro.value.email}
      Telefone: ${this.formCadastro.value.telefone}
    `;
    console.log(dados);
  }

}
