import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { ContactsService } from '../../services/contacts.service'
import { loadAction, loadFailureAction, loadSuccessAction } from '../actions/load-contacts.action'
import { Contact } from '../../models/contact'

@Injectable()
export class LoadContactsEffect {
    getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAction),
      switchMap(() => {
        return this.contactsService.loadContacts().pipe(
          map((contacts: Contact[]) => {
            return loadSuccessAction({contacts})
          }),
          catchError((error: string) => {
            return of(loadFailureAction({error: error}))
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService,
  ) {}
}
