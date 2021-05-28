<?php

require './vendor/autoload.php';

use App\ChatServer;
use App\MapaServer;
use App\TabuleiroServer;

$app = new Ratchet\App('localhost', 9990);
$app->route('/chat', new ChatServer, ['*']);
$app->route('/mapa', new MapaServer, ['*']);
$app->route('/tabuleiro', new TabuleiroServer, ['*']);
$app->run();
