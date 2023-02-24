import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects'
import { ContactsService } from './services/contacts.service';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LoadContactsEffect } from './store/effects/load-contacts.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactCreateComponent
  ],
  providers: [
    ContactsService
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('contacts', reducers),
    EffectsModule.forFeature([
      LoadContactsEffect,
    ]),
  ],
})
export class ContactsModule { }
