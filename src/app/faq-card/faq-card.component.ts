import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.css']
})
export class FaqCardComponent implements OnInit {
  @Input() cardProb: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
