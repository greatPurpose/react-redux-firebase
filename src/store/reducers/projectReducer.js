const initState = {
    projects: [
        { id: '1', title: '111111111111' },
        { id: '2', title: '22222222222222' },
        { id: '3', title: '3333333333333' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREAT_PROJECT':
            console.log(action.project);            
            return state;
        case 'CREACT_PROJECT_ERROR':
            console.log('create project err = ', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer