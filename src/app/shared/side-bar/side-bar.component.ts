import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input('Menu') listMenu: Menu[];

  constructor() { }

  ngOnInit(): void {
  }

}
