import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection:ChangeDetectionStrategy.OnPush,
  selector:'SVG-Instagram',
  imports: [],
  styles:`
  .InsIcons svg:hover #Rectangle,
  .InsIcons svg:hover #LargeCircle,
  .InsIcons svg:hover #smallCircle{
       stroke: #ff1d8d;
  }
  .InsIcons svg:hover #smallCircle {
    fill: #ff1d8d;
  }
  `,
  template:`
 <a class="InsIcons"
    href="https://www.instagram.com/ravenandwolfjr/?__pwa=1">
        <svg width="30" height="30" viewBox="0 0 113 106" fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <g id="LogInstagra">
            <rect id="Rectangle" x="4" y="4" width="105" height="98" rx="25" stroke="#C0C0C0" stroke-width="8" />
            <path id="LargeCircle"
              d="M80.5 53C80.5 64.4942 70.1526 74.5 56.5 74.5C42.8474 74.5 32.5 64.4942 32.5 53C32.5 41.5058 42.8474 31.5 56.5 31.5C70.1526 31.5 80.5 41.5058 80.5 53Z"
              stroke="#C0C0C0" stroke-width="9" />
            <circle id="smallCircle" cx="89" cy="24" r="8" fill="#C0C0C0" />
          </g>
      </svg>
  </a>
  `
})
export class InstagramSvg{}
