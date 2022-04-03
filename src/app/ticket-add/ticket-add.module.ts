import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TicketAddComponent
  ],
  exports: [
    TicketAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TicketAddModule { }
