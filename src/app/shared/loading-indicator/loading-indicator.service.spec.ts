import { LoadingIndicatorService } from "./loading-indicator.service";

describe("LoadingIndicatorService", () => {
  let service: LoadingIndicatorService;

  beforeEach(() => {
    service = new LoadingIndicatorService();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
