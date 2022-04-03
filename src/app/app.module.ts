import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TicketModule } from "./ticket/ticket.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TicketModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
