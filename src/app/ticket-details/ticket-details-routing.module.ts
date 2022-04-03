import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketModule } from "../ticket/ticket.module";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";

const routes: Routes = [{ path: "", component: TicketDetailsComponent }];

@NgModule({
  imports: [TicketModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketDetailsRoutingModule {}
