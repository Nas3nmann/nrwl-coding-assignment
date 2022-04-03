import { BackendService } from "src/app/backend.service";
import { mock, instance } from "ts-mockito";
import { UserStateService } from "./user-state.service";

describe("UserStateService", () => {
  let service: UserStateService;

  beforeEach(() => {
    const backendServiceMock = mock(BackendService);
    service = new UserStateService(instance(backendServiceMock));
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
