import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const appearDiscounts = document.querySelector('.appear-discounts');
    const appearContacts = document.querySelector('.appear-contacts');
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
    io.observe(appearDiscounts);
    io.observe(appearContacts);
    for(let i=0; i < appearTexts.length; i++){
      io.observe(appearTexts[i]);
    }
  }


}
