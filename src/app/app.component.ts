import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { RouterModule } from '@angular/router';
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { PipeCustomizadoComponent } from "./pipe-customizado/pipe-customizado.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PrimeiroComponenteComponent, SegundoComponenteComponent, PipeCustomizadoComponent, TwoWayDataBindingComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentos-angular';
}
