import { Contact } from "../../models/contact";

export interface ContactsState {
    isLoading: boolean,
    currentContact: Contact | null,
    data: Contact[],
  }