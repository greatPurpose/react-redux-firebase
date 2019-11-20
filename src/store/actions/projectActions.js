export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirebase();
        firestore.collecion('projects').add({
            ...project, 
            authorFirstName: "Net",
            authorLastName: "Core",
            authorId: 12345,
            createAt: new Date()
        })
        .then(() => {
            dispatch({ type: 'CREAT_PROJECT',  project });
        })        
        .catch((err) => {
            dispatch({ type: 'CREAT_PROJECT_ERROR',  err });
        })
    }
};