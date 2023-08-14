import { Component } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';


  ngAfterViewInit():void{
    gsap.from('.animation', {duration: 1, x: -100, ease: "power4"})
  }
}
