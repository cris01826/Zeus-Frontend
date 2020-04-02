import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-my-input",
  templateUrl: "./my-input.component.html",
  styleUrls: ["./my-input.component.scss"]
})
export class MyInputComponent implements OnInit {
  formControl = new FormControl("");
  @Input("label") label: string;
  @Input("hintText") hintText: string;
  @Input("placeholder") placeholder: string;
  @Input("icon") icon: string;
  @Input("value") value: string;
  @Input("type") type: string;
  @Input("required") required: boolean;
  @Input("readonly") readonly: boolean;
  @Input("error") error: string;
  @Output() onChange = new EventEmitter();

  constructor() {
    if (this.required)
      this.formControl = new FormControl("", [Validators.required]);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.formControl.setValue(this.value);
  }

  change() {
    this.onChange.emit({ value: this.value });
  }

  validation() {
    if (this.required) {
      this.formControl.markAsTouched();
    }
  }
}
