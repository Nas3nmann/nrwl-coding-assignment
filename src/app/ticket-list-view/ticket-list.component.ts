import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { TicketStateService } from "../shared/ticket/ticket-state/tickets-state.service";
import { Ticket } from "../shared/ticket/ticket.model";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
})
export class TicketListComponent {
  displayedColumns = ["id", "description", "assigneeId", "status"];

  searchString$: BehaviorSubject<string> = new BehaviorSubject("");

  tickets$ = combineLatest([
    this.ticketStateService.tickets$,
    this.searchString$,
  ]).pipe(
    map(([tickets, searchString]) => this.filterTickets(tickets, searchString))
  );

  constructor(readonly ticketStateService: TicketStateService) {}

  private filterTickets(tickets: Ticket[], searchString: string): Ticket[] {
    return tickets.filter((ticket) => {
      if (!searchString) {
        return true;
      }

      return (
        !!ticket.description &&
        ticket.description.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  }
}
