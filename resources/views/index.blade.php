<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Vue</title>

        @vite(['resources/js/app.js', 'resources/sass/app.scss',])

    </head>
    <body class="p-5">
        <div id="app">
            <app></app>
        </div>
    </body>
</html>


