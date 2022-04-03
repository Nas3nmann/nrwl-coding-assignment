import { Component, Input } from '@angular/core';
import { BackendService, Ticket } from 'src/app/backend.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  users$ = this.backendService.users();

  @Input()
  ticket: Ticket;

  constructor(public readonly backendService: BackendService) {}
}
