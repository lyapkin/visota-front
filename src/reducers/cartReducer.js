const cartReducer = (state, action) => {
    switch (action.type) {
        case cartActions.NAME:
            return {
                ...state,
                name: action.payload
            }
        case cartActions.NUMBER:
            return {
                ...state,
                number: action.payload
            }
        case cartActions.EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case cartActions.ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case cartActions.COMMENT:
            return {
                ...state,
                comment: action.payload
            }
        case cartActions.PAY_METHOD:
            return {
                ...state,
                payMethod: action.payload
            }
        default:
            return state
    }
}

export default cartReducer

export const cartActions = {
    NAME: 'name',
    NUMBER: 'number',
    EMAIL: 'email',
    ADDRESS: 'address',
    COMMENT: 'comment',
    PAY_METHOD: 'payMethod'
}

export const cartInitState = {
    name: '',
    number: '',
    email: '',
    address: '',
    comment: '',
    payMethod: ''
}