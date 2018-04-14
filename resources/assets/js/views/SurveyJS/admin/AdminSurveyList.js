import React, { Component } from "react";
import {Link, Switch, Route, Redirect, HashRouter} from 'react-router-dom';

function SurveyList(props){
    let surveys = props.surveys;

    let style = {
        cursor: 'pointer'
    }

    let surveyItems = surveys.map((survey) =>
        <Route key={survey.id} render={({history}) =>
            <div key={survey.id} onClick={() => {history.push('/survey/view/' + survey.id)}} style={style} className="alert alert-primary"  >{survey.id}</div>
        }/>
    );

    return surveyItems
}

class AllSurveys extends Component{
    constructor(props) {
        super(props);

        this.getTakeableSurveys();
        this.state = {
            editableSurveys: []
        }
    }

    getTakeableSurveys(){
        axios.get('/surveys/all').then((data) => {
            this.setState({'editableSurveys': data.data})
        })
    }

    handleClick() {

    }

    render() {
        return (
            <div>

                {
                    ( this.state.editableSurveys.length == 0 ) ? (
                        <h3>No Current Surveys</h3>
                    ) : (
                        <div>
                            <h3>Current Surveys</h3>
                            <SurveyList surveys={this.state.editableSurveys}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default AllSurveys;
