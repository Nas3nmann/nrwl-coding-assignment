import { BackendService } from "src/app/backend.service";
import { instance, mock } from "ts-mockito";
import { TicketDetailsComponent } from "./ticket-details.component";

describe("TicketDetailsComponent", () => {
  let component: TicketDetailsComponent;

  beforeEach(() => {
    const backendServiceMock = mock(BackendService);
    component = new TicketDetailsComponent(instance(backendServiceMock));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
