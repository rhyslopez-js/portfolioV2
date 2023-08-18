import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../interfaces/skills.interface';
import { Projects } from '../interfaces/projects.interface';
import { environment } from '../../environments/environment.dev';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  skills:any[] = []
  projects:any[]=[]
  imgURL:string = ""
  serverURL:string = environment.server
 

  constructor(private http:HttpClient){}

  ngAfterViewInit(): void{

    // Skills API
    this.http.get<Skills>(this.serverURL + '/api/skills?populate=*').subscribe(response=>{
      this.skills = response.data
    })

    // Projects API
    this.http.get<Projects>(this.serverURL + '/api/projects?populate=*').subscribe(response=>{
      this.projects = response.data
      console.log(this.projects[0].attributes.ProjectTitle)
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
      x: -1000
    });
    // Add the fade-in animation to the timeline
    tl.to(fadeElement, {
        duration:1,
        opacity: 1,
        ease: "power4"
    });
  }


}
