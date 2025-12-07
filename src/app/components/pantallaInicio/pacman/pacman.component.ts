import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'EggsPacman',
  imports: [],
  templateUrl: './pacman.component.html',
  styleUrl: './pacman.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PacmanComponent {
  protected canvas = viewChild<ElementRef<HTMLCanvasElement>>('#pacCanvas');

}
