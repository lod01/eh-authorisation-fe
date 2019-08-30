import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {MaterialModule} from '../material/material.module';
import {ActivatedRoute} from '@angular/router';
import {ExternalUrl} from '../external-url/external-url';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const url: string = 'http%3A%2F%2Fonlinedoctor.lloydspharmacy.com%2Fmock';
  const mockActivatedRoute: any = {
    paramMap: of({params: {url}})
  };
  const mockExternalUrl: ExternalUrl = jasmine.createSpyObj<ExternalUrl>(['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, NoopAnimationsModule ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute},
        { provide: ExternalUrl, useValue: mockExternalUrl }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
