import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
// import 'image-picker/image-picker/image-picker.css';

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
// import "image-picker/image-picker/image-picker.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
// widgets.imagepicker(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            survey_id: props.match.params.id,
            surveyJSON: {}
        };

        this.loadSurvey(this.state.survey_id);
    }

    loadSurvey(survey_id){
        axios.get('/survey/' + survey_id).then((data) => {
            let result = data.data;
            result.survey_body = JSON.parse(result.survey_body)

            this.setState({surveyJSON: result})
        })
    }

  onComplete(result) {
    console.log("Complete! " + result);
    console.log('but we dont really care lol')
    console.log(result)
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.state.surveyJSON.survey_body);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Take the survey Boii</h2>
        </div>
        <div className="surveyjs">
          <Survey.Survey model={model} onComplete={this.onComplete.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
