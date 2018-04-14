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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home', 'AppController@index');
// Route::get('/home', 'AppController@index')->name('main')->middleware('auth');

Route::group(['middleware' => ['permission:create surveys']], function () {
    Route::post('/survey', 'SurveyController@addNewSurvey');
    Route::get('/surveys/all', 'SurveyController@getAllSurveys');
    // Route::post('/survey', 'SurveyController@addNewSurvey')->middleware('auth');
});

Route::get('/isAdmin', function(){
    $user = \Auth::user();

    return response()->json(['admin' => $user->hasRole('admin')]);

});

//survey routes
Route::get('/survey/{id}', 'SurveyController@getSurvey');
// Route::get('/survey/{id}', 'SurveyController@getSurvey')->middleware('auth');
Route::get('/surveys', 'SurveyController@getSurveys');
// Route::get('/surveys', 'SurveyController@getSurveys')->middleware('auth');
Route::get('/surveys/todo', 'SurveyController@getAllUserAvailableSurveys');
// Route::get('/surveys/todo', 'SurveyController@getAllUserAvailableSurveys')->middleware('auth');
Route::post('/survey/{id}', 'SurveyController@takeSurvey');
// Route::post('/survey/{id}', 'SurveyController@takeSurvey')->middleware('auth');

//only use for initilization!!!
// Route::get('/init', 'InitController@start');

//to give yourself admin
// Route::get('/gimmeAdmin', function(){
//     $user = \Auth::user();
//     $user->assignRole('admin');
//
//     echo 'done genie';
// });
