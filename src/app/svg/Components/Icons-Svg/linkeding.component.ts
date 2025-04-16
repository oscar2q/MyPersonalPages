import { Component } from '@angular/core';

@Component({
  selector:'SVG-Linkeding',
  imports: [],
  styles:`
  .linke:hover #Rectangle {
    fill: #0A66C2;
  }
  `,
  template:`
  <a class="linke" href="https://www.linkedin.com/in/oscar-victory-44b706238/">
      <svg width="31" height="31" viewBox="0 0 175 151" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Likend">
        <rect id="Rectangle" width="175" height="151" rx="20" fill="#D9D9D9"/>
        <path id="letra" d="M33.5114 139V60.4545H52.0227V139H33.5114ZM42.8182 49.3068C39.8864 49.3068 37.3636 48.3352 35.25 46.392C33.1364 44.4148 32.0795 42.0454 32.0795 39.2841C32.0795 36.4886 33.1364 34.1193 35.25 32.1761C37.3636 30.1989 39.8864 29.2102 42.8182 29.2102C45.7841 29.2102 48.3068 30.1989 50.3864 32.1761C52.5 34.1193 53.5568 36.4886 53.5568 39.2841C53.5568 42.0454 52.5 44.4148 50.3864 46.392C48.3068 48.3352 45.7841 49.3068 42.8182 49.3068ZM92.4496 92.9773V139H73.9382V60.4545H91.6314V73.8011H92.5519C94.3587 69.4034 97.2394 65.9091 101.194 63.3182C105.183 60.7273 110.109 59.4318 115.972 59.4318C121.393 59.4318 126.114 60.5909 130.137 62.9091C134.194 65.2273 137.33 68.5852 139.546 72.983C141.796 77.3807 142.904 82.7159 142.87 88.9886V139H124.359V91.8523C124.359 86.6023 122.995 82.4943 120.268 79.5284C117.575 76.5625 113.842 75.0795 109.069 75.0795C105.83 75.0795 102.95 75.7955 100.427 77.2273C97.9382 78.625 95.978 80.6534 94.5462 83.3125C93.1485 85.9716 92.4496 89.1932 92.4496 92.9773Z" fill="white"/>
        </g>
      </svg>
  </a>
  `
})
export class LinkedingSvg{}
