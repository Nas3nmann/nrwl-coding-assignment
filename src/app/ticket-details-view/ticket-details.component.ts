import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { TicketStateService } from "../shared/ticket/ticket-state/tickets-state.service";
import { Ticket } from "../shared/ticket/ticket.model";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
})
export class TicketDetailsComponent {
  searchString$: BehaviorSubject<string> = new BehaviorSubject("");

  filteredTickets$ = combineLatest([
    this.ticketStateService.tickets$,
    this.searchString$,
  ]).pipe(
    map(([tickets, searchString]) => this.filterTickets(tickets, searchString))
  );

  constructor(readonly ticketStateService: TicketStateService) {}

  assign(ticket: Ticket) {
    this.ticketStateService.assign(ticket.id, ticket.assigneeId);
  }

  complete(ticket: Ticket) {
    this.ticketStateService.complete(ticket.id);
  }

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
