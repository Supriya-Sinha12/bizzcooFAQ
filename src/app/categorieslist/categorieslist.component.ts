import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit {
  id: any;
  private sub: any;

  heading:string;

  dynamicPath:string; 


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      console.log(params.id)
      //this.id = +params['id']; // (+) converts string 'id' to a number
    
      if(params.id == "gettingStarted"){
        this.heading = "Getting Started"
        this.dynamicPath =  "https://www.powr.io/faq/u/ce4ca002_1613487987#platform=iframe"
      }else if(params.id == "consultantCompanies"){
        this.heading = "Consultant Companies"
        this.dynamicPath =  "https://www.powr.io/faq/u/acf20fb4_1613489036#platform=iframe"
      }else if(params.id == "forConsultants"){
        this.heading = "For Consultants"
      }else{
        this.heading = "For Enterprises"
      }
      // In a real app: dispatch action to load the details here.
   });
  }

}
