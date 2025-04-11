import { Component, input } from "@angular/core";

@Component({
  selector:`SVG-PosgreSql`,
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
  template:`
          <svg
           width="70"
           height="70"
           viewBox="0 0 101 87"
           fill="white"
           xmlns="http://www.w3.org/2000/svg"
           >
          <g id="postgresql">
          <path id="cuerno_izqui" d="M47.9842 55.0688C47.277 57.5439 41.4428 60.1096 38.4374 60.8167C43.3876 63.4686 49.9289 60.8167 51.3432 57.5439C51.3432 56.0858 49.6357 55.0688 47.9842 55.0688Z"
          stroke="none"/>
          <path id="cuerno_dere" d="M87.9394 55.225C84.2267 58.3416 79.8069 59.0488 75.3871 58.3416C74.1495 55.6898 76.4478 54.2754 78.7335 55.225C83.3301 56.5081 84.4035 56.3313 87.9394 55.225Z"
          stroke="none"/>
          <path id="ojo_izi" d="M42.6036 29.5253C43.439 32.524 45.7373 31.64 47.5538 30.9397C46.493 29.5253 44.0179 27.5738 42.6036 29.5253Z"
          stroke="none"/>
          <path id="ojo_dere" d="M70.6294 29.7184C71.5562 28.1273 73.1473 28.3041 74.8724 28.6577C74.8724 29.7184 73.3241 32.5418 70.6294 29.7184Z"
          stroke="none"/>
          <path id="orega_izquierda" d="M34.8762 26.811C35.7855 33.0603 31.872 45.5492 39.4624 51.9771C35.596 55.4292 34.6299 60.0646 29.562 61.1703C23.9163 58.4551 17.5099 35.5354 16.6665 29.463L16.6612 29.4248C15.4352 20.5979 14.2102 11.7781 27.2741 7.89425C30.9867 6.30311 35.5833 8.60142 41.7711 9.83896C37.3409 16.2649 35.7855 18.3865 34.8762 26.811Z"
          stroke="none"/>
          <path id="rostro" d="M37.598 27.2775C39.7641 7.18264 52.8022 8.11327 54.0398 8.11326C55.2773 8.11325 67.1224 8.454 76.4925 24.1886C72.2494 24.1886 71.144 24.1886 69.244 25.733C62.8794 27.2775 69.244 44.8733 75.7853 52.2986C70.1279 52.2986 72.1374 69.7201 70.4815 75.9889C68.0064 85.3589 56.6917 83.0606 56.6917 81.2926C48.736 77.4032 59.5204 54.9505 48.736 52.2986C53.1113 45.5805 54.1721 29.4924 48.9128 25.733C45.5537 24.8491 42.7695 23.9651 37.598 27.2775Z"
          stroke="none"/>
          <path id="cache_izquierdo" d="M48.1258 28.0448C52.0138 37.2606 48.7017 44.2422 45.5194 52.1753C31.7281 48.1316 40.5237 35.1165 37.8718 29.1056C41.4077 27.1609 45.1203 26.9841 48.1258 28.0448Z"
          stroke="none"/>
          <path id="cache_izquierdo_2" d="M75.9176 48.039C77.1552 40.4369 75.2105 31.0669 76.6248 27.1774C73.9729 27.1774 73.7961 26.6471 70.7907 27.7078C66.5476 30.1829 69.9067 38.4922 75.9176 48.039Z"
          stroke="none"/>
          <path id="oreja_dere" d="M88.6465 16.6797C83.8731 11.1991 78.3366 7.12378 66.0171 8.90078C78.5693 15.4421 76.8014 20.7459 79.8069 25.3425C78.3925 27.1105 81.398 42.4914 78.3925 51.3311C87.409 39.6627 90.9448 18.6244 88.6465 16.6797Z"
          stroke="none"/>
          </g>
        </svg>
  `,
})
export class PostgreSql_SVG {
    public widhtF = input<number>(70);
    public height = input<number>(70);
}
