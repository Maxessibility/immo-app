# 4. Roadmap & Sprints

## Vue d'ensemble
L'objectif est d'atteindre le MVP en 4 Sprints courts.
Chaque Sprint se termine par une PR à valider.

---

### 🏃‍♂️ Sprint 1 : Setup & Fondations (Jours 1-2)
**Objectif :** Avoir un "Hello World" Fullstack qui tourne proprement.
-   [ ] Initialisation Monorepo (Client + Server).
-   [ ] Configuration TypeScript, ESLint, Prettier (Règles strictes).
-   [ ] Setup Tailwind CSS.
-   [ ] Setup Express + Prisma (SQLite).
-   [ ] **Livrable :** PR `feat/setup-project` (Repo propre, scripts `npm run dev` fonctionnels).

### 🏃‍♂️ Sprint 2 : Backend Core & BDD (Jours 2-3)
**Objectif :** Pouvoir gérer des annonces via l'API (Postman/Curl).
-   [ ] Modélisation BDD (Schéma Prisma : `Property`, `User`).
-   [ ] Routes API CRUD (Create, Read, Update, Delete) pour les annonces.
-   [ ] Gestion de l'upload d'images (Multer).
-   [ ] Seed de données (Annonces de test).
-   [ ] **Livrable :** PR `feat/backend-core`.

### 🏃‍♂️ Sprint 3 : Frontend Vitrine (Public) (Jours 3-5)
**Objectif :** Les visiteurs peuvent voir les annonces.
-   [ ] Création des composants UI de base (Card, Button, Layout).
-   [ ] Page Accueil (Liste des biens + Filtres).
-   [ ] Page Détail d'un bien.
-   [ ] Audit Accessibilité (Navigation clavier, Contrastes).
-   [ ] **Livrable :** PR `feat/frontend-public`.

### 🏃‍♂️ Sprint 4 : Back-Office & Auth (Jours 5-7)
**Objectif :** L'admin peut se connecter et gérer ses biens.
-   [ ] Système de Login (JWT).
-   [ ] Protection des routes API (/admin/*).
-   [ ] Dashboard Admin (Tableau des biens).
-   [ ] Formulaire d'ajout/édition avec Upload.
-   [ ] **Livrable :** PR `feat/admin-panel`.

---

## ✅ Définition du "Done" (DoD)
Pour qu'une tâche soit terminée :
1.  Le code compile sans erreur.
2.  Le linter est vert (pas de warning A11y).
3.  La fonctionnalité est testée (manuellement ou unitaire).
4.  La PR est validée par Max.
