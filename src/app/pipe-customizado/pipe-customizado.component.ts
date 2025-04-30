import { Component } from '@angular/core';
import { MultiplicarPorPipe } from '../multiplicar-por.pipe'; 

@Component({
  selector: 'app-pipe-customizado',
  imports: [MultiplicarPorPipe],
  templateUrl: './pipe-customizado.component.html',
  styleUrl: './pipe-customizado.component.css',

})
export class PipeCustomizadoComponent {

}
