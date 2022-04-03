import { instance, mock } from "ts-mockito";
import { TicketStateService } from "../shared/ticket/ticket-state/tickets-state.service";
import { TicketListComponent } from "./ticket-list.component";

describe("TicketListComponent", () => {
  let component: TicketListComponent;

  beforeEach(() => {
    const ticketStateService = mock(TicketStateService);
    component = new TicketListComponent(instance(ticketStateService));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
