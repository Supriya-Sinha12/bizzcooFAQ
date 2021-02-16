import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafePipeModule } from 'safe-pipe';

import { AppComponent } from './app.component';
import { FaqBodyComponent } from './faq-body/faq-body.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FaqCardComponent } from './faq-card/faq-card.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';



@NgModule({
  declarations: [
    AppComponent,
    FaqBodyComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqCardComponent,
    CategorieslistComponent
  ],
  imports: [
        SafePipeModule,
        BrowserModule,
        RouterModule.forRoot([
          { path: '', component: HomeComponent },
         // { path: 'home', component: HomeComponent },
         { path: 'faq-body', component: FaqBodyComponent },
         { path: 'faq-Card', component: FaqCardComponent },
         { path: 'category-list', component: CategorieslistComponent },
         { path: 'category-list/:id', component: CategorieslistComponent }
        ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
