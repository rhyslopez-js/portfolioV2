import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  

  ngAfterViewInit(): void{
    gsap.from('.pageTitle', {duration: 1, x: -100, ease: "bounce"})

    gsap.registerPlugin(ScrollTrigger);

    // Select the element you want to fade in
    const fadeElement = document.querySelector('.fade-in');

    // Create a GSAP timeline for the animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: fadeElement,
            start: "top center", // The element triggers when its center reaches the top of the viewport
        }
    });


    tl.from(fadeElement, {
      opacity: 0,
  });

    // Add the fade-in animation to the timeline
    tl.to(fadeElement, {
        opacity: 1,
        ease: "bounce"
    });
  }


}
