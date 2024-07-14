<?php
	$connexion = new PDO('mysql:host=127.0.0.1;dbname=etudiants','root','');
	if (isset($_POST['valider'])){
		if (!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['classe']) && !empty($_POST['filiere'])) {
			$nom = htmlspecialchars($_POST['nom']);
			$prenom = htmlspecialchars($_POST['prenom']);
			$classe = htmlspecialchars($_POST['classe']);
			$filiere = htmlspecialchars($_POST['filiere']);
			$email = htmlspecialchars($_POST['email']);
			$password = sha1($_POST['password']);
			$req = $connexion -> prepare('INSERT INTO eleves VALUES ( :nom, :prenom, :classe, :filiere, :email, :password)');
			$req -> execute(
				array(
					"nom" =>  $nom,
					"prenom" => $prenom,
					"classe" => $classe,
					"filiere" => $filiere,
					"email" => $email,
					"password" => $password,
				));    
			$cpt = $req->fetchAll(PDO::FETCH_ASSOC);
			$cpt = $req -> rowCount();
			if($cpt==1){
				$message="Compte cree";
			}else{
				$message="Compte introuvable";
			}
		}   
		else{
			$message="Remplissez d'abord tous les champs";
			}
		}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Mendrika</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- RESAKA FONT SY ICON -->
		<link rel="stylesheet" href="fonts/material-design-iconic-font/css/material-design-iconic-font.min.css">
		<!-- STYLE CSS -->
		<link rel="stylesheet" href="css/style.css">
	</head>

	<body>

		<div class="Container">
			<div class="fond">
				<img src="images/sideimg.png" alt="">
			</div>
			<div class="form-inner">
				<form method="post" action="">
					<div class="form-header">
						<h3>Inscription</h3>
						<img src="images/sign-up.png">
					</div>
					<div class="form-group">
						<label for="">Nom</label>
						<input type="text" class="form-control" id="nom" name="nom" placeholder="Entrez le nom">
					</div>
					<div class="form-group">
						<label for="">Prénom</label>
						<input type="text" class="form-control" id="prenom" name="prenom" placeholder="Entrez le prénom">
					</div>
					<div class="form-group">
						<label for="">Filière</label>
						<input type="text" class="form-control" id="filiere" name="filiere" placeholder="Entrez la filière">
					</div>
					<div class="form-group">
						<label for="">Classe</label>
						<input type="text" class="form-control" id="classe" name="classe" placeholder="Entrez la classe">
					</div>
					<div class="form-group">
						<label for="">E-mail:</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="Bonjour@gmail.com">
					</div>
					<div class="form-group" >
						<label for="">Mot de passe</label>
						<input type="password" class="form-control" id="password" name="password" placeholder="Mot de passe">
					</div>
					<button type="submit" name="valider">Créer mon compte</button>
					<div class="socials">
						<p>Se connecter avec les réseaux sociaux</p>
						<a href="" class="socials-icon">
							<i class="zmdi zmdi-facebook"></i>
						</a>
						<a href="" class="socials-icon">
							<i class="zmdi zmdi-instagram"></i>
						</a>
						<a href="" class="socials-icon">
							<i class="zmdi zmdi-twitter"></i>
						</a>
						<a href="" class="socials-icon">
							<i class="zmdi zmdi-tumblr"></i>
						</a>
					</div>
				</form>
			</div>
			
		</div>
		
		<!-- <script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/jquery.form-validator.min.js"></script> -->
		<!-- <script src="js/main.js"></script> -->
	</body>
</html>