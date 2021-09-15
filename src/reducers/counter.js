import * as types from "../actions/ActionTypes";

const initialState = {
    number: 0,
    dummy: "dumbdumb",
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3,
    },
};
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            // 기존 dumb 데이터 유지 및 ,u만 변경
            return { ...state, number: state.number + 1, dumbObject: { ...state.dumbObject, u: 0 } };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}
