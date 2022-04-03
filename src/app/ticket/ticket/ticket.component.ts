import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BackendService, Ticket } from "src/app/backend.service";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"],
})
export class TicketComponent {
  users$ = this.backendService.users();

  @Input()
  ticket: Ticket;

  @Output()
  ticketChange: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(readonly backendService: BackendService) {}

  complete() {
    this.ticket.completed = true;

    this.backendService.complete(this.ticket.id, true);
    this.ticketChange.emit(this.ticket);
  }

  assign(userId: number) {
    this.ticket.assigneeId = userId;

    this.backendService.assign(this.ticket.id, userId);
    this.ticketChange.emit(this.ticket);
  }
}
