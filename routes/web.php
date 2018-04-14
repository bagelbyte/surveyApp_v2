<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

// Route::get('/', 'AppController@index');

// Route::get('/perms', function(){
//     $user = \Auth::user();
//     if($user->hasPermissionTo('create surveys')){
//         //then lets serve the stuff
//     }
// });

Route::group(['middleware' => ['permission:create surveys', 'auth']], function () {
    Route::post('/survey', 'SurveyController@addNewSurvey');
    Route::get('/surveys/all', 'SurveyController@getAllSurveys');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/survey/{id}', 'SurveyController@getSurvey');
    Route::get('/surveys', 'SurveyController@getSurveys');
    Route::get('/surveys/todo', 'SurveyController@getAllUserAvailableSurveys');
    Route::post('/survey/{id}', 'SurveyController@takeSurvey');

    Route::get('/isAdmin', function(){
        $user = \Auth::user();

        return response()->json(['admin' => $user->hasRole('admin')]);

    });

    //to give yourself admin
    // Route::get('/gimmeAdmin', function(){
    //     $user = \Auth::user();
    //     $user->assignRole('admin');
    //
    //     echo 'done genie';
    // });


    Route::get('/', 'AppController@index')->name('main');
});

// Route::get('/init', 'InitController@start');

Route::get('{any}', function ($any) {
        return redirect('/');
})->where('any', '.*');

//survey routes

// Route::get('/survey/{id}', 'SurveyController@getSurvey')->middleware('auth');

// Route::get('/surveys', 'SurveyController@getSurveys')->middleware('auth');

// Route::get('/surveys/todo', 'SurveyController@getAllUserAvailableSurveys')->middleware('auth');

// Route::post('/survey/{id}', 'SurveyController@takeSurvey')->middleware('auth');

//only use for initilization!!!
