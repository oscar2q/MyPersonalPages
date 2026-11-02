import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'galaxyComponentAnimation',
  imports: [],
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class GalaxyComponent {}
