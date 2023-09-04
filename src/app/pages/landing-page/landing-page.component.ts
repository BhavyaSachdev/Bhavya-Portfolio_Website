import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public nameStr : string = '';

  constructor() { }

  ngOnInit(): void {
    // setInterval( () => this.autoTying('Bhavya Sachdev.'),5000);
    this.autoTying('Bhavya Sachdev.✨')
  }
    
autoTying(yourName:any){
  Array.from(yourName).forEach((element, i ) => {
    setTimeout(() => {
      this.nameStr += element;
    }, i * 170);
  });
  // this.nameStr =''
  }

}
