<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\UpdateRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;
use function response;

class IndexController extends Controller
{
    public function __invoke()
    {
        return PersonResource::collection(Person::all());
    }
}
