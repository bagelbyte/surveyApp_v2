<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class InitController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function start()
    {
        $role = Role::create(['name' => 'admin']);
        $permissionEdit = Permission::create(['name' => 'edit surveys']);
        $permissionCreate = Permission::create(['name' => 'create surveys']);

        $role->givePermissionTo($permissionEdit);
        $role->givePermissionTo($permissionCreate);


        $role = Role::create(['name' => 'user']);
        $permission = Permission::create(['name' => 'take surveys']);

        $role->givePermissionTo($permission);

        echo 'all good';
    }
}
