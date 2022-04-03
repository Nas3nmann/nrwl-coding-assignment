import { Component, Input } from '@angular/core';
import { BackendService, Ticket } from 'src/app/backend.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  @Input()
  ticket: Ticket;

  trackUserFunction = (user) => user.assigneeId;

  constructor(public readonly backendService: BackendService) {}
}
