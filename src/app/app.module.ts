import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponentOneComponent } from './hero-component-one/hero-component-one.component';
import { ContentComponentTwoComponent } from './content-component-two/content-component-two.component';
import { LocationsComponentThreeComponent } from './locations-component-three/locations-component-three.component';

import { RecommendationComponentFourComponent } from './recommendation-component-four/recommendation-component-four.component';
import { PicturesPortfolioComponentFiveComponent } from './pictures-portfolio-component-five/pictures-portfolio-component-five.component';
import { ContactComponentSixComponent } from './contact-component-six/contact-component-six.component';
import { FooterComponentSevenComponent } from './footer-component-seven/footer-component-seven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentOneComponent,
    ContentComponentTwoComponent,
    LocationsComponentThreeComponent,
    RecommendationComponentFourComponent,
    PicturesPortfolioComponentFiveComponent,
    ContactComponentSixComponent,
    FooterComponentSevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
