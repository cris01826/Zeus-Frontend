import { Component, OnInit,Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-my-snackbar',
  templateUrl: './my-snackbar.component.html',
  styleUrls: ['./my-snackbar.component.scss']
})
export class MySnackbarComponent implements OnInit {

  @Input("name") name:string;
  @Input("message") message:string;
  @Input("action") action:string;
  @Input("type") type:string;


  ngOnInit() {
  }
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    const message = this.message;
    const action = this.action;
    if(this.type== "error"){
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass:'danger',
      horizontalPosition:'end'
      
    });
    
  }else if(this.type== "exito"){
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass:'success',
      horizontalPosition:'start'
      
    });

  }else if(this.type== "warning"){
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass:'warning',
      horizontalPosition:'center'
      
    });

  }
  console.log('SnackBar',this.type);
  }
}

