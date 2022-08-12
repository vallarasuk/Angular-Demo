import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentsComponent } from './components/form-components/form-components.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ImageComponentsComponent } from './components/image-components/image-components.component';
import { VideoLinkComponentsComponent } from './components/video-link-components/video-link-components.component';
import { FooterLinkComponentsComponent } from './components/footer-link-components/footer-link-components.component';
import { CourseComponentsComponent } from './components/course-components/course-components.component';
import { IntroductionComponentsComponent } from './components/introduction-components/introduction-components.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentsComponent,
    NavbarComponentComponent,
    ImageComponentsComponent,
  
    VideoLinkComponentsComponent,
    FooterLinkComponentsComponent,
    CourseComponentsComponent,
    IntroductionComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
