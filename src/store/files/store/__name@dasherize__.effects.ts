import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as <%= classify(name) %>Actions from './<%= name %>.actions';
import { mergeMap, catchError } from 'rxjs/operators';
import { <%= classify(name) %>Service } from '../services/<%= name %>.service';
import { <%= classify(name) %> } from 'src/app/shared/models/<%= name %>';


@Injectable()
export class <%= classify(name) %>Effects {

    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType(<%= classify(name) %>Actions.LOAD_ALL_<%= uppercase(pluralize(name)) %>),
        mergeMap(() =>
            this.<%= name %>Service.index().pipe(
                mergeMap(data => [
                    ({ type: <%= classify(name) %>Actions.LOAD_ALL_<%= uppercase(pluralize(name)) %>_SUCCESS, payload: data }),
                ]),
                catchError((error) => of({ type: <%= classify(name) %>Actions.FAILURE, payload: { concern: 'LOAD', error } }))
            )
        )
    );

    @Effect()
    add$: Observable<Action> = this.actions$.pipe(
        ofType(<%= classify(name) %>Actions.ADD_<%= uppercase(name) %>),
        mergeMap((action: any) =>
            this.<%= name %>Service.create(action.payload).pipe(
                mergeMap(data => [
                    ({ type: <%= classify(name) %>Actions.ADD_<%= uppercase(name) %>_SUCCESS, payload: data }),
                ]),
                catchError((error) => of({ type: <%= classify(name) %>Actions.FAILURE, payload: { concern: 'ADD', error } }))
            )
        )
    );

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(<%= classify(name) %>Actions.UPDATE_<%= uppercase(name) %>),
        mergeMap((action: any) =>
            this.<%= name %>Service.update(action.payload).pipe(
                mergeMap(data => [
                    ({ type: <%= classify(name) %>Actions.UPDATE_<%= uppercase(name) %>_SUCCESS, payload: data }),
                ]),
                catchError((error) => of({ type: <%= classify(name) %>Actions.FAILURE, payload: { concern: 'UPDATE', error } }))
            )
        )
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType(<%= classify(name) %>Actions.DELETE_<%= uppercase(name) %>),
        mergeMap((action: any) =>
            this.<%= name %>Service.destroy(action.payload).pipe(
                mergeMap(data => [
                    ({ type: <%= classify(name) %>Actions.DELETE_<%= uppercase(name) %>_SUCCESS, payload: data }),
                ]),
                catchError((error) => of({ type: <%= classify(name) %>Actions.FAILURE, payload: { concern: 'DELETE', error } }))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private <%= name %>Service: <%= classify(name) %>Service,
    ) { }
}
