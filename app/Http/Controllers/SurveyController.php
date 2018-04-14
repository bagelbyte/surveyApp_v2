<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function getAllSurveys(){
        return response()->json(\App\Survey::all());
    }

    public function getSurvey($id){
        echo \App\Survey::find($id);
    }

    public function getAllUserAvailableSurveys(){
        //lets get the taken surveys first
        // $takenSurveys = \App\TakenSurvey::where('user_id', \Auth::user()->id);
        $result = \DB::table('surveys')->
            whereRaw('id not in (select distinct survey_id from taken_surveys where user_id = ?)', [\Auth::user()->id])->get();
        // $surveys = \App\Survey::

        // dd($result);
        echo $result;
    }

    public function addNewSurvey(Request $request){
        $surveyBody = $request->json()->all();

        // dd($surveyBody);
        // var_dump($surveyBody);
        // die();
        // dd(json_decode($surveyBody, true));
        $survey = new \App\Survey;

        \DB::table('surveys')->insert(
            [
                'survey_body' => json_encode($surveyBody),
                "created_at" =>  \Carbon\Carbon::now(),
                "updated_at" => \Carbon\Carbon::now(),
            ]
        );
        // $survey->survey_body = $surveyBody;
        //
        // $survey->save();

        echo 'success';
    }

    public function takeSurvey(Request $request, $surveyID){
        $surveyBody = $request->json()->all();

        //lets make sure that this survey hasnt already been taken

        $result = \App\TakenSurvey::where('user_id', \Auth::user()->id)->where('survey_id', $surveyID)->count();
        if($result == 0){
            //then they havent taken this quiz before
            \DB::table('taken_surveys')->insert(
                [
                    'results' => json_encode($surveyBody),
                    'user_id' => \Auth::user()->id,
                    'survey_id' => $surveyID,
                    "created_at" =>  \Carbon\Carbon::now(),
                    "updated_at" => \Carbon\Carbon::now(),
                ]
            );

            $response = 'success';
        }
        else{
            $response = 'stahp';
        }

        echo $response;
    }
}
