import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {Location} from '@angular/common';

@Component({
  selector: "app-my-card-content",
  templateUrl: "./my-card-content.component.html",
  styleUrls: ["./my-card-content.component.scss"]
})
export class MyCardContentComponent implements OnInit {
  @Input("title") title: string;
  @Input("txtbutton") txtbutton: string;
  @Input("iconback") iconback: string;

  @Output() clickBtn = new EventEmitter();
  constructor(private _location: Location) {}

  ngOnInit() {}

  clickButton() {
    this.clickBtn.emit();
  }

  backClicked() {
    this._location.back();
  }
}
