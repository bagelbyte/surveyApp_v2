import React, {Component} from 'react';
import {Link, Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import CreateSurvey from '../../views/SurveyJS/SurveyEditor';
import EditSurveyList from '../../views/SurveyJS/admin/AdminSurveyList';
import EditSurvey from '../../views/SurveyJS/SurveyEditorEdit';
import TakeSurvey from '../../views/SurveyJS/Survey';
import ViewSurvey from '../../views/SurveyJS/SurveyView';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
                <HashRouter>
                    <Switch>
                        <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                        <Route path="/survey/create" name="Create Survey" component={CreateSurvey}/>
                        <Route path="/survey/view/:id" name="View Survey" component={ViewSurvey}/>
                        <Route path="/survey/edit" name="Editable Surveys" component={EditSurveyList}/>
                        <Route exact path="/survey/:id" name="Take Survey" component={TakeSurvey}/>
                        <Redirect from="/" to="/dashboard"/>
                    </Switch>
                </HashRouter>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
