import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';

@Component({
  selector: 'SVG-angular',
  imports: [],
  styles:`

  svg{
    fill:var(--svgColorBase);
  }

  @media(width <= 550px){
    svg{
          width:45px;
          height:45px;
      }
  }
  `,
  template: `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	        width="55px" height="55px" fill="#f4c2c2" viewBox="0 0 960 960" style="enable-background:new 0 0 960 960;"
          xml:space="preserve" >
          <g>
	          <polygon points="562.6,109.8 804.1,629.5 829.2,233.1" />
	          <polygon points="624.9,655.9 334.3,655.9 297.2,745.8 479.6,849.8 662,745.8 	"/>
	          <polygon points="384.1,539.3 575.2,539.3 479.6,307 	"/>
	          <polygon points="396.6,109.8 130,233.1 155.1,629.5 	"/>
          </g>
      </svg>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AngularComponent {
  private render2:Renderer2 = inject(Renderer2);
  public svgColor = viewChild<ElementRef>('svgsC');

  public widhtF = input<number>(55);
  public height = input<number>(55);
  public daylight = input<boolean>(false);

  public colorBlack(event:boolean):void{
     if(event){
       this.render2.addClass(this.svgColor()?.nativeElement,'colors');
       return;
      }
    this.render2.removeClass(this.svgColor()?.nativeElement,'colors');
      return;
  }



}
