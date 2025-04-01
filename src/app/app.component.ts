import { Component, ElementRef, Inject, inject, Renderer2, signal, viewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { AngularComponent } from './svg/Components/Icons-Svg/angular.component';
import { TypescriptIconsSvgComponent } from "./svg/Components/Icons-Svg/typescript-icons-svg.component";
import { EstrellaSvg } from './svg/Components/Icons-Svg/EstrellaSvg.component';
import { PostgreSql_SVG } from "./svg/Components/Icons-Svg/PostgreSql-Svg.component";
import { Reddis_Svg } from "./svg/Components/Icons-Svg/Reddis.component";
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SobreMiComponent, FooterComponent,ProyectsComponent,
    AngularComponent, EstrellaSvg, TypescriptIconsSvgComponent, PostgreSql_SVG, Reddis_Svg],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  #render2:Renderer2 = inject(Renderer2);
  #titletwo = signal<string[]>(['Hola Soy victory','Mira es un DVD','Stratovarius','Hola...']);
  public spaceCenter = viewChild<ElementRef>('viewCenterStar');
  public spaceCenterCircles = viewChild<ElementRef>('viewCenterCenter');
  public spaceCenterCirclesSm = viewChild<ElementRef>('viewCenterCentersm');

  constructor(@Inject(DOCUMENT) private doc:Document){}

  protected ColorCenterStar(eve:boolean):void{
    if(eve===true){
        console.log(this.doc.body);
        this.#render2.removeClass(this.doc.body,'Mode_Dark');
        this.#render2.addClass(this.doc.body,'class_Mode_Light');
      /*
      this.#render2.addClass(this.spaceCenter()?.nativeElement,'cajaPrincalSon');
      this.#render2.addClass(this.spaceCenterCircles()?.nativeElement,'circle_ani_black');
      this.#render2.addClass(this.spaceCenterCirclesSm()?.nativeElement,'circle_ani_black')
      */
      return;
    }
    this.#render2.removeClass(this.doc.body,'class_Mode_Light');
    this.#render2.addClass(this.doc.body,'Mode_Dark');
    console.log(this.doc.body);
    /*
    this.#render2.removeClass(this.spaceCenter()?.nativeElement,'cajaPrincalSon');
    this.#render2.removeClass(this.spaceCenterCircles()?.nativeElement,'circle_ani_black');
    this.#render2.removeClass(this.spaceCenterCirclesSm()?.nativeElement,'circle_ani_black');
    */
    return;
  }

}
