import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const appearTexts = document.querySelectorAll('.appear-text');
    const cb = function(entries){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('inview');
        }else{
          entry.target.classList.remove('inview');
        }
      });
    }
    const io = new IntersectionObserver(cb);
    for(let i=0; i < appearTexts.length; i++){
      io.observe(appearTexts[i]);
    }
  }

}
