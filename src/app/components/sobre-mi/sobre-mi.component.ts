import { Component } from '@angular/core';
import { TransitionBorderColor } from './buttom-animation/buttom_Animation';
import { style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'Sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
  animations:[
    /*trigger('BorderColor',[
      transition('* <=> *',[ TransitionBorderColor]),

    ])
      */
  ]
})
export class SobreMiComponent {

}
