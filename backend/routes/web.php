<?php

use Illuminate\Support\Facades\Route;

Route::get('/api/mensagens', function () {
    return response() -> json(
        [
            ['texto' => 'Hello World'],
            ['texto' => 'mensagem'],
        ]
    );
});
