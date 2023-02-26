import { Contact } from '../../models/contact';
import { ActionTypes } from '../store-models/action-types'
import { loadAction, loadFailureAction, loadSuccessAction } from './load-contacts.action';

describe('loadAction()', () => {
    it('should create an action', () => {
        const action =  loadAction();
        expect(action.type).toEqual(ActionTypes.LOAD);
    });
});
describe('loadSuccessAction()', () => {
    it('should create an action', () => {
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
        const action =  loadSuccessAction({contacts:mockContacts});
        expect(action.type).toEqual(ActionTypes.LOAD_SUCCESS);
        expect(action.contacts).toEqual(mockContacts);
    });
});
describe('loadSuccessAction()', () => {
    it('should create an action', () => {
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
        const action =  loadSuccessAction({contacts:mockContacts});
        expect(action.type).toEqual(ActionTypes.LOAD_SUCCESS);
        expect(action.contacts).toEqual(mockContacts);
    });
});
describe('loadFailureAction()', () => {
    it('should create an action', () => {
        const mockError = 'simple error'
        const action =  loadFailureAction({error:mockError});
        expect(action.type).toEqual(ActionTypes.LOAD_FAILURE);
        expect(action.error).toEqual(mockError);
    });
});