<?php

namespace App\Model;

use PDO;

class QuizzManager extends AbstractManager
{
    public const TABLE = "quizz";
    public function insert(array $quizz): int
    {
        $statement = $this->pdo->prepare("INSERT INTO " . self::TABLE . " (offer, nb_person, age, have_child
        nb_child, u_are, u_like, id_user) VALUES (:offer, :nb_person, :age, :have_child, :nb_child, 
        :u_are, u_like :id_user)");
        $statement->bindValue('offer', $quizz['offer'], PDO::PARAM_BOOL);
        $statement->bindValue('nb_person', $quizz['nb_person'], PDO::PARAM_INT);
        $statement->bindValue('age', $quizz['age'], PDO::PARAM_STR);
        $statement->bindValue('have_child', $quizz['have_child'], PDO::PARAM_BOOL);
        $statement->bindValue('nb_child', $quizz['nb_child'], PDO::PARAM_INT);
        $statement->bindValue('u_are', $quizz['u_are'], PDO::PARAM_STR);
        $statement->bindValue('u_like', $quizz['u_like'], PDO::PARAM_STR);
        $statement->bindValue('id_user', $quizz['id_user'], PDO::PARAM_STR);
        $statement->execute();

        return (int)$this->pdo->lastInsertId();
    }
}
