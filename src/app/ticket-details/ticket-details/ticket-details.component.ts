import { Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/backend.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
})
export class TicketDetailsComponent {
  tickets$ = this.backend.tickets();

  constructor(private backend: BackendService) {}
}
