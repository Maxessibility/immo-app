# Run locally (dev)

## Prérequis
- Node.js 22+
- npm

## 1) Installer les dépendances
À la racine du repo :
```bash
npm install
```

## 2) Backend (API)
```bash
cd server
export DATABASE_URL="file:./dev.db"

npx prisma migrate dev --name init
npm run seed
npm run dev
```
- API: http://localhost:4000
- Health: http://localhost:4000/health

## 3) Frontend (Vite)
Dans un autre terminal :
```bash
cd client
npm run dev
```
- Front: http://localhost:5173

## 4) Variables utiles
Créer un fichier `.env` dans `server/` si besoin :
```
DATABASE_URL="file:./dev.db"
```

## 5) Dépannage rapide
- Si pas de données : relance `npm run seed`.
- Si migration déjà faite : `npx prisma migrate reset` (⚠️ supprime la DB).
