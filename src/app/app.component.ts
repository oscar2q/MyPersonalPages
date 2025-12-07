import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, Inject, inject, Renderer2,
  Signal, viewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { DOCUMENT } from '@angular/common';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { GalaxyComponent } from './components/pantallaInicio/galaxy/galaxycomponent';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SobreMiComponent, FooterComponent, ProyectsComponent,
    HerramientasComponent, GalaxyComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent{

      constructor(@Inject(DOCUMENT) private doc:Document){
        afterNextRender(
          {
            earlyRead:()=>{ this.canvasStart = this.canvasAnimationUniverses()?.nativeElement.getContext('2d');},
            read:()=>{ this.verificationColorsSelect(); this.animation();  }
           }
        );
      }

      ngOnInit(): void{ this.initStart(); }

  #render2:Renderer2 = inject(Renderer2);

  private canvasAnimationUniverses:Signal<ElementRef<HTMLCanvasElement> | undefined> = viewChild<ElementRef<HTMLCanvasElement>>('pacCanvas');
  protected canvasStart:CanvasRenderingContext2D | undefined | null = null;
  protected startsSky = [
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0 ,y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'' ,moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
    { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'' ,moveCate:0 }, { x:0, y:0 , speed:1, rotate:0,tamano:0, color:'', moveCate:0 },
  ];

  protected colorRamdom = [
    '#d99f69','#e49393','#84be87','#5fc1ac',
    '#59bcd5','#7cb1e9','#a6a4e9','#cb98d1',
  ];

  private size = [20, 30, 40];

  public animationCreationStar(){
      for(const start of this.startsSky){
          this.canvasStart?.save();
            const centerX = start.x +25;
            const centerY = start.y + 25;
          this.canvasStart!.fillStyle = start.color;
          this.canvasStart?.translate(centerX,centerY);
          this.canvasStart?.rotate((start.rotate*Math.PI)/180);
          this.canvasStart?.fillRect(-25,-25,start.tamano,start.tamano);
          this.canvasStart?.restore();
        }
    }

   initStart():void{
    for(let start=0; start<this.startsSky.length;start = start+1 ){
      this.startsSky[start].x = this.ramdomXStart();
      this.startsSky[start].y = this.ramdomYStart();
      this.startsSky[start].rotate = this.ramdomRotate();
      this.startsSky[start].tamano = this.ramdomSize();
      this.startsSky[start].color = this.ramdomColor();
      this.startsSky[start].moveCate = this.movePlaneDirection();
    }
  }

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

   ramdomXStart():number{
    return Math.random() * (1000 - 100) + 100;
  }

   ramdomYStart():number{
    return Math.random() * (1170 - 100) + 100;
  }

  ramdomRotate():number{
    return Math.random()* (360 - 0) + 0;
  }

  protected campusConcentracion(){
    console.log("campo magnetico");
  }

  protected animationStart(){
    for(let start=0; start<this.startsSky.length;start = start+1 ){
      this.startsSky[start].x -=1;
      this.startsSky[start].y -=1;
    }
  }

  protected ramdomColor():string{
    return this.colorRamdom[Math.floor(Math.random()*(5-0)+0)];
  }

  protected ramdomSize(){
    return this.size[ Math.floor(Math.random()*(2-0)+0) ];
  }

  private animation = ()=>{
    this.canvasStart?.clearRect(0, 0,
      this.canvasAnimationUniverses()!.nativeElement.width,
      this.canvasAnimationUniverses()!.nativeElement.height
    );
    this.animationCreationStar();
    this.nextAnimation();
    this.animationCreationStar();
    window.requestAnimationFrame(this.animation);
  }

  protected nextAnimation(){
     this.startsSky.forEach((start)=>{
        if(start.x >= 1170 || start.y >= 630 ){
          start.x = this.ramdomXStart();
          start.y = this.ramdomYStart();
        }
          this.cartesianPlaneDirection(start);
          //start.x +=0.5; start.y +=0.5; start.rotate +=1;
          //console.log(start.speed);
      });
  }

  private movePlaneDirection():number{
    return Math.floor(Math.random()*(4-0)+1);
  }

  private cartesianPlaneDirection(start:any){
    switch(start.moveCate){
        case 1:
            start.x +=0.1; start.y +=0.1; start.rotate +=1;
          break;
        case 2:
            start.x -=0.1; start.y +=0.1; start.rotate -=1;
          break;
        case 3:
            start.x -=0.1; start.y -=0.1; start.rotate +=1;
          break;
        case 4:
            start.x +=0.1; start.y -=0.1; start.rotate -=1;
          break;
        default:
           start.x +=0.1; start.y +=0.1; start.rotate +=1;
          break;
    }
  }

}
