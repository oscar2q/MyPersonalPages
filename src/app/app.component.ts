import { afterRender, Component, ElementRef, Inject, inject, OnInit, Renderer2, signal, viewChild } from '@angular/core';
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
import { HerramientasComponent } from './components/herramientas/herramientas.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SobreMiComponent, FooterComponent,ProyectsComponent,
    AngularComponent, EstrellaSvg, TypescriptIconsSvgComponent, PostgreSql_SVG, Reddis_Svg,
      HerramientasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  #render2:Renderer2 = inject(Renderer2);
  #titletwo = signal<string[]>(['Hola Soy victory','Mira es un CD','Stratovarius','Hola...']);
  public SobreMi = viewChild<ElementRef>('sobreMi');
  public spaceCenter = viewChild<ElementRef>('viewCenterStar');
  public spaceCenterCircles = viewChild<ElementRef>('viewCenterCenter');
  public spaceCenterCirclesSm = viewChild<ElementRef>('viewCenterCentersm');

  constructor(@Inject(DOCUMENT) private doc:Document){
    afterRender({
      read:()=>{
        this.verificationColorsSelect();
      }
    })
  }

  ngOnInit():void{}

  verificationColorsSelect():void{
    const typeLight = localStorage.getItem('TypeLight');
      if(typeLight){
        if(typeLight === 'class_Mode_Light'){
          this.#render2.removeClass(this.doc.body,'Mode_Dark');
          this.#render2.addClass(this.doc.body,'class_Mode_Light');
          return;
        }else{
          return;
        }
      }
      localStorage.setItem('TypeLight','ModeDark');
      return;
  }

  protected ColorCenterStar(eve:boolean):void{
    if(eve===true){
        this.#render2.removeClass(this.doc.body,'Mode_Dark');
        this.#render2.addClass(this.doc.body,'class_Mode_Light');
        localStorage.setItem('TypeLight','class_Mode_Light');
      return;
    }
    this.#render2.removeClass(this.doc.body,'class_Mode_Light');
    this.#render2.addClass(this.doc.body,'Mode_Dark');
    localStorage.setItem('TypeLight','Mode_Dark');
    return;
  }

}
