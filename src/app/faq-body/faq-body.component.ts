import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-faq-body',
  templateUrl: './faq-body.component.html',
  styleUrls: ['./faq-body.component.css']
})
export class FaqBodyComponent implements OnInit {
 
  id: number;
  private sub: any;

  categoriescard:any =[
    {
        "name": "Getting Started",
        "subCat":"gettingStarted"
    },
    {
        "name":"For Consultant Companies",
        "subCat":"consultantCompanies"
    },
    {
        "name":"For Consultants",
        "subCat":"forConsultants"
    },
    {
        "name":"For Enterprises",
        "subCat":"forEnterprises"
    }
]    
  constructor(

    

  ) { }

  ngOnInit(): void {
  }

}
