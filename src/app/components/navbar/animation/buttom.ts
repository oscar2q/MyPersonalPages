import { animate, style, state } from "@angular/animations";
import { Transform } from "node:stream";


export const TransitionSelect =
  state('ButtomNight',
    style({
      transform:'translateX(56px)',
      boxShadow:'-1px 0px 2px #353535'
    })
  )
  state('ButtomLight',
    style({
      transform:'translateX(56px)',
      boxShadow:'-1px 0px 2px #353535'
    }));


    export const navBarAnimacion =
    state('buttomSee',
      style({
        transform:'translateX(-63px)',
      }),
    )
    state('buttomNotSee',
      style({
        transform:'translateX(0px)'
      })
  )
