import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MyDialogComponent } from '../../components';

@Component({
  selector: 'app-specialties-programs',
  templateUrl: './specialties-programs.component.html',
  styleUrls: ['./specialties-programs.component.scss']
})
export class SpecialtiesProgramsComponent implements OnInit {
  firts_name
  dataSource: MatTableDataSource<any>;

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
      columnDef: "specialties",
      header: "Especialidad",
      width: "30%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.specialties}`
    },{
      columnDef: "program",
      header: "Programa",
      width: "30%",
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
      specialties: "Especialidad",
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
    this.titleModal = 'Actualizar Especialidad';
  } 
  changePaginator(item){}
  changeFilter(item){}
  changeSort(item){}
  deleteItems(item) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: "450px",
      data: {
        title: "Eliminar Especialidad",
        subtitle: "¿Seguro desea eliminar el Especialidad?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
       
      }
    });
  }

}
