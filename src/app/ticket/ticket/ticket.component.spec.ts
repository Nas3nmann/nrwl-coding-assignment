import { BackendService } from "src/app/backend.service";
import { instance, mock } from "ts-mockito";
import { TicketComponent } from "./ticket.component";

describe("TicketComponent", () => {
  let component: TicketComponent;

  beforeEach(() => {
    const backendServiceMock = mock(BackendService);
    component = new TicketComponent(instance(backendServiceMock));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
