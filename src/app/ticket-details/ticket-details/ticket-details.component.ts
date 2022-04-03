import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map, tap } from "rxjs/operators";
import { BackendService } from "src/app/backend.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
})
export class TicketDetailsComponent {
  searchString$: BehaviorSubject<string> = new BehaviorSubject("");

  tickets$ = combineLatest([this.backend.tickets(), this.searchString$]).pipe(
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

  constructor(private backend: BackendService) {}
}
