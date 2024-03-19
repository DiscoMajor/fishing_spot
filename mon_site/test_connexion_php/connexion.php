<!DOCTYPE html>
<html lang="fr">
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>Connexion</title>
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="stylesheet" href="css/mediaqueries.css" />
        <link rel="stylesheet" href="css/stylessass.css" />
        <link rel="icon" type="image/x-icon" href="../mon_site/icones/fs_favicon.png" />
    </head>

    <body>
        <header>
            <div id="flex-header">
                <div id="logo-fs">
                    <a href="index.html"><img src="..\mon_site\logo_fs\logo_fishing_spot.svg" alt="logo_fishing_spot" /></a>
                </div>
                <h1>Fishing Spot</h1>

                <div id="gap-img-navbar">
                    <a href=""><img class="svg-img" src="..\mon_site\icones\louperecherche_ico.svg" alt="search" /></a>
                    <a href="favoris.html"><img class="svg-img" src="..\mon_site\icones\favoris_ico.svg" alt="favoris" /></a>
                    <a href="moncompte.html"><img class="svg-img" src="..\mon_site\icones\mon_compte_ico.svg" alt="mon compte" /></a>
                </div>
            </div>

            <div id="header-background-color">
                <div id="navBarFlex">
                    <nav>
                        <ul id="ul-inline">
                            <li><a href="occasions.html">Occasions</a></li>
                            <li><a href="index.html">Carte</a></li>
                            <li><a href="actualites.html">Actualités</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <div class="banniereHautDePage">
            <div class="titreBannierePages">
                <h2 class="h2-banniere-pages">CONNEXION</h2>
            </div>
        </div>

        <div class="connexionh3">
            <h3>Se connecter</h3>
        </div>

        <form action="recup_donnees.php" method="post">
            <div id="connexionBox">
                <div class="connexionElement1">
                    <label>Adresse mail *</label>
                </div>
                <div class="connexionElement2">
                    <input type="text" placeholder="Entrez votre adresse mail" name="mail" required />
                </div>
                <div class="connexionElement3">
                    <label>Mot de passe *</label>
                </div>
                <div class="connexionElement4">
                    <input type="text" placeholder="Entrez votre mot de passe" name="mdp" minlength="8" maxlength="15" required />
                </div>
                <div class="connexionElement5">
                    <input type="submit" name="ajouter" value="Me connecter" class="bouton-pages" >
                </div>
            </div>
        </form>

        <div class="banniereHautDePage">
            <div class="titreBannierePages">
                <h2 class="h2-banniere-pages">CREER UN COMPTE</h2>
            </div>
        </div>

        <div class="connexionh3">
            <h3>S'enregistrer</h3>
        </div>


        <footer>
            <div id="footer-flex">
                <div class="footer-box1">
                    <ul>
                        <h3>Legal</h3>
                        <li class="li-footer"><a href="accueil.html">CGU</a></li>
                        <li class="li-footer"><a href="accueil.html">CGV</a></li>
                        <li class="li-footer"><a href="accueil.html">Donées personnelles</a></li>
                    </ul>
                </div>
                <div class="footer-box2">
                    <ul class="ul-footer">
                        <h3>Informations</h3>
                        <li class="li-footer"><a href="contact.html">Contact</a></li>
                        <li class="li-footer"><a href="moncompte.html">Mon compte</a></li>
                        <li class="li-footer"><a href="actualites.html">Actualités</a></li>
                    </ul>
                </div>

                <div id="container-box3-4">
                    <div class="footer-box3">
                        <a href="index.html"><img src="..\mon_site\logo_fs\logo_fishing_spot.svg" alt="logo_fishing_spot_accueil" /></a>
                    </div>
                    <div class="footer-box4">
                        <a href="https://www.instagram.com/" target="_blank"
                            ><img class="svg-img" src="..\mon_site\icones\insta_ico.svg" alt="instagram-icone"
                        /></a>
                        <a href="https://twitter.com/home/" target="_blank"
                            ><img class="svg-img" src="..\mon_site\icones\twitter_ico.svg" alt="twitter-x_ico."
                        /></a>
                        <a href="https://www.facebook.com/" target="_blank"
                            ><img class="svg-img" src="..\mon_site\icones\fb_ico.svg" alt="fb-icone"
                        /></a>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
