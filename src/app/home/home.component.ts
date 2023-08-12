import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  ngAfterViewInit(): void{
    gsap.from('.pageTitle', {duration: 1, x: -100, ease: "bounce"})
  }


}
