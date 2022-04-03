import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketDetailsRoutingModule } from "./ticket-details-routing.module";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";
import { TicketModule } from "../ticket/ticket.module";
import { TicketSearchModule } from "../ticket-search/ticket-search.module";
import { TicketAddModule } from "../ticket-add/ticket-add.module";

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [
    CommonModule,
    TicketModule,
    TicketAddModule,
    TicketDetailsRoutingModule,
    TicketModule,
    TicketSearchModule,
  ],
})
export class TicketDetailsModule {}
