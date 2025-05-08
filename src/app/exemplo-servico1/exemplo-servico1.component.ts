import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-exemplo-servico1',
  imports: [FormsModule],
  templateUrl: './exemplo-servico1.component.html',
  styleUrl: './exemplo-servico1.component.css'
})
export class ExemploServico1Component {
nome = "";

adicionarNome(){
  console.log('O nome ${this.nome} foi adicionado');
  
}
}
