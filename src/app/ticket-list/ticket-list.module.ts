import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { TicketSearchModule } from "../ticket-search/ticket-search.module";
import { TicketModule } from "../ticket/ticket.module";
import { TicketListRoutingModule } from "./ticket-list-routing.module";
import { TicketListComponent } from "./ticket-list/ticket-list.component";

@NgModule({
  imports: [
    CommonModule,
    TicketListRoutingModule,
    TicketModule,
    TicketSearchModule,
    MatTableModule
  ],
  declarations: [TicketListComponent],
})
export class TicketListModule {}
