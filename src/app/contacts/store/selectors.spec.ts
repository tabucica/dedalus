import { Contact } from "../models/contact";
import { selectFeatureContactsData, selectFeatureCurrentContact } from "./selectors";
import { ContactsState } from "./store-models/contacts-state";

describe('Selectors', () => {
    it('should test selector selectFeatureContactsData which selects all contacts', () => {
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
        }];
        const state: ContactsState = {
            isLoading: false,
            error: '',
            currentContact: null,
            data: mockContacts
        }
      const selectedData = selectFeatureContactsData.projector(state);
      expect(selectedData).toEqual(mockContacts);
    });
    it('should test selector selectFeatureCurrentContact which selects current contact', () => {
        const mockContact: Contact = {
            "id": "1",
            "firstName": "John",
            "lastName": "JohnLast",
            "phone": "1",
            "email": "john@gmail.com",
            "address": "john 1"
        };
        const state: ContactsState = {
            isLoading: false,
            error: '',
            currentContact: mockContact,
            data: []
        }
      const selectedData = selectFeatureCurrentContact.projector(state);
      expect(selectedData).toEqual(mockContact);
    });
  });