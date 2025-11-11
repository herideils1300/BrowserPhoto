import { Component, ViewChild } from '@angular/core';
import { LoginPage } from "../login-page/login-page";
import { PackagePickPage } from './subSlides/package-pick-page/package-pick-page';

@Component({
  selector: 'app-register-page',
  imports: [],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  //TODO: Create factory pattern for this part. No hardcode...
  compList: Component[] = [
    new PackagePickPage()
  ]

  @ViewChild("nextSlide") nextSlide?: HTMLDivElement;
  @ViewChild("currentSlide") currentSlide?: HTMLDivElement;
  nextSlideIndex = 1;

  pushNextSlide() {
    var inbetween: string = "";

    inbetween = this.currentSlide!.style.position;
    this.currentSlide!.style.position = this.nextSlide!.style.position;
    this.nextSlide!.style.position = inbetween;
  }
  
}
