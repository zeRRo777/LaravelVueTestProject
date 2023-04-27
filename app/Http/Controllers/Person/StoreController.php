<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\UpdateRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;
use Illuminate\Http\Request;
use function response;

class StoreController extends Controller
{
    public function __invoke(UpdateRequest $request)
    {
        $data = $request->validated();
        $person = Person::create($data);
        return new PersonResource($person);
    }
}
