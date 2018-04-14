import React, {Component} from 'react';
import {Link, Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

import EditSurvey from '../../views/SurveyJS/SurveyEditor';
import TakeSurvey from '../../views/SurveyJS/Survey';

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
                        <Route path="/survey/create" name="Create Survey" component={EditSurvey}/>
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
