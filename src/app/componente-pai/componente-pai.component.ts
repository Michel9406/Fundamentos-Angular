import { Component } from '@angular/core';
import { ComponenteFilhoComponent } from "../componente-filho/componente-filho.component";

@Component({
  selector: 'app-componente-pai',
  imports: [ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
sobrenome = " Gonçalves "
mostrarNomeCompleto (nomeCompleto: any){
  alert ('o nome completo é: ${nomeCompleto}');
}

}
