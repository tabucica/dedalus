import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactsService } from './contacts.service';
import { Contact } from '../models/contact';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactsService]
    });
    service = TestBed.inject(ContactsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadContacts() should load contacts', () => {
    const mockContacts: Contact[] = [{
      "id": "1",
      "firstName": "John",
      "lastName": "JohnLast",
      "phone": "1",
      "email": "john@gmail.com",
      "address": "john 1"
  },
  {
      "id": "2",
      "firstName": "John2",
      "lastName": "JohnLast2",
      "phone": "2",
      "email": "john2@gmail.com",
      "address": "john 2"
  },
  {
      "id": "3",
      "firstName": "John3",
      "lastName": "JohnLast3",
      "phone": "3",
      "email": "john3@gmail.com",
      "address": "john 3"
  }];
    service.loadContacts().subscribe((contacts) => {
      expect(contacts).toEqual(mockContacts);
    });
    const req = httpMock.expectOne('assets/mocks/contacts.json');
    expect(req.request.method).toEqual('GET');
    req.flush(mockContacts);
  });
});
