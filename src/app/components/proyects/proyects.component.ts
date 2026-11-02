import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'proyects',
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ProyectsComponent {

  constructor(){
    afterNextRender(()=>{
      console.log(window.innerHeight);
      console.log(window.innerWidth);
  })
  }

}
