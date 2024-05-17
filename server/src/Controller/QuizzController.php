<?php

namespace App\Controller;

use App\Model\QuizzManager;
use App\Model\RetraiteManager;

class Quizzcontroller extends AbstractAPIController
{
    public function resultQuizz()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $rawData = file_get_contents('php://input');
            $newResult = json_decode($rawData, true);
            if ($newResult['u_are'] === 'campagne' || $newResult['u_are'] === 'montagne' && $newResult['u_like'] === 'evasion' || $newResult['u_like'] === 'manuel') {
                $id = 1;
                $retraiteManager = new RetraiteManager();
                $retraite = $retraiteManager->selectOneById($id);
            }
            if ($newResult['age'] === '50-99' && $newResult['u_like'] === 'casse-cou') {
                $id = 2;
                $retraiteManager = new RetraiteManager();
                $retraite = $retraiteManager->selectOneById($id);
            }
            if ($newResult['u_are'] === 'plage' && $newResult['u_like'] === 'fetard') {
                $id = 3;
                $retraiteManager = new RetraiteManager();
                $retraite = $retraiteManager->selectOneById($id);
            }
            if ($newResult['have_child'] === 'oui' && $newResult['u_like'] === 'evasion') {
                $id = 4;
                $retraiteManager = new RetraiteManager();
                $retraite = $retraiteManager->selectOneById($id);
            }
            if ($newResult['age'] === '18-30' && $newResult['u_like'] === 'evasion') {
                $id = 5;
                $retraiteManager = new RetraiteManager();
                $retraite = $retraiteManager->selectOneById($id);
            }

            // $_SESSION['result'] = $retraite;

            return json_encode($retraite);
            // $quizzManager = new QuizzManager();
            // $quizzManager->insert($newResult);
        }
    }
    public function resultShow()
    {
        $result = $_SESSION['result'];
        return json_encode($result);
    }
}
