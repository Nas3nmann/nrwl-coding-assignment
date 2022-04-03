import { UserStateService } from "src/app/shared/user/user-state.service";
import { instance, mock } from "ts-mockito";
import { TicketCardComponent } from "./ticket.component";

describe("TicketCardComponent", () => {
  let component: TicketCardComponent;

  beforeEach(() => {
    const userStateServiceMock = mock(UserStateService);
    component = new TicketCardComponent(instance(userStateServiceMock));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
