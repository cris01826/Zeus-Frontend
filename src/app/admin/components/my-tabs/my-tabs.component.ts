import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";
import { MyTabComponent } from "./../my-tab/my-tab.component";

@Component({
  selector: "app-my-tabs",
  templateUrl: "./my-tabs.component.html",
  styleUrls: ["./my-tabs.component.scss"]
})
export class MyTabsComponent implements OnInit, AfterContentInit {
  //@Input("tabs") tabs: any;
  @ContentChildren(MyTabComponent) tabs: QueryList<MyTabComponent>;

  constructor() {}

  ngOnInit() {
  }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: MyTabComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }
}
