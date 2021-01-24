import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-body',
  templateUrl: './faq-body.component.html',
  styleUrls: ['./faq-body.component.css']
})
export class FaqBodyComponent implements OnInit {
 

  categoriescard:any =[
    {
        "name": "Getting Started"
    },
    {
        "name":"For Consultant Companies"
    },
    {
        "name":"For Consultants"
    },
    {
        "name":"For Enterprises"
    }
]    
  constructor() { }

  ngOnInit(): void {
  }

}
