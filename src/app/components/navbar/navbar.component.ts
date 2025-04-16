import { afterRender, Component, ElementRef, inject, OnInit, output, Renderer2, viewChild, ViewEncapsulation } from '@angular/core';
import { LunaSvg } from '../../svg/Components/Icons-Svg/LunaSvg.component';
import { SolSimpleSvg } from '../../svg/Components/Icons-Svg/SolSimpleSvg.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuOpcional } from "../../svg/Components/Icons-Svg/menu.component";

@Component({
  selector: 'navbar-component',
  imports: [LunaSvg, SolSimpleSvg, MenuOpcional],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations:[
    trigger('buttomSelect',[
     state('ButtomNight',
         style({
           transform:'translateX(56px)',
           boxShadow:'-1px 0px 2px rgb(235, 235, 235)',
           backgroundColor:'#ffd280'
         })
       ),
       state('ButtomLight',
         style({
           transform:'translateX(0px)',
           boxShadow:'-1px 0px 2px #353535'
         })),
      transition('ButtomNight => ButtomLight',[animate('0.5s')]),
      transition('ButtomLight => ButtomNight',[animate('0.5s')])
    ]),
    /*fin*/
  ],
})
export class NavbarComponent{

  private render:Renderer2 = inject(Renderer2);
  protected nav = viewChild<ElementRef>('nav');
  protected minNav = viewChild<ElementRef>('minNav');

  public lightNight = false;

  protected navVarSee = false;
  protected mostrar = false;

  public flyLight = output<boolean>();

  constructor(){
    afterRender({ read:(()=>{ this.#VerificationLight(); }) })
  }

   #VerificationLight():void{
    const typeLight = localStorage.getItem('TypeLight');
    if(typeLight){
        if(typeLight === 'class_Mode_Light'){
          this.lightNight = true;
          return;
        }else if(typeLight === 'Mode_Dark'){
          this.lightNight = false;
          return;
        }
        return;
    }
    return;
  }

  public bttPagesSon():void{
    this.lightNight = true;
    this.flyLight.emit(true);
  }

  public bttPagesNight():void{
    this.lightNight = false;
    this.flyLight.emit(false);
  }

  protected navPhone():void{
    this.mostrar = !this.mostrar;
  }

  public navBarSelect():void{
    this.render.removeClass(this.minNav()?.nativeElement,'navbarSelectDisguise');
    this.render.addClass(this.minNav()?.nativeElement,'minnavNotSee');
    console.log(this.render.addClass(this.minNav()?.nativeElement,'minnavNotSee' ));
    this.render.removeClass(this.nav()?.nativeElement,'navBarSelect');
    this.render.addClass(this.nav()!.nativeElement,'navBarNotSelect');
  }

  public ocultoBarSelect():void{
    this.render.removeClass(this.nav()?.nativeElement,'navBarNotSelect');
    this.render.addClass(this.nav()?.nativeElement,'navBarSelect');
    this.render.removeClass(this.minNav()?.nativeElement,'minnavNotSee');
    this.render.addClass(this.minNav()?.nativeElement,'navbarSelectDisguise');
  }

  /*
  protected hidingNavbarPhone():void{
    this.minNav()!.nativeElement.animations([
      {transform:'translateY(0px)'},
      {transform:'translateY(-63px)'}],
      {duration:'0.5s',iterations:'forwards'}
    );

    this.nav()!.nativeElement.animations([
      {transform:'translateX(-175px)'},
      {transform:'translateX(0px)'}
    ],{duration:'0.5s',iterations:'forwards'})

  }
*/

}
