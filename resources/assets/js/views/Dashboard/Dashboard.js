import React, { Component } from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

function SurveyList(props){
    let surveys = props.surveys;

    let style = {
        cursor: 'pointer'
    }

    let surveyItems = surveys.map((survey) =>
        <Route render={({history}) =>
            <div onClick={() => {history.push('/survey/' + survey.id)}} style={style} className="alert alert-primary"  key={survey.id}>{survey.id}</div>
        }/>
    );

    return surveyItems
}


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.getTakeableSurveys();
        this.state = {
            todoSurveys: []
        }
    }

    getTakeableSurveys(){
        axios.get('/surveys/todo').then((data) => {
            this.setState({'todoSurveys': data.data})
        })
    }

    handleClick() {

    }

    render() {
        return (
            <div>

                {
                    ( this.state.todoSurveys.length == 0 ) ? (
                        <h3>No Available Surveys</h3>
                    ) : (
                        <div>
                            <h3>Available Surveys</h3>
                            <SurveyList surveys={this.state.todoSurveys}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Dashboard;
