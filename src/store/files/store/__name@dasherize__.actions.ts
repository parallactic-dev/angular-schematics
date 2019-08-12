import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { <%= classify(name) %> } from 'src/app/shared/models/<%= name %>';


export const LOAD_ALL_<%= uppercase(pluralize(name)) %> = 'LOAD_ALL_<%= uppercase(pluralize(name)) %>';
export const LOAD_ALL_<%= uppercase(pluralize(name)) %>_SUCCESS = 'LOAD_ALL_<%= uppercase(pluralize(name)) %>_SUCCESS';

export const ADD_<%= uppercase(name) %> = 'ADD_<%= uppercase(name) %>';
export const ADD_<%= uppercase(name) %>_SUCCESS = 'ADD_<%= uppercase(name) %>_SUCCESS';

export const UPDATE_<%= uppercase(name) %> = 'UPDATE_<%= uppercase(name) %>';
export const UPDATE_<%= uppercase(name) %>_SUCCESS = 'UPDATE_<%= uppercase(name) %>_SUCCESS';

export const DELETE_<%= uppercase(name) %> = 'DELETE_<%= uppercase(name) %>';
export const DELETE_<%= uppercase(name) %>_SUCCESS = 'DELETE_<%= uppercase(name) %>_SUCCESS';

export const SELECT_<%= uppercase(name) %> = 'SELECT_<%= uppercase(name) %>';

export const CLEAR = 'CLEAR';

export const FAILURE = 'FAILURE';


export class LoadAll<%= classify(pluralize(name)) %> implements Action {
    readonly type = LOAD_ALL_<%= uppercase(pluralize(name)) %>;
    constructor(public payload = null) { };
}

export class LoadAll<%= classify(pluralize(name)) %>Success implements Action {
    readonly type = LOAD_ALL_<%= uppercase(pluralize(name)) %>_SUCCESS;
    constructor(public payload: <%= classify(name) %>[]) { };
}

export class Add<%= classify(name) %> implements Action {
    readonly type = ADD_<%= uppercase(name) %>;
    constructor(public payload: <%= classify(name) %>) { };
}

export class Add<%= classify(name) %>Success implements Action {
    readonly type = ADD_<%= uppercase(name) %>_SUCCESS;
    constructor(public payload: <%= classify(name) %>) { };
}

export class Update<%= classify(name) %> implements Action {
    readonly type = UPDATE_<%= uppercase(name) %>;
    constructor(public payload: <%= classify(name) %>) { };
}

export class Update<%= classify(name) %>Success implements Action {
    readonly type = UPDATE_<%= uppercase(name) %>_SUCCESS;
    constructor(public payload: Update<<%= classify(name) %>>) { };
}

export class Delete<%= classify(name) %> implements Action {
    readonly type = DELETE_<%= uppercase(name) %>;
    constructor(public payload: string) { };
}

export class Delete<%= classify(name) %>Success implements Action {
    readonly type = DELETE_<%= uppercase(name) %>_SUCCESS;
    constructor(public payload: string) { };
}

export class Select<%= classify(name) %> implements Action {
    readonly type = SELECT_<%= uppercase(name) %>;
    constructor(public payload: string) { };
}

export class Clear implements Action {
    readonly type = CLEAR;
    constructor() { }
}

export class Failure implements Action {
    readonly type = FAILURE;
    constructor (public payload: { concern: 'LOAD' | 'ADD' | 'UPDATE' | 'DELETE', error: any }) {}
}

export type <%= classify(name) %>Actions = 
| LoadAll<%= classify(pluralize(name)) %>
| LoadAll<%= classify(pluralize(name)) %>Success
| Add<%= classify(name) %>
| Add<%= classify(name) %>Success
| Update<%= classify(name) %>
| Update<%= classify(name) %>Success
| Delete<%= classify(name) %>
| Delete<%= classify(name) %>Success
| Select<%= classify(name) %>
| Clear
| Failure;