import { Component, EventEmitter, Output } from "@angular/core";
import { BackendService, Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket-add",
  templateUrl: "./ticket-add.component.html",
  styleUrls: ["./ticket-add.component.css"],
})
export class TicketAddComponent {
  @Output()
  ticketChange: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(private readonly backendService: BackendService) {}

  addTicket(description: string) {
    this.backendService.newTicket({ description }).subscribe((ticket) => {
      this.ticketChange.emit(ticket);
    });
  }
}
