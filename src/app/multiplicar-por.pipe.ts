import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPor',
  standalone: true
})
export class MultiplicarPorPipe implements PipeTransform {

  transform(valor: number, multiplicador: number ): unknown {
    return valor * multiplicador;
  }

}
