import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { firestore } from 'firebase';

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.Title}</span>
                        <p>
                            {project.connect}
                        </p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by the The Net Ninja</div>
                        <div>2nd Septemper</div>


                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="container">
                Loadin...
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)