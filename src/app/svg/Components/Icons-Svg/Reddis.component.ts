import { Component } from "@angular/core";
@Component({
  selector:`SVG-Reddis`,
  styles:`
    svg{
      fill:var(--svgColorBase);
    }

    @media(width <= 550px){
      svg{
        width:30px;
        height:30px;
      }
    }
  `,
  template:`
         <svg
        version="1.1"
        id="Layer_1"
        xmlns:x="&ns_extend;"
        xmlns:i="&ns_ai;"
        xmlns:graph="&ns_graphs;"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="45px"
        height="45px"
        fill="white"
        viewBox="0 0 156.0529938 144"
        style="enable-background:new 0 0 156.0529938 144;"
        xml:space="preserve">
        <path d="M147.670166,79.4482727c-10.7946014,13.6012039-22.452774,29.1454315-45.7691193,29.1454315
          c-20.8268356,0-28.5858765-18.3700104-29.1313019-33.2931824c4.5630417,9.6490479,13.4846115,17.4628525,27.4041672,17.1012802
          c26.7706146-0.8635712,45.1214371-25.0434799,45.1214371-47.0644722C145.2953491,18.9985008,125.6491776,0,91.5382309,0
          C67.1424255,0,36.9175415,9.2833586,17.0554714,23.9640179c-0.2158909,15.1124439,8.2038994,34.7586212,11.226387,32.5997009
          c17.21908-12.3804817,30.8731976-20.3501434,44.1166153-24.3462563C52.7944603,54.0785866,5.7588782,104.8391037,0,113.775116
          C0.6476762,121.9790115,10.7946024,144,15.7601204,144c1.5112438,0,2.8065968-0.8635712,4.3178406-2.3748169
          c14.1801453-15.9326324,25.7396469-30.2172928,36.0215034-43.985733
          c1.443779,20.1794739,11.366806,44.8493042,39.1089325,44.8493042c24.8275833,0,49.4392776-17.9190369,60.6656723-58.2908554
          C157.1694183,79.2323837,151.1244354,75.3463287,147.670166,79.4482727z M119.3883057,46.8485756
          c0,12.7376328-12.5217361,18.9985008-23.9640198,18.9985008c-6.1162338,0-10.8146286-1.6060638-14.5303345-3.6929359
          c6.8368607-10.3524857,13.6045761-20.9680939,20.8757477-32.3321533
          C114.5906143,31.9920292,119.3883057,39.1185226,119.3883057,46.8485756z"/>
        </svg>
  `,
})
export class Reddis_Svg{

}
