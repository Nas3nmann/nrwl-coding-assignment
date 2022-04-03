import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Route, RouterModule } from "@angular/router";
import { LoadingIndicatorModule } from "./shared/loading-indicator/loading-indicator.module";

const routes: Route[] = [
  {
    path: "ticket-list",
    loadChildren: () =>
      import("./ticket-list-view/ticket-list.module").then(
        (m) => m.TicketListModule
      ),
  },
  {
    path: "ticket-details",
    loadChildren: () =>
      import("./ticket-details-view/ticket-details.module").then(
        (m) => m.TicketDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'ticket-list'
  }
];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoadingIndicatorModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
