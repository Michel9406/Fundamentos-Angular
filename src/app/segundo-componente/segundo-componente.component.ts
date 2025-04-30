import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importar o CommonModule aqui
import de from '@angular/common/locales/de';

@Component({
  selector: 'app-segundo-componente',
  imports: [CommonModule],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css',
  template: `<p>nome: {{ nome | uppercase }}</p>`,
  
})
export class SegundoComponenteComponent {
nome = " Michel ";
dataNascimento = "1994-03-06";
urlImagem = "/assets/img michel.png";

mostrarDataNascimento(){
  alert('A data de nascimento de Michel é: ${this.dataNascimento}')

  }
  }
