import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MyDialogComponent } from '../../components';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

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
      columnDef: "description",
      header: "Descripción",
      width: "30%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.description}`
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
  firts_name
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
      description: "Coordinador",
      icons: { delete: true, edit: true }
    };
    this.listtable.push(newUser);
    this.dataSource = new MatTableDataSource(this.listtable);
  }

  public openModalRol(rol) {
    this.openModal = true;
    this.titleModal = rol;
  }
  createModal() {
    this.openModal = false;
  }
  deleteModal() {
    this.openModal = false;
  }
  editItems(item){
    this.openModal = true;
    this.titleModal = 'Actualizar Rol';
  } 
  changePaginator(item){}
  changeFilter(item){}
  changeSort(item){}
  deleteItems(item) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: "450px",
      data: {
        title: "Eliminar Rol",
        subtitle: "¿Seguro desea eliminar el rol?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
       
      }
    });
  }

}
