import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('dialog') dialog: string;
  @Input('buttons') buttons: number;
  @Output() onChange = new EventEmitter();
  list
  namelist: string;
  select : boolean=false;
  selectuser
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogref: MatDialogRef<MyDialogComponent>){
      
      this.title = data.title || this.title;
      this.subtitle = data.subtitle || this.subtitle;
      this.dialog = data.dialog || this.dialog;
      this.select = data.select ||  this.select;
      this.list = data.list || this.list;
      this.namelist = data.namelist || this.namelist;
    }
 

  ngOnInit() {
  }
  

}
