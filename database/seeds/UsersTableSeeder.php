<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    protected $wordBank = [
        'decay',
        'acute',
        'control',
        'symptom',
        'concept',
        'tank',
        'coincide',
        'ridge',
        'policeman',
        'active',
        'hen',
        'twin',
        'adventure',
        'nationalism',
        'wardrobe',
        'orientation',
        'unit',
        'monster',
        'exploit',
        'disagree',
        'volume',
        'condition',
        'tower',
        'front',
        'progress',
        'necklace',
        'patent',
        'psychology',
        'increase',
        'count',
        'breakfast',
        'oven',
        'ruin',
        'preparation',
        'shy',
        'week',
        'marsh',
        'research',
        'misery',
        'relate',
        'ant',
        'failure',
        'cash',
        'therapist',
        'gas',
        'accompany',
        'jealous'
    ];
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
