import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketDetailsRoutingModule } from "./ticket-details-routing.module";
import { TicketDetailsComponent } from "./ticket-details.component";
import { TicketCardModule } from "./ticket-card/ticket-card.module";
import { TicketSearchModule } from "../shared/ticket/ticket-search/ticket-search.module";
import { TicketAddModule } from "../shared/ticket/ticket-add/ticket-add.module";

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [
    CommonModule,
    TicketCardModule,
    TicketAddModule,
    TicketDetailsRoutingModule,
    TicketCardModule,
    TicketSearchModule,
  ],
})
export class TicketDetailsModule {}
