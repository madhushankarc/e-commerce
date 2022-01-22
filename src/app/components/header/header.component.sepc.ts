import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule,ModalModule.forRoot(),ToastrModule.forRoot(),
          HttpClientTestingModule ],
      declarations: [ HeaderComponent ],
      providers: [ BsModalRef]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
