import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketSearchComponent } from "./ticket-search/ticket-search.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TicketSearchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  exports: [TicketSearchComponent]
})
export class TicketSearchModule {}
