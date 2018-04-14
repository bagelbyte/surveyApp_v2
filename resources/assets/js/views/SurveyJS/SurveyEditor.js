import React, { Component } from "react";
import * as SurveyJSEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import "surveyjs-editor/surveyeditor.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import 'image-picker/image-picker/image-picker.css';

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
// import "image-picker/image-picker/image-picker.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(SurveyKo, $);
widgets.select2(SurveyKo, $);
// widgets.imagepicker(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

class SurveyEditor extends Component {
  constructor(props){
      super(props)
      this.editor = null;
      this.balls = 5;
  }

  componentDidMount() {
    let editorOptions = { showEmbededSurveyTab: true };
    this.editor = new SurveyJSEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );
    console.log('mounted')
    console.log(this.editor)

    this.editor.saveSurveyFunc = this.saveMySurvey.bind(this);
  }
  render() {
      console.log('rendered')
    return <div id="surveyEditorContainer" />;
  }
  saveMySurvey(){
    let survey = JSON.parse(this.editor.text);

    //send it up
    axios.post('/survey', survey).then(function(data){
        console.log(data.data)
    })
  };
}

export default SurveyEditor;
