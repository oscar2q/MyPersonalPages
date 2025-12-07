import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'SVG-Github',
  imports: [],
  styles:`
  :where(svg:hover path){
    stroke:black;
  }
  `,
  template: `
  <a href="https://github.com/oscar2q">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 654 638" fill="none">
      <g id="Github">
        <path id="CircleGit" d="M249.499 589.444C-122.5 464 42.9795 42.941 344.989 42.9414C672 42.9417 701.49 503.439 435.49 588.444"
          stroke="#C0C0C0" stroke-width="20"/>
        <path id="CatHub" d="M436.49 588.439C384.99 567.939 448.49 474.939 400.99 446.938C528.99 437.438 560.49 301.938 501.49 234.438C512.99 148.938 496.49 133.439 422.99 182.438C369.99 165.438 334.49 165.938 279.99 182.438C193.99 136.438 181.99 134.938 194.99 228.438C153.99 244.938 117.99 409.438 282.99 446.938C282.99 458.438 268.99 469.939 273.49 484.439C181.49 509.439 233.49 446.938 144.49 429.439C135.99 429.439 129.99 440.439 143.49 445.938C190.99 456.937 156.99 536.439 272.49 525.939C272.49 537.439 290.99 605.439 247.49 588.439"
          stroke="#C0C0C0" stroke-width="20"/>
      </g>
    </svg>
  </a>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class GitHubSvgComponent {}
