<?php
    /*************info serveur****************/
    $serveur = 'localhost';
    $bd = 'etudiants';
    $user = 'root';
    $mdp = null;
    /************connection a la base de donnee ***********/
    $connexion = new PDO('mysql:host=localhost;dbname=etudiants',$user,$mdp);
    if(isset($_POST['Se_connecter'])){
        if(!empty($_POST['email']) && !empty($_POST['password'])){
            $email= htmlspecialchars($_POST['email']);
            $password= sha1($_POST['password']);
            $req = $connexion->prepare('SELECT * FROM eleves WHERE email=? AND password=?');
            $req -> execute(array($email,$password));
            $cpt = $req -> rowCount();
            if($cpt==1)
            {
                $message="Compte trouvé";
            }
            else
            {
                $message="Compte introuvable";
            }
        }
        else
        {
            $message="Remplissez d'abord tous les champs";
        }
    }

?>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Mendrika</title>
    <link rel="stylesheet" href="contenu/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="contenu/css/style.css" />
    <link rel="stylesheet" href="../../Inscription/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css">
</head>

<body>
    
    <div class="container-fluid">
        <div class="container">
            <div class="col-xl-10 col-lg-11 mx-auto login-container">
                <div class="row">
                   
                    <div class="col-lg-5 col-md-6 no-padding">
                        <div class="login-box">
                            <h5>Gestionnaire d'élèves</h5>

                            <form method="post" action="">
                                <div class="login-row row no-margin">
                                    <label for=""><i class="fas fa-envelope"></i> Email Address</label>
                                    <input type="email" class="form-control form-control-sm" id="email" name="email" placeholder="Bonjour@gmail.com">
                                </div>

                                <div class="login-row row no-margin">
                                    <label for=""><i class="fas fa-unlock-alt"></i> Password</label>
                                    <input type="password" class="form-control form-control-sm" id="password" name="password" placeholder="Mot de passe">
                                </div>

                                <div class="login-row row no-margin">
                                    <p><input type="checkbox"> Rester connecté</p>
                                    <p><a class="vgh" href="">Mot de passe oublié</a></p>
                                </div>

                                <div class="login-row row no-margin">
                                    <button type="submit" name="Se_connecter" class="btn btn-primary btn-sm"> Se connecter</button>
                                    <button class="btn btn-success  btn-sm"><a href="Inscription/Inscription.php"> Créer compte</a></button>
                                </div>

                                <div class="login-row donroo row no-margin">
                                    <p>Vous n'avez pas de compte? <a href="">Inscrivez vous</a></p>
                                </div>

                                <p class="text-center">
                                    <i style="color: brown;">
                                        <?php
                                            if (isset($message)) {
                                            echo $message , "</br>";
                                            }
                                        ?>
                                    </i> 
                                </p>

                            </form>
                        </div>
                    </div>
                    
                     <div class="col-lg-7 col-md-6 img-box">
                        <img src="contenu/images/sideimg.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    

</body>

<script src="contenu/js/popper.min.js"></script>
<script src="contenu/js/bootstrap.min.js"></script>
<script src="contenu/js/script.js"></script>

</html>