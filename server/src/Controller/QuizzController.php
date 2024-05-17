<?php

namespace App\Controller;

use App\Model\QuizzManager;

class Quizzcontroller extends AbstractAPIController
{
    public function resultQuizz()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $rawData = file_get_contents('php://input');
            $newResult = json_decode($rawData, true);
            $quizzManager = new QuizzManager();
            $quizzManager -> insert ($newresult);
            
    }
}
