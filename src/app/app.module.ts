import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CafeViewComponent } from './cafe-view/cafe-view.component';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CafeViewComponent,
    CafeListComponent,
    CafeDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
