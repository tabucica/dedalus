import { Contact } from '../../models/contact';
import { addContactAction } from './add-contact.action';
import { ActionTypes } from '../store-models/action-types'

describe('addContactAction', () => {
  it('should create an action', () => {
    const contact: Contact = { id: '1', firstName: 'Test',  lastName: 'TestLast', phone: 'phone', email: 'email', address: 'address'};
    const action =  addContactAction({contact: contact});
    expect(action.type).toEqual(ActionTypes.ADD_CONTACT);
    expect(action.contact).toEqual(contact);
  });
});