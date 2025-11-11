import { Component, inject } from '@angular/core';
import { ResetTimer } from '../../../bussines/timer/timer.impl';

@Component({
  selector: 'app-package-stats-page',
  imports: [],
  templateUrl: './package-stats-page.html',
  styleUrl: './package-stats-page.css',
})
export class PackageStatsPage {
  timer: ResetTimer = new ResetTimer();
  fetchedTime: Date = new Date();
  package = {
    allowedMegabytes: 0,
    allowedPhotos: 0
  }

  public constructor(timer: ResetTimer){
    this.timer = timer;
  }
}
