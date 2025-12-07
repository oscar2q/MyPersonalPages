import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularComponent } from '../../../svg/Components/Icons-Svg/angular.component';
import { EstrellaSvg } from '../../../svg/Components/Icons-Svg/EstrellaSvg.component';
import { TypescriptIconsSvgComponent } from '../../../svg/Components/Icons-Svg/typescript-icons-svg.component';
import { PostgreSql_SVG } from '../../../svg/Components/Icons-Svg/PostgreSql-Svg.component';
import { Reddis_Svg } from '../../../svg/Components/Icons-Svg/Reddis.component';

@Component({
  selector: 'galaxyComponentAnimation',
  imports: [ AngularComponent, EstrellaSvg, TypescriptIconsSvgComponent,
             PostgreSql_SVG, Reddis_Svg,],
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class GalaxyComponent {}
