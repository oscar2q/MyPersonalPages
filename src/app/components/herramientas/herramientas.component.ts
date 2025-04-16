import { Component } from '@angular/core';
import { AngularComponent } from "../../svg/Components/Icons-Svg/angular.component";
import { TypescriptIconsSvgComponent } from "../../svg/Components/Icons-Svg/typescript-icons-svg.component";
import { PostgreSql_SVG } from "../../svg/Components/Icons-Svg/PostgreSql-Svg.component";
import { NestJsSvg } from '../../svg/Components/Icons-Svg/Nestjs.component';
import { Reddis_Svg } from "../../svg/Components/Icons-Svg/Reddis.component";

@Component({
  selector: 'app-herramientas',
  imports: [AngularComponent, TypescriptIconsSvgComponent, PostgreSql_SVG, NestJsSvg, Reddis_Svg],
  styles:`

    .tools{
    row-gap: 22px;
    margin-top: 79px;
    margin-bottom:75px;
    display: flex;
    width: 100%;
    height: 167px;
    --background: green;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    color:var(--base-color-night);
    }

    .toolsLimit{
       display: flex;
       height: 70%;
       width: 38%;
       --background-color: brown;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       overflow: hidden;
    }

  .toolsSecAnim{
    height: 79%;
    --background-color: aquamarine;
    transform: translateX(24%);
    display: flex;
    flex-direction: row;
    column-gap: 60px;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    animation: animationsTools linear 20s infinite;
}

  @keyframes animationsTools{
    0%{
      transform: translateX(24%);
    }
    100%{
      transform:  translateX(-29%);
    }
  }

  `,
  template:`
    <section id="herramientas" class="tools">
      <h1>Herramientas</h1>
      <div class="toolsLimit">
        <div class="toolsSecAnim">
          <p>
            <SVG-angular />
          </p>
          <p>
            <SVG-typescript />
          </p>
          <p>
            <SVG-PosgreSql />
          </p>
          <p>
            <SVG-Nestjs />
          </p>
          <p>
            <SVG-Reddis />
          </p>
          <!-----Repeticion----->
          <p>
            <SVG-angular />
          </p>
          <p>
            <SVG-typescript />
          </p>
          <p>
            <SVG-PosgreSql />
          </p>
          <p>
            <SVG-Nestjs />
          </p>
          <p>
            <SVG-Reddis />
          </p>
        </div>
      </div>
    </section>`,
})
export class HerramientasComponent{}

