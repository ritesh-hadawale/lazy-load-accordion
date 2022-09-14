import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prgressive-accordion',
  templateUrl: './prgressive-accordion.component.html',
  styleUrls: ['./prgressive-accordion.component.scss']
})
export class PrgressiveAccordionComponent implements OnInit {
  isOpen: boolean = false;
  data: any;
  constructor() { }

  ngOnInit(): void {
   
  }

}
