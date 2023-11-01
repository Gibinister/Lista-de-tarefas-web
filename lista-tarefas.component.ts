import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
})
export class ListaTarefasComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';

  tarefas = [
    {id: 1, descricao: "fez a cama", concluido: true},
    {id: 2, descricao: "Escovou os dentes", concluido: true},
    {id: 3, descricao: "Tomou cafe", concluido: true},
    {id: 4, descricao: "estudou", concluido: false},
    {id: 5, descricao: "almocou", concluido: true},
    {id: 6, descricao: "trabalhou", concluido: true},
    {id: 7, descricao: "jantou", concluido: false},
    {id: 8, descricao: "foi pra aula", concluido: false},
    {id: 9, descricao: "preparou pra dormir", concluido: false}
  ]

  toggleConcluido(tarefas: any) {
    tarefas.concluido = !tarefas.concluido;
  }


  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    if (form.valid) {
      alert('formulário OK');
    } else {
      alert('Formulário Inválido');
    }
  }
}
