import { Component, EventEmitter, Output } from "@angular/core";

type TicketDescription = string;

@Component({
  selector: "app-ticket-add",
  templateUrl: "./ticket-add.component.html",
  styleUrls: ["./ticket-add.component.css"],
})
export class TicketAddComponent {
  @Output()
  ticketAdded: EventEmitter<TicketDescription> = new EventEmitter<TicketDescription>();

  constructor() {}

  addTicket(description: string) {
    this.ticketAdded.emit(description);
  }
}
