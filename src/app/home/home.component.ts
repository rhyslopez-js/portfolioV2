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
  // hidden:boolean = false
 

  constructor(private http:HttpClient){}

  ngAfterViewInit(): void{
    // console.log(window.innerWidth)

    // if(window.innerWidth < 640){
    //   this.hidden = true
    // }
    // else{

    // }

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
    gsap.from('.pageTitle', {duration: 2, x: -100, ease: "power4"})
    gsap.registerPlugin(ScrollTrigger);
    const fadeElement = document.querySelector('.fade-in');
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: fadeElement,
            start: "top bottom", // The element triggers when its center reaches the top of the viewport
        }
    });
    tl.from(fadeElement, {
      opacity: 0,
      x: -1000
    });
    // Add the fade-in animation to the timeline
    tl.to(fadeElement, {
        duration:2,
        opacity: 1,
        ease: "power4"
    });

    // Project Animation
    const projectsSlide = document.querySelector('.slide-left');
    const projectsTl = gsap.timeline({
        scrollTrigger: {
            trigger: projectsSlide,
            start: "top center", // The element triggers when its center reaches the top of the viewport
        }
    });
    projectsTl.from(projectsSlide, {
      opacity: 0,
      x: -1000
    });
    // Add the fade-in animation to the timeline
    projectsTl.to(projectsSlide, {
        duration:2,
        opacity: 1,
        ease: "power4"
    });
  }


}
