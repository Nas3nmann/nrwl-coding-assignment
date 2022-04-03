import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { BackendService, Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
})
export class TicketDetailsComponent implements OnInit {
  searchString$: BehaviorSubject<string> = new BehaviorSubject("");

  tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>([]);

  filteredTickets$ = combineLatest([this.tickets$, this.searchString$]).pipe(
    map(([tickets, searchString]) => this.filterTickets(tickets, searchString))
  );

  constructor(private backend: BackendService) {}

  ngOnInit(): void {
    this.updateTickets();
  }

  updateTickets() {
    this.backend.tickets().subscribe((tickets) => this.tickets$.next(tickets));
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
