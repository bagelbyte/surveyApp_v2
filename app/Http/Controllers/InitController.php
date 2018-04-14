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
        $role = Role::create(['name' => 'admin', 'guard_name' => 'web']);
        $permissionEdit = Permission::create(['name' => 'edit surveys', 'guard_name' => 'web']);
        $permissionCreate = Permission::create(['name' => 'create surveys', 'guard_name' => 'web']);

        $role->givePermissionTo($permissionEdit);
        $role->givePermissionTo($permissionCreate);


        $role = Role::create(['name' => 'user', 'guard_name' => 'web']);
        $permission = Permission::create(['name' => 'take surveys', 'guard_name' => 'web']);

        $role->givePermissionTo($permission);

        echo 'all good';
    }
}
