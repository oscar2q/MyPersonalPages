import { Component } from '@angular/core';
import { FacebookSvg } from '../../svg/Components/Icons-Svg/facebook.component';
import { TwitterSvg } from '../../svg/Components/Icons-Svg/twitter.component';
import { InstagramSvg } from '../../svg/Components/Icons-Svg/instagram.component';
import { LinkedingSvg } from '../../svg/Components/Icons-Svg/linkeding.component';

@Component({
  selector: 'app-footer',
  imports: [ FacebookSvg, TwitterSvg, InstagramSvg, LinkedingSvg ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent{}
