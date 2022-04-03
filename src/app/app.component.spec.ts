import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BackendService} from "./backend.service";

describe('AppComponent', () => {
    let app: AppComponent;

    beforeEach(() => {
        app = new AppComponent();
    });

    it('should create the app', (() => {
        expect(app).toBeTruthy();
    }));
});
