import { Component, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-ticket-search",
  templateUrl: "./ticket-search.component.html",
  styleUrls: ["./ticket-search.component.css"],
})
export class TicketSearchComponent {
  searchString = new FormControl("");

  @Output()
  searchStringChange: Observable<string> = this.searchString.valueChanges;
}
