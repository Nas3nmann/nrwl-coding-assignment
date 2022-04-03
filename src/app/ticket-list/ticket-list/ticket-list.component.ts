import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { BackendService } from "src/app/backend.service";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
})
export class TicketListComponent {
  displayedColumns = ["id", "description", "assigneeId", "status"];

  searchString$: BehaviorSubject<string> = new BehaviorSubject("");

  tickets$ = combineLatest([
    this.backendService.tickets(),
    this.searchString$,
  ]).pipe(
    map(([tickets, searchString]) =>
      tickets.filter((ticket) => {
        if (!searchString) {
          return true;
        }

        return (
          !!ticket.description &&
          ticket.description.toLowerCase().includes(searchString.toLowerCase())
        );
      })
    )
  );

  constructor(readonly backendService: BackendService) {}
}
