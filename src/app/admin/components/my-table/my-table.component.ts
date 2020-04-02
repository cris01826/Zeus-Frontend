import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: "app-my-table",
  templateUrl: "./my-table.component.html",
  styleUrls: ["./my-table.component.scss"]
})
export class MyTableComponent implements OnInit {
  @Input("datasource") datasource: MatTableDataSource<any>;
  @Input("columns") columns: any;
  @Input("length") length: number;
  @Input("pagesize") pageSize: number;
  @Input("pagesizeoptions") pageSizeOptions: any;
  @Input("placeholder") placeholder: string;
  @Input("label") label: string;
  @Input("isLoadingResults") isLoadingResults: boolean;
  @Input("paginator") paginator: boolean = false;
  @Input("filter") filter: boolean = true;
  @Input("search") search: boolean = false;
  @Input("url") url: boolean;
  @Input("urlName") urlName: string;
  @Output() changePaginator = new EventEmitter();
  @Output() changeFilter = new EventEmitter();
  @Output() changeSort = new EventEmitter();
  @Output() deleteItems = new EventEmitter();
  @Output() editItems = new EventEmitter();
  @Output() addItems = new EventEmitter();
  @Output() historialItems = new EventEmitter();
  @Output() downloadItems = new EventEmitter();
  @Output() userItems = new EventEmitter();
  @Output() resultsItems = new EventEmitter();
  @Output() resultsokItems = new EventEmitter();
  @Output() viewItems = new EventEmitter();
  @Output() createMaintenanceItems = new EventEmitter();
  @Output() eventCheckbox = new EventEmitter();
  displayedColumns: any = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  pageEvent(event) {
    this.changePaginator.emit(event);
  }

  changeFilters(value) {
    this.changeFilter.emit(value);
  }

  sortData(value) {
    this.changeSort.emit(value);
  }
  createMaintenanceItem(item){
    this.createMaintenanceItems.emit(item);
  }
  deleteItem(item) {
    this.deleteItems.emit(item);
  }
  resultsItem(item) {
    this.resultsItems.emit(item);
  }
  resultsokItem(item) {
    this.resultsokItems.emit(item);
  }
  viewItem(item) {
    this.viewItems.emit(item);
  }
  editItem(item) {
    this.editItems.emit(item);
  }
  addItem(item) {
    this.addItems.emit(item);
  }
  historialItem(item) {
    this.historialItems.emit(item);
  }
  downloadItem(item) {
    this.downloadItems.emit(item);
  }
  userItem(item) {
    this.userItems.emit(item);
  }

  eventCheck(item) {
    this.eventCheckbox.emit(item);
  }
}
