import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-my-modal",
  templateUrl: "./my-modal.component.html",
  styleUrls: ["./my-modal.component.scss"]
})
export class MyModalComponent implements OnInit {
  @Input("title") title: string;
  @Input() nav: boolean;
  @Input("open") open: boolean;
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  mode = new FormControl("push");

  onModal(form) {
    console.log(form.value);
  }

  closeModal() {
    this.close.emit();
  }

  saveModal() {
    this.save.emit();
  }
}
