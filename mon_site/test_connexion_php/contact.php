<div class="banniereHautDePage">
            <div class="titreBannierePages">
                <h2 class="h2-banniere-pages">CONTACT</h2>
            </div>
        </div>

        <h4 class="h4MediaQ">Merci de bien vouloir renseigner vos informations avant de nous laisser un message.</h4>

        <form class="contactFormMediaQ" action="recup_donnes.php" method="post">
            <div id="containerContactGrid">
                <div id="contactBoxFlex">
                    <div id="contactElement1">
                        <label for="text">Nom *</label>
                        <input type="text" placeholder="Votre nom" name="nom" />
                    </div>
                    <div id="contactElement2">
                        <label for="email">E-mail *</label>
                        <input type="email" placeholder="Votre adresse mail" name="mail" />
                    </div>
                    <div id="contactElement3">
                        <textarea id="boxdialogue" placeholder="Veuillez écrire votre message ici" name="messagePerso" rows="12" cols="44"></textarea>

                        <div id="bouton-contact">
                            <button class="bouton-pages" type="submit" name="ajouter" value="Envoyer"></button>
                        </div>
                    </div>
                </div>
            </div>
        </form>