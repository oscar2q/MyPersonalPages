import { Component } from '@angular/core';
import { AngularComponent } from '../../svg/Components/Icons-Svg/angular.component';
import { PostgreSql_SVG } from '../../svg/Components/Icons-Svg/PostgreSql-Svg.component';
import { NestJsSvg } from '../../svg/Components/Icons-Svg/Nestjs.component';
@Component({
  selector: 'proyects',
  imports: [AngularComponent,PostgreSql_SVG,NestJsSvg],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

}
