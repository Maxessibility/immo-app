# 3. Architecture Technique

## 1. Stack Technique (Validée)

| Couche | Technologie | Justification |
| :--- | :--- | :--- |
| **Frontend** | **React** (v18+) + **Vite** | Standard moderne, rapide, écosystème riche. |
| **Langage** | **TypeScript** | Typage fort pour robustesse (proche Java/Angular). |
| **Styling** | **Tailwind CSS** | Développement rapide, maintenable, configuré pour a11y. |
| **Backend** | **Node.js** + **Express** | Léger, flexible, partage du langage (TS) avec le front. |
| **Base de données** | **SQLite** (via **Prisma**) | Zéro config, fichiers locaux, typage automatique avec Prisma. |
| **Validation** | **Zod** | Validation des données entrantes (runtime) partagée Front/Back. |
| **Linting** | **ESLint** + **Prettier** | Standards de code stricts (Airbnb ou Standard). |

## 2. Structure du Projet (Monorepo)
Le projet sera organisé en monorepo simple pour faciliter la gestion.

```
/immo-app
├── /client          # Application Frontend (Vite)
│   ├── /src
│   │   ├── /components  # Composants UI réutilisables (Button, Card...)
│   │   ├── /pages       # Pages complètes (Home, Admin...)
│   │   ├── /services    # Appels API (Axios/Fetch)
│   │   └── /types       # Types partagés
│   └── ...
├── /server          # API Backend (Express)
│   ├── /src
│   │   ├── /controllers # Logique de requête/réponse
│   │   ├── /services    # Logique métier (Business Logic)
│   │   ├── /routes      # Définitions des URLs
│   │   └── /prisma      # Schéma BDD et migrations
│   └── ...
├── /docs            # Documentation (BMAD)
└── package.json     # Scripts globaux (start:all, build:all)
```

## 3. Flux de Données & Sécurité
-   **API REST :** Communication Client <-> Serveur via JSON.
-   **Authentification :** JWT (JSON Web Token) stocké en Cookie HttpOnly (Sécurité XSS).
-   **Upload Images :**
    -   Upload via `multer` côté serveur.
    -   Stockage dans `/server/uploads` (servi statiquement).
    -   Limitation taille (ex: 2Mo) et type (jpg, png, webp).

## 4. Stratégie d'Accessibilité (A11y)
-   **Linter :** `eslint-plugin-jsx-a11y` activé et bloquant.
-   **Tests :** Audit Lighthouse automatisé en local.
-   **Composants :** Utilisation de `Radix UI` ou `Headless UI` (si besoin de composants complexes accessibles) ou natifs HTML5 sémantiques.
