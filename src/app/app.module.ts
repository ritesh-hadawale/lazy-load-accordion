import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngx bootstrap imports
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionDirective } from './accordion/accordion.directive';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionDirective,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
