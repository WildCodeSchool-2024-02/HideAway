<?php

namespace App\Controller;

use App\Model\UserManager;
use App\Controller\AbstractAPIController;

class UserAPIController extends AbstractAPIController
{
    public function register()
    {
        $errors = [];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $rawData = file_get_contents('php://input');
            $newUser = json_decode($rawData, true);

            if (filter_var($newUser['email'], FILTER_VALIDATE_EMAIL) === false) {
                $errors[] = 'veuillez entrez un email ou un email valide';
            } else {
                $email = $newUser['email'];
                $testmail = new UserManager();
                $user = $testmail->selectOneByEmail($email);
                if (!empty($user)) {
                    $errors[] = "l'adresse mail est déjà utilisé";
                }
            }
            if (empty($newUser['firstname'])) {
                $errors[] = 'veuillez entrez un prénom';
            }
            if (empty($newUser['lastname'])) {
                $errors[] = 'veuillez entrez un Nom';
            }
            if (empty($newUser['password'])) {
                $errors[] = 'veuillez entrez un mot de passe';
            }

            if (empty($errors)) {
                $userManager = new UserManager();
                $userManager->insert($newUser);
                $userValidation = 'done';

                return json_encode(['validation' => $userValidation]);
            }
        }
        return json_encode(['errors' => $errors]);
    }
    public function login()
    {
        $errors = [];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $rawData = file_get_contents('php://input');
            $userdata = json_decode($rawData, true);
            if (empty($userdata['email'])) {
                $errors[] = 'L\'adresse email ou le mot de passe n\'est pas valide';
            }
            $userManager = new UserManager();
            $user = $userManager->selectOneByEmail($userdata['email']);
            if (!empty($user) && password_verify($userdata['password'], $user['password'])) {
                return json_encode(['user' => $user]);
            } else {
                $errors[] = 'L\'adresse email ou le mot de passe n\'est pas valide';
            }
        }
        return json_encode(['errors' => $errors]);
    }
}
