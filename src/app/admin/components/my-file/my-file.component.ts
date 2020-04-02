import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-my-file',
  templateUrl: './my-file.component.html',
  styleUrls: ['./my-file.component.scss']
})
export class MyFileComponent implements OnInit {

  @Input('files') files: any;
  @Input('accept') accept: any;
  @Input('name') name: string;

  @Input('title') title: string = 'Archivo seleccionado';
  @Input('subtitle') subtitle: string = 'Seleccionar archivo';
  
  @Output() downloadFile = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onFileSelected(file) {
    this.files=[];
    const filename = file[0].name;

    const filesize = file[0].size;

    const decimals = 2
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(filesize) / Math.log(k));

    const file_size = parseFloat((filesize / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];

    const filetype = filename.split('.').pop();
    const filedate = moment(file[0].lastModifiedDate).format('ll');
    const fileid = this.files.length + 1

    this.files.push({
      id: fileid,
      name: filename,
      size: file_size,
      type: filetype,
      date: filedate,
      file: file,
    })
    console.log('Files', this.files)
    console.log('este es ewl archivo',file);
    this.onChange.emit(file);
  }

  public deleteFile(i) {
    const index = this.files.indexOf(i)

    this.files.splice(index, 1)
    alert("Eliminado " + i.name)
    console.log("Eliminado", i.name)
  }

  public download(file) {
    this.downloadFile.emit(file)
  }
}


