import { Component } from '@angular/core';

@Component({
  selector: 'app-package-stats-page',
  imports: [],
  templateUrl: './package-stats-page.html',
  styleUrl: './package-stats-page.css',
})
export class PackageStatsPage {
  fetchedTime: Date = new Date();
  package = {
    allowedMegabytes: 0,
    allowedPhotos: 0
  }

  public constructor(){
  }
}
