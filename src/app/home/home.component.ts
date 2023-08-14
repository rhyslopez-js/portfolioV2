import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../interfaces/skills.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  skills:any[] = []
  imgURL:string = ""
 

  constructor(private http:HttpClient){}

  ngAfterViewInit(): void{

    // Skills API
    this.http.get<Skills>('http://cms.rhyslopez.com/api/skills?populate=*').subscribe(response=>{
      this.skills = response.data
      console.log(this.skills[0].attributes.SkillName)
      console.log(this.skills[0].attributes.SkillIcon.data.attributes.formats.url)
    })



    // GSAP ANIMATIONS
    gsap.from('.pageTitle', {duration: 1, x: -100, ease: "power4"})
    gsap.registerPlugin(ScrollTrigger);
    const fadeElement = document.querySelector('.fade-in');
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
        duration:1,
        opacity: 1,
        ease: "power4"
    });
  }


}
