import { Injectable } from "@angular/core";
import { BackendService } from "src/app/backend.service";

@Injectable({
  providedIn: "root",
})
export class UserStateService {
  users$ = this.backendService.users();

  constructor(private readonly backendService: BackendService) {}
}
