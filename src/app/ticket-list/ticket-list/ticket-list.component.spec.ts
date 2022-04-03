import { BackendService } from "src/app/backend.service";
import { mock, instance } from "ts-mockito";
import { TicketListComponent } from "./ticket-list.component";

describe("TicketListComponent", () => {
  let component: TicketListComponent;

  beforeEach(() => {
    const backendServiceMock = mock(BackendService);
    component = new TicketListComponent(instance(backendServiceMock));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
