import { Component } from "@angular/core";

@Component({
  selector:'SVG-Menu',
  styles:`
    svg:hover{
      fill:var(--color_rojo);
    }
  `,
  template:`
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 216 72" fill="none">
    <g id="Barra_opciones">
      <line id="barra_alto" x1="0.222473" y1="2.80069" x2="216" y2="2.80069" stroke="black" stroke-width="5"/>
      <line id="barra_medio" x1="0.222473" y1="34.8007" x2="216" y2="34.8007" stroke="black" stroke-width="5"/>
      <line id="barra_bajo" x1="0.222473" y1="68.8007" x2="216" y2="68.8007" stroke="black" stroke-width="5"/>
    </g>
  </svg>
  `,
})
export class MenuOpcional{}
