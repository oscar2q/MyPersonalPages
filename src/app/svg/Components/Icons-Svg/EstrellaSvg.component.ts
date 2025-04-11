import { Component } from '@angular/core';

@Component({
  selector:'SVG-Estrella',
  imports: [],
  styles:`

    svg path{
      fill:var(--svgColorBase);
    }

    @media( width <= 550px){
      :where(svg){
        width:35px;
        height:35px;
      }
    }
  `,
  template:`
      <svg width="55" height="55" viewBox="0 0 51 51" fill="white" xmlns="http://www.w3.org/2000/svg">
        <g id="estrella">
        <path id="Polygon 1" d="M25 0L46.6506 37.5H3.34937L25 0Z" fill="white"/>
        <path id="Polygon 2" d="M25.1856 50.0925L3.39578 12.6732L46.6967 12.5124L25.1856 50.0925Z" fill="white"/>
        </g>
      </svg>
  `
})
export class EstrellaSvg{}
