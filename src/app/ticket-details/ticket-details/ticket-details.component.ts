import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { BackendService, Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
})
export class TicketDetailsComponent {
  searchString$: BehaviorSubject<string> = new BehaviorSubject("");

  tickets$ = this.backend.tickets();

  filteredTickets$ = combineLatest([this.tickets$, this.searchString$]).pipe(
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

  updateTickets() {
      this.tickets$ = this.backend.tickets();
  }
}
