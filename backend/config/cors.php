<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

'allowed_methods' => ['*'],

'allowed_origins' => ['http://localhost:5175'],

'allowed_headers' => ['*'],

'supports_credentials' => true,

];
