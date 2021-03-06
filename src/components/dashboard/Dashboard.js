import React , {Component} from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import  { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux'
import {Redirect } from 'react-router-dom'
class Dashboard extends Component {
    
    render () {
        const {projects, auth } = this.props;
        
        if (!auth.uid) return <Redirect to ='/sigin' />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}></ProjectList>                    
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification></Notification>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state) => {    
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


export default compose(connect(mapStateToProps), firestoreConnect([{collection: 'projects'}]))(Dashboard)