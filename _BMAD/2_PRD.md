# 2. Product Requirements Document (PRD) - MVP

## 1. Vue d'ensemble
Le MVP (Minimum Viable Product) se concentre sur le flux essentiel : voir les annonces côté client, et gérer les annonces côté admin. Pas de compte utilisateur pour les visiteurs pour l'instant.

## 2. Fonctionnalités (User Stories High Level)

### 🏠 Frontend (Vitrine Publique)
1.  **Page d'Accueil (Home) :**
    -   Présentation de l'agence (Hero section).
    -   Mise en avant des 3 dernières annonces ("Derniers biens rentrés").
2.  **Liste des Biens (Listing) :**
    -   Grille responsive des annonces.
    -   Filtres basiques (Achat/Location, Prix min/max, Surface min).
3.  **Détail d'un Bien :**
    -   Galerie photos simple.
    -   Infos clés (Prix, Surface, Pièces, DPE).
    -   Description textuelle.
    -   Formulaire de contact (lien mailto ou formulaire simple).

### 🔐 Back-Office (Admin)
1.  **Authentification :**
    -   Login simple (Email/Mot de passe) sécurisé (JWT).
2.  **Dashboard :**
    -   Liste des biens existants (Tableau).
    -   Boutons d'actions rapides (Modifier, Supprimer).
3.  **Édition d'Annonce (CRUD) :**
    -   Formulaire création/édition.
    -   Upload d'images (stockage local ou cloud à définir en ARCH).
    -   Champs : Titre, Prix, Surface, Chambres, Description, Type (Maison/Appart).

## 3. Exigences Non-Fonctionnelles (NFR)
-   **Accessibilité (Priorité 1) :**
    -   Contraste couleurs AA minimum.
    -   Navigation clavier complète.
    -   Balises ARIA et textes alternatifs sur toutes les images.
    -   Tests avec lecteurs d'écran simulés.
-   **Performance :** Score Lighthouse > 90.
-   **Responsive :** Mobile First.

## 4. Questions Ouvertes (À trancher en phase ARCH)
-   Stockage des images : Dossier local serveur ou Service tiers (Cloudinary/S3) ?
    *   *Proposition Friday :* Dossier local pour le MVP (plus simple), Cloudinary pour la V2.
