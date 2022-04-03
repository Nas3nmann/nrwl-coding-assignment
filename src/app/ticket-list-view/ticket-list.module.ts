import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { LoadingIndicatorModule } from "../shared/loading-indicator/loading-indicator.module";
import { TicketAddModule } from "../shared/ticket/ticket-add/ticket-add.module";
import { TicketSearchModule } from "../shared/ticket/ticket-search/ticket-search.module";
import { TicketListRoutingModule } from "./ticket-list-routing.module";
import { TicketListComponent } from "./ticket-list.component";

@NgModule({
  imports: [
    CommonModule,
    TicketAddModule,
    TicketListRoutingModule,
    TicketSearchModule,
    MatTableModule,
  ],
  declarations: [TicketListComponent],
})
export class TicketListModule {}
