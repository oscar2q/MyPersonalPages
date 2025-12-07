import { afterEveryRender, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, OnInit, output, Renderer2, viewChild, ViewEncapsulation } from '@angular/core';
import { LunaSvg } from '../../svg/Components/Icons-Svg/LunaSvg.component';
import { SolSimpleSvg } from '../../svg/Components/Icons-Svg/SolSimpleSvg.component';
import { MenuOpcional } from "../../svg/Components/Icons-Svg/menu.component";

@Component({
  selector: 'navbar-component',
  imports: [LunaSvg, SolSimpleSvg, MenuOpcional],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent{

  private render:Renderer2 = inject(Renderer2);
  protected nav = viewChild<ElementRef>('nav');
  protected minNav = viewChild<ElementRef>('minNav');
  protected buttomLightNight = viewChild<ElementRef>('buttomLN');

  protected navVarSee = false;
  protected mostrar = false;

  public flyLight = output<boolean>();

  constructor(private ref: ChangeDetectorRef){
    afterEveryRender({ write:(()=>{ this.#VerificationLight(); }) })
  }

   #VerificationLight():void{
    const typeLight = localStorage.getItem('TypeLight');
    if(typeLight){
        if(typeLight === 'class_Mode_Light'){
          this.render.addClass(this.buttomLightNight()?.nativeElement,'buttomNight');
          return;
        }else if(typeLight === 'Mode_Dark'){
          this.render.addClass(this.buttomLightNight()?.nativeElement,'buttomLight');
          return;
        }
        return;
    }
    return;
  }

  public bttPagesSon():void{
    this.render.addClass(this.buttomLightNight()?.nativeElement , 'buttomNight');
    this.render.removeClass(this.buttomLightNight()?.nativeElement,'buttomLight');
    this.flyLight.emit(true);
    //this.ref.markForCheck();
  }

  public bttPagesNight():void{
    this.render.addClass(this.buttomLightNight()?.nativeElement , 'buttomLight');
    this.render.removeClass(this.buttomLightNight()?.nativeElement,'buttomNight');
    this.flyLight.emit(false);
    //this.ref.markForCheck();s
  }

  protected navPhone():void{
    this.mostrar = !this.mostrar;
  }

  public navBarSelect():void{
    this.render.removeClass(this.minNav()?.nativeElement,'navbarSelectDisguise');
    this.render.addClass(this.minNav()?.nativeElement,'minnavNotSee');

    this.render.removeClass(this.nav()?.nativeElement,'navBarSelect');
    this.render.addClass(this.nav()!.nativeElement,'navBarNotSelect');

  }

  public ocultoBarSelect():void{
    this.render.removeClass(this.nav()?.nativeElement,'navBarNotSelect');
    this.render.addClass(this.nav()?.nativeElement,'navBarSelect');

    this.render.removeClass(this.minNav()?.nativeElement,'minnavNotSee');
    this.render.addClass(this.minNav()?.nativeElement,'navbarSelectDisguise');
  }

}
