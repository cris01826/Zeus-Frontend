import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-my-select",
  templateUrl: "./my-select.component.html",
  styleUrls: ["./my-select.component.scss"]
})
export class MySelectComponent implements OnInit {
  formControl = new FormControl("");
  @Input("label") label: string;
  @Input("list") list: any;
  @Input("hintText") hintText: string;
  @Input("icon") icon: string;
  @Input() value: any;
  @Input("error") error: string;
  @Input("required") required: boolean;
  @Input("multiple") multiple: boolean;
  @Output() onChange = new EventEmitter();

  constructor() {
    if (this.required)
      this.formControl = new FormControl("", [Validators.required]);
  }

  ngOnInit() {
    if (this.multiple) this.formControl.setValue(this.value.map(item => item));
    else this.formControl.setValue(this.value);
  }

  change() {
    console.log(this.value,"FINAL");
    this.formControl.setValue(this.value);
    this.onChange.emit({ value: this.value });
  }

  validation(): void {
    if (this.required) {
      this.formControl.markAsTouched();
    }
  }
}
