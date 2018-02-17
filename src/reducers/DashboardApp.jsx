import { combineReducers } from 'redux';

function DashboardApp( state = initialState, action ){
    switch (action.type) {
    case 'SELECT_REGION':
        return Object.assign({}, state, {
            regionSelected: action.selectedRegion
        });
    default:
        return state;

    }
}

module.exports = {
    DashboardApp: DashboardApp
};
