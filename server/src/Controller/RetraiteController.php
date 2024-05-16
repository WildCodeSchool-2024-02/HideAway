<?php

namespace App\Controller;

use App\Model\RetraiteManager;

class RetraiteController extends AbstractAPIController
{
    public function list(): string
    {
        $retraiteManager = new RetraiteManager();
        $retraites = $retraiteManager->selectAll();

        return json_encode(['retraite' => $retraites]);
    }
}
