import { instance, mock } from "ts-mockito";
import { BackendService } from "../../../backend.service";
import { TicketStateService as TicketStateService } from "./tickets-state.service";

describe("TicketStateService", () => {
  let service: TicketStateService;

  beforeEach(() => {
    const backendServiceMock = mock(BackendService);
    service = new TicketStateService(instance(backendServiceMock));
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
