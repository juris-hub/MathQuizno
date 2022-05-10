import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSidebar = false;
  @Output() sidebarStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openCloseSidebar(){
    this.sidebarStatus.emit(!this.showSidebar)
    this.showSidebar = !this.showSidebar;
  }

}
