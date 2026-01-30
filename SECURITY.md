# Security Policy

## Objectifs
- Protéger les données utilisateurs et la confidentialité.
- Réduire la surface d’attaque (principe du moindre privilège).
- Appliquer les bonnes pratiques OWASP + WCAG 2.2 AA.

## Backend (API)
- Validation stricte des entrées (Zod) sur toutes les routes.
- Sanitization des données (pas d’injection SQL, pas de XSS côté API).
- Authentification via JWT + Cookies HttpOnly (pas de token localStorage).
- CORS restrictif (origines autorisées uniquement).
- Headers de sécurité via Helmet (CSP, HSTS, etc.).
- Upload sécurisé (MIME types, taille max, chemins whitelists).
- Logs d’erreur propres (pas de stack trace en prod).

## Frontend
- Jamais de `dangerouslySetInnerHTML` sans sanitization explicite.
- Formulaires validés + messages d’erreur accessibles.
- Protection contre les attaques de type CSRF/XSS via bonnes pratiques.

## Déploiement
- Secrets dans `.env`, jamais dans le repo.
- Permissions minimales sur fichiers et services.
- Backups et surveillance (logs, erreurs).

## Revue PR
Checklist sécurité à vérifier pour chaque PR :
- [ ] Validation côté serveur + côté client
- [ ] Pas de secrets commités
- [ ] Uploads sécurisés
- [ ] Headers sécurité actifs
- [ ] CORS restrictif

## Signalement
Si une faille est découverte, elle est corrigée immédiatement et documentée dans la PR concernée.