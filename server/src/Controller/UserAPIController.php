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
            $userdata = array_map('trim', $_POST);

            if (filter_var($userdata['email'], FILTER_VALIDATE_EMAIL) === false) {
                $errors[] = 'veuillez entrez un email ou un email valide';
            }
            if (empty($userdata['firstname'])) {
                $errors[] = 'veuillez entrez un prénom';
            }
            if (empty($userdata['lastname'])) {
                $errors[] = 'veuillez entrez un Nom';
            }
            if (empty($userdata['password'])) {
                $errors[] = 'veuillez entrez un mot de passe';
            }
            if (empty($errors)) {
                $userManager = new UserManager();
                $userManager->insert($userdata);
                // return $this->login();
            }
        }
        return json_encode(['errors' => $errors]);
    }
}
