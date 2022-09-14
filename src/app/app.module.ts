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
import { ProgressiveloadComponent } from './progressiveload/progressiveload.component';
import * as $ from 'jquery';
import { PrgressiveAccordionComponent } from './prgressive-accordion/prgressive-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionDirective,
    PostComponent,
    ProgressiveloadComponent,
    PrgressiveAccordionComponent,
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
