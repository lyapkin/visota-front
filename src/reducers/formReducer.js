const formReducer = (state, action) => {
    switch (action.type) {
        case formActions.NAME:
            return {
                ...state,
                name: action.payload
            }
        case formActions.NUMBER:
            return {
                ...state,
                number: action.payload
            }
        case formActions.COMPANY_NAME:
            return {
                ...state,
                companyName: action.payload
            }
        case formActions.ACTIVITY_TYPE:
            return {
                ...state,
                activityType: action.payload
            }
        case formActions.COMMENT:
            return {
                ...state,
                comment: action.payload
            }
        default:
            return state
    }
}

export default formReducer

export const formActions = {
    NAME: 'name',
    NUMBER: 'number',
    COMPANY_NAME: 'company',
    ACTIVITY_TYPE: 'activity',
    COMMENT: 'comment',
}

export const formInitState = {
    name: '',
    number: '',
    companyName: '',
    activityType: '',
    comment: ''
}