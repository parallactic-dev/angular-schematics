import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as Actions from './<%= name %>.actions';
import { <%= classify(name) %> } from 'src/app/shared/models/<%= name %>';


export interface State extends EntityState<<%= classify(name) %>> {
    selected<%= classify(name) %>Id: string | number | null;
}
export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>();
export const initialState: State = adapter.getInitialState({
    selected<%= classify(name) %>Id: null,
});

export function reducer(state: State = initialState, action: Actions.<%= classify(name) %>Actions): State {
    switch (action.type) {
        case Actions.LOAD_ALL_<%= uppercase(pluralize(name)) %>_SUCCESS:
            return adapter.addAll(action.payload, state);

        case Actions.ADD_<%= uppercase(name) %>_SUCCESS:
            return adapter.addOne(action.payload, state);

        case Actions.UPDATE_<%= uppercase(name) %>_SUCCESS:
            return adapter.updateOne(action.payload, state);

        case Actions.DELETE_<%= uppercase(name) %>_SUCCESS:
            return adapter.removeOne(action.payload, state);

        case Actions.SELECT_<%= uppercase(name) %>:
            return { ...state, selected<%= classify(name) %>Id: action.payload };

        case Actions.CLEAR:
            return adapter.removeAll({ ...state });

        default:
            return state;
    }
}

export const getSelected<%= classify(name) %>Id = (state: State) => state.selected<%= classify(name) %>Id;
export const {
    selectIds: select<%= classify(name) %>Ids,
    selectEntities: select<%= classify(name) %>Entities,
    selectAll: selectAll<%= classify(pluralize(name)) %>,
    selectTotal: select<%= classify(name) %>Total,
} = adapter.getSelectors();
