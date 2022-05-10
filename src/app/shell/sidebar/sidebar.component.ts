import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


export interface SideBarItem{
  name: string;
  url: string;
  children?: SideBarItem[];

}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarStatus!:boolean;

  sideBarItems: SideBarItem[] = [
    {
     name: 'Complex numbers',
     url:'/modules/math-curriculum/complex-numbers'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }



}
