import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketCardComponent } from "./ticket.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [TicketCardComponent],
  exports: [TicketCardComponent],
})
export class TicketCardModule {}
