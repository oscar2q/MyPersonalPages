import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularComponent } from '../../svg/Components/Icons-Svg/angular.component';
import { PostgreSql_SVG } from '../../svg/Components/Icons-Svg/PostgreSql-Svg.component';
import { NestJsSvg } from '../../svg/Components/Icons-Svg/Nestjs.component';
@Component({
  selector: 'proyects',
  imports: [AngularComponent,PostgreSql_SVG,NestJsSvg],
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
