import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketDetailsRoutingModule } from './ticket-details-routing.module';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketModule } from '../ticket/ticket.module';
import { TicketSearchModule } from '../ticket-search/ticket-search.module';


@NgModule({
  declarations: [
    TicketDetailsComponent
  ],
  imports: [
    CommonModule,
    TicketDetailsRoutingModule,
    TicketModule,
    TicketSearchModule
  ]
})
export class TicketDetailsModule { }
