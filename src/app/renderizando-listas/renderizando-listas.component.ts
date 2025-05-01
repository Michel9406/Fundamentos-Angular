import { Component } from '@angular/core';
import { celular } from '../types/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-renderizando-listas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css',
})
export class RenderizandoListasComponent {
  celulares: celular[] = [
    { id: 1, nome: 'celular aple', descricao: '12 normal', esgotado: true },
    { id: 2, nome: 'celular aple', descricao: ' 15 pro max', esgotado: false },
    { id: 3, nome: 'celular android', descricao: 'Motorola', esgotado: false },
  ];
}
