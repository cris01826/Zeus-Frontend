import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.scss']
})
export class MyTabComponent implements OnInit {

  @Input("active") active:boolean = false;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
