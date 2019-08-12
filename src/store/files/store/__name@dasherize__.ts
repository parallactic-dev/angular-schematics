import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'src/app/store';
import * as from<%= classify(name) %> from './<%= name %>.reducer';


export interface <%= classify(name) %>ModuleState {
    <%= pluralize(name) %>: from<%= classify(name) %>.State;
}

export interface AppState extends fromRoot.AppState {
    <%= name %>Module: <%= classify(name) %>ModuleState;
}

export const reducers = {
    <%= pluralize(name) %>: from<%= classify(name) %>.reducer,
};


export const select<%= classify(name) %>ModuleState = createFeatureSelector<<%= classify(name) %>ModuleState>('<%= name %>Module');
export const select<%= classify(name) %>State = createSelector(
    select<%= classify(name) %>ModuleState, 
    (state: <%= classify(name) %>ModuleState) => state.<%= pluralize(name) %>
);
export const select<%= classify(name) %>Entities = createSelector(
    select<%= classify(name) %>State,
    from<%= classify(name) %>.select<%= classify(name) %>Entities
);
export const selectAll<%= classify(pluralize(name)) %> = createSelector(
    select<%= classify(name) %>State,
    from<%= classify(name) %>.selectAll<%= classify(pluralize(name)) %>
);
export const selectCurrent<%= classify(name) %>Id = createSelector(
    select<%= classify(name) %>State,
    from<%= classify(name) %>.getSelected<%= classify(name) %>Id
);
export const selectCurrent<%= classify(name) %> = createSelector(
    select<%= classify(name) %>Entities,
    selectCurrent<%= classify(name) %>Id,
    (<%= name %>Entities, id) => <%= name %>Entities[id]
);
