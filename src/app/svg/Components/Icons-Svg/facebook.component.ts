import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector:'SVG-Facebook',
  imports: [],
  styles:`
  .facebook:hover path{
       fill: #0175D8;
  }
  `,
  changeDetection:ChangeDetectionStrategy.OnPush,
  template:`
  <a href="https://www.facebook.com/people/Victor-Navarro/pfbid038FtaBYMmf66AG1dmpnR8mYFRV5fFiXt1qgP5ED5J3fYrehrnqe8r3wtQxJ91T3oxl/">
      <svg class="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25" height="30">
          <path fill="#C0C0C0"
          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h164V328h-64v-80h64v-48c0-53 40.6-97 92.3-97h48.7v64h-32c-17.7 0-32 14.3-32 32v48h80l-12.8 80h-67.2V480h131.8c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
      </svg>
  </a>
  `
})
export class FacebookSvg{}
