import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { MyDialogComponent } from '../../components';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  firts_name
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
      columnDef: "name",
      header: "Nombre",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "lastname",
      header: "Apellido",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.lastname}`
    },
    {
      columnDef: "rol",
      header: "Rol",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.rol}`
    },
    {
      columnDef: "state",
      header: "Estado",
      width: "10%",
      sort: true,
      type: "text",
      cell: (element: any) => `${element.state}`
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
      id: 123456789,
      name: "Instructor prueba",
      lastname: "Instructor prueba",
      rol: "Instructor",
      state: "Activo",
      icons: { delete: true, edit: true }
    };
    this.listtable.push(newUser);
    this.dataSource = new MatTableDataSource(this.listtable);
  }

  public openModalUsers(users) {
    this.openModal = true;
    this.titleModal = users;
  }
  createModal() {
    this.openModal = false;
  }
  deleteModal() {
    this.openModal = false;
  }
  editItems(item){
    this.openModal = true;
    this.titleModal = 'Actualizar Usuario';
  } 
  changePaginator(item){}
  changeFilter(item){}
  changeSort(item){}
  deleteItems(item) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: "450px",
      data: {
        title: "Eliminar Usuario",
        subtitle: "¿Seguro desea eliminar el Usuario?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
       
      }
    });
  }
}
