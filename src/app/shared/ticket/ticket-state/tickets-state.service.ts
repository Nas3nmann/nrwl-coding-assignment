import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BackendService } from "../../../backend.service";
import { LoadingIndicatorService } from "../../loading-indicator/loading-indicator.service";
import { Ticket } from "./../ticket.model";

@Injectable({
  providedIn: "root",
})
export class TicketStateService {
  private _tickets$ = new BehaviorSubject<Ticket[]>([]);

  get tickets$(): Observable<Ticket[]> {
    return this._tickets$.asObservable();
  }

  constructor(
    private readonly backendService: BackendService,
    private readonly loadingIndicatorService: LoadingIndicatorService
  ) {
    this.fetchTickets();
  }

  add(ticketDescription: string) {
    this.backendService.newTicket({ description: ticketDescription });
    this.fetchTickets();
  }

  assign(ticketId: number, userId: number) {
    this.backendService.assign(ticketId, userId).subscribe(() => {
      this.fetchTickets();
    });
  }

  complete(ticketId: number) {
    this.backendService.complete(ticketId, true);
    this.fetchTickets();
  }

  private fetchTickets() {
    this.loadingIndicatorService.show();

    this.backendService.tickets().subscribe((tickets: Ticket[]) => {
      this._tickets$.next(tickets);

      this.loadingIndicatorService.hide();
    });
  }
}
