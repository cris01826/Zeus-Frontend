import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {
  @Input("name") name:string;
  @Input("color") color:string;
  @Input("disabled") disabled:boolean;
  @Input("multiple") multiple:boolean;
  @Input("type") type:string;
  @Input("iconL") iconL:string;
  @Input("iconR") iconR:string;

  @Output() Button = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public change(){
    console.log('Button',this.color)
    this.Button.emit(this.color);
  }

}
