import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MyDialogComponent } from '../../components';

@Component({
  selector: 'app-course-numbers',
  templateUrl: './course-numbers.component.html',
  styleUrls: ['./course-numbers.component.scss']
})
export class CourseNumbersComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  firts_name
  date_initial
  date_end
  columns = [
    {
      columnDef: "id",
      header: "No identificacion",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.id}`
    },
    {
      columnDef: "code",
      header: "Numero de ficha",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.code}`
    },{
      columnDef: "date_initial",
      header: "Fecha incio",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.date_initial}`
    },{
      columnDef: "date_end",
      header: "Fecha fin",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.date_end}`
    },{
      columnDef: "program",
      header: "Programa",
      width: "20%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.program}`
    },
    {
      columnDef: "icons",
      header: "",
      width: "20%",
      sort: false,
      type: "icon",
      cell: (element: any) => `${element.icons}`
    }
  ];

  length = 100;
  pageSize = 10;
  actualPage: number = 1;
  pageSizeOptions: number[] = [10, 15, 20, 25];
  isLoadingResults: boolean = false;
  openModal: boolean = false;
  titleModal;
  listtable = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const newUser = {
      id: 1,
      code: "1848096",
      date_initial:"02/02/2018",
      date_end:"30/03/2020",
      program:'Programa',
      icons: { delete: true, edit: true }
    };
    this.listtable.push(newUser);
    this.dataSource = new MatTableDataSource(this.listtable);
  }

  public openModalRol(Especialidad) {
    this.openModal = true;
    this.titleModal = Especialidad;
  }
  createModal() {
    this.openModal = false;
  }
  deleteModal() {
    this.openModal = false;
  }
  editItems(item){
    this.openModal = true;
    this.titleModal = 'Actualizar Ficha';
  } 
  changePaginator(item){}
  changeFilter(item){}
  changeSort(item){}
  deleteItems(item) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: "450px",
      data: {
        title: "Eliminar Ficha",
        subtitle: "¿Seguro desea eliminar el Ficha?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
       
      }
    });
  }

}
