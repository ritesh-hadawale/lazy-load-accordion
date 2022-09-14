// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-progressiveload',
//   templateUrl: './progressiveload.component.html',
//   styleUrls: ['./progressiveload.component.scss']
// })
// export class ProgressiveloadComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit,
  TemplateRef,
  ContentChild
} from "@angular/core";
import { AccordionDirective } from "../accordion/accordion.directive";
import { ApiService } from "../api.service";



@Component({
  selector: "app-progressiveload",
  templateUrl: "./progressiveload.component.html"
})
export class ProgressiveloadComponent implements OnInit{
  showElement: boolean = false;
  public appUrlResources: any;
  data: any;

  constructor(
    elementRef: ElementRef,
    private _ChangeDetectorRef: ChangeDetectorRef,
    private api: ApiService
  ) {
  }
  ngOnInit() {
    this.api.getData().subscribe((data) => {
      this.data = data;
    });
  }

}

