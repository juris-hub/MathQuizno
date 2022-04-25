import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from './shell/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'MathQuizno';

  constructor(private primengConfig: PrimeNGConfig){}

  sidebarStatus!: any;

  ngOnInit(): void {
      this.primengConfig.ripple = true;
  }

  onHeaderClick($event:any){
    console.log($event);
    this.sidebarStatus = $event
    console.log('this is my status...' + this.sidebarStatus)
  }
}
