import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from '../../models/contact';

import { ContactDetailComponent } from './contact-detail.component';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  const mockContact: Contact = {
    "id": "1",
    "firstName": "John",
    "lastName": "JohnLast",
    "phone": "1",
    "email": "john@gmail.com",
    "address": "john 1"};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    component.contact = mockContact;
    fixture.detectChanges();
  });

  it('should render a table with specified headers and rows', () => {
    const headers = fixture.nativeElement.querySelectorAll('th');
    expect(headers.length).toBe(5);
    expect(headers[0].textContent).toContain('First name');
    expect(headers[1].textContent).toContain('Last name');
    expect(headers[2].textContent).toContain('Phone');
    expect(headers[3].textContent).toContain('Email');
    expect(headers[4].textContent).toContain('Address');
    const cells = fixture.nativeElement.querySelectorAll('td');
    expect(cells.length).toBe(5);
    expect(cells[0].textContent).toContain(mockContact.firstName);
    expect(cells[1].textContent).toContain(mockContact.lastName);
    expect(cells[2].textContent).toContain(mockContact.phone);
    expect(cells[3].textContent).toContain(mockContact.email);
    expect(cells[4].textContent).toContain(mockContact.address);
  });
});
