import { Contact } from "../../models/contact";

export interface ContactsState {
    isLoading: boolean,
    error: string,
    currentContact: Contact | null,
    data: Contact[],
  }