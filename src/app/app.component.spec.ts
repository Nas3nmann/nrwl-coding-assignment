import { instance, mock } from "ts-mockito";
import { AppComponent } from "./app.component";
import { LoadingIndicatorService } from "./shared/loading-indicator/loading-indicator.service";

describe("AppComponent", () => {
  let app: AppComponent;

  beforeEach(() => {
    const loadingIndicatorServiceMock = mock(LoadingIndicatorService);
    app = new AppComponent(instance(loadingIndicatorServiceMock));
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });
});
