import { MatSnackBar } from "@angular/material/snack-bar";
import { of, Subject, throwError } from "rxjs";
import {
  anyString,
  anything,
  deepEqual,
  instance,
  mock,
  resetCalls,
  verify,
  when,
} from "ts-mockito";
import { BackendService } from "../../../backend.service";
import { LoadingIndicatorService } from "../../loading-indicator/loading-indicator.service";
import { Ticket } from "../ticket.model";
import { TicketStateService } from "./tickets-state.service";

describe("TicketStateService", () => {
  let service: TicketStateService;

  let backendServiceMock: BackendService;
  let loadingIndicatorServiceMock: LoadingIndicatorService;
  let matSnackbarMock: MatSnackBar;

  beforeEach(() => {
    backendServiceMock = mock(BackendService);
    when(backendServiceMock.tickets()).thenReturn(of([]));

    loadingIndicatorServiceMock = mock(LoadingIndicatorService);

    matSnackbarMock = mock(MatSnackBar);

    service = new TicketStateService(
      instance(backendServiceMock),
      instance(loadingIndicatorServiceMock),
      instance(matSnackbarMock)
    );
  });

  it("should fetch tickets when initialized", () => {
    verify(backendServiceMock.tickets()).once();
  });

  describe("when adding tickets", () => {
    let testDescription: string;

    beforeEach(() => {
      resetCalls(backendServiceMock);
      testDescription = "Ticket description";

      service.add(testDescription);
    });

    it("should call the backend API", () => {
      const expectedPayload = { description: testDescription };
      verify(backendServiceMock.newTicket(deepEqual(expectedPayload))).once();
    });

    it("should re-fetch the tickets after the result returned", () => {
      verify(backendServiceMock.tickets()).calledAfter(
        backendServiceMock.newTicket(anything())
      );
    });
  });

  describe("when completing tickets", () => {
    beforeEach(() => {
      resetCalls(backendServiceMock);

      service.complete(1);
    });

    it("should call the backend API", () => {
      verify(backendServiceMock.complete(1, true)).once();
    });

    it("should re-fetch the tickets after the result returned", () => {
      verify(backendServiceMock.tickets()).calledAfter(
        backendServiceMock.complete(1, true)
      );
    });
  
  });

  it("should show the loading indicator while fetching tickets", () => {
    const responseSubject = new Subject<Ticket[]>();
    when(backendServiceMock.tickets()).thenReturn(responseSubject);
    resetCalls(loadingIndicatorServiceMock);

    service.complete(1);
    verify(loadingIndicatorServiceMock.show()).once();
    verify(loadingIndicatorServiceMock.hide()).never();

    responseSubject.next([]);
    verify(loadingIndicatorServiceMock.hide()).calledAfter(
      loadingIndicatorServiceMock.show()
    );
  });

  it("should how a toast message if something went wrong while calling the API", () => {
    const testError = new Error("Unexpected Error");
    when(backendServiceMock.tickets()).thenReturn(throwError(testError))

    service.complete(1);

    verify(matSnackbarMock.open(anyString())).once();
  })
});
