import { BackendService } from "src/app/backend.service";
import { instance, mock } from "ts-mockito";
import { TicketStateService } from "../shared/ticket/ticket-state/tickets-state.service";
import { TicketDetailsComponent } from "./ticket-details.component";

describe("TicketDetailsComponent", () => {
  let component: TicketDetailsComponent;

  beforeEach(() => {
    const ticketStateServiceMock = mock(TicketStateService);
    component = new TicketDetailsComponent(instance(ticketStateServiceMock));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
