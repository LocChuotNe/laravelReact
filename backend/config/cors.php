<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

'allowed_methods' => ['*'],

'allowed_origins' => ['http://localhost:5175', 'http://127.0.0.1:5175'],

'allowed_headers' => ['*'],

'supports_credentials' => true,

];
