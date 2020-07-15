import { CourseModule } from './courses/course.module';
import { Error404Component } from './error-404/error404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },      
      {
        path: '**', component: Error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
