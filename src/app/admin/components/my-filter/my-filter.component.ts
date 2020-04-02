import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-my-filter',
  templateUrl: './my-filter.component.html',
  styleUrls: ['./my-filter.component.scss']
})
export class MyFilterComponent implements OnInit {

  @Input("filter") filters: Array<any>;
  @Output() newfilters = new EventEmitter();

  removable = true;
  selectable = true;
  options: FormGroup;
  chip: boolean = false;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }



  ngOnInit() {
    console.log("Filtros", this.filters);
  }

  public selected(i, indice) {

    const index = this.filters.indexOf(i);

    const fil = this.filters[index].values;
    const select = fil.indexOf(indice);

    console.log(fil[select].value)
    if (fil[select].value == 'Activo') {
      fil.map(function (dato) {
        if (dato.value == 'Activo') {
          console.log('activoi', dato.value)

          dato.selected = true;
        }
        if (dato.value == 'Desactivo') {
          console.log('desactivo', dato.value)
          dato.selected = false;
        }

        return dato;
      });
      const newFilters = this.filters;
      this.filters = new Array;
      this.filters = newFilters;
    } else {
      fil.map(function (dato) {
        if (dato.value == 'Activo') {
          dato.selected = false;
        }
        if (dato.value == 'Desactivo') {
          dato.selected = true;
        }

        return dato;
      });
    }
    console.log("Filtros", this.filters);
   

  }
  public filterc() {
    this.chip = false;
  }

  public filtercheck() {
    this.chip = true;
    this.newfilters.emit(this.filters);
  }
  public remove(option): void {


    const index = this.filters.indexOf(option);

    const fil = this.filters[index].values;

    fil.map(function (dato) {
      if (dato.value == 'Activo') {
        dato.selected = false;
      }
      if (dato.value == 'Desactivo') {
        dato.selected = true;
      }

      return dato;
    });
    console.log('Filtro', this.filters[index].name, ' desactivado')

    this.newfilters.emit(this.filters);
  }

}
