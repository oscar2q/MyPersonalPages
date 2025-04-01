import {
  animate,
  keyframes,
  style,
} from '@angular/animations';


export const TransitionBorderColor = animate("30s",keyframes([
  style({/*0%*/borderColor:`#ffffff`}),
  style({/* 15% */
    borderColor:
  `rgb(167,144,212)
   rgb(167,144,212)
   rgb(229 ,70,134)
   rgb(229,70,134)`
   }),
   style({/*35%*/borderColor:`#ffffff`}),
   style({/*50% */
    borderColor:`
    rgb(167,144,212)
    rgb(229, 70,134)
    rgb(229, 70,134)
    rgb(229,70,134)`}),
   style({/* 80 */borderColor:`#ffffff`}),
   style({/*90*/
    borderColor:`
      rgb(229,70,134)
      rgb(229,70,134)
      rgb(229,70,134)
      rgb(229,70,134)`}),
   style({/**100*/borderColor:`#ffffff`}),
]))
/**
 *
 *  * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 *  * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 */
