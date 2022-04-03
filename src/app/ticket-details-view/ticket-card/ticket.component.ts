import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Ticket } from "src/app/shared/ticket/ticket.model";
import { UserStateService } from "src/app/shared/user/user-state.service";

@Component({
  selector: "app-ticket-card",
  templateUrl: "./ticket-card.component.html",
  styleUrls: ["./ticket-card.component.css"],
})
export class TicketCardComponent {
  @Input()
  ticket: Ticket;

  @Output()
  ticketCompleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output()
  ticketAssigned: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(readonly userStateService: UserStateService) {}

  complete() {
    this.ticketCompleted.emit(this.ticket);
  }

  assign(userId: number) {
    this.ticket.assigneeId = userId;
    this.ticketAssigned.emit(this.ticket);
  }
}
