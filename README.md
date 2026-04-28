# Chatterie Sciortino

Site vitrine pour la chatterie d'Antonina Sciortino — élevage familial de Ragdolls à Gonfaron (Var, 83).

Stack : **Astro** (statique) + **Sveltia CMS** (édition) + **Netlify** (hébergement gratuit).

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Structure du contenu

- `src/content/chats/` — un fichier `.md` par chat reproducteur
- `src/content/portees/` — un fichier `.md` par portée (chatons en sous-liste)
- `src/content/pages/` — pages texte libre (démarche, contact, mentions légales)
- `src/content/media/` — toutes les images uploadées via le CMS

Schémas définis dans `src/content.config.ts`. Les champs requis (notamment
`numero_portee_loof` et `icad_mere`) sont obligatoires pour respecter
l'article L.214-8-1 du Code rural.

## Déploiement

1. Pousser ce dossier dans un repo GitHub.
2. Sur Netlify : "Add new site" → "Import from Git" → choisir le repo.
3. Build command : `npm run build` · Publish directory : `dist` (déjà dans `netlify.toml`).
4. Site disponible sur `https://chatterie-sciortino.netlify.app`.

## Activation du CMS (Sveltia) — étape unique

Le CMS est servi statiquement à `/admin`. Pour l'authentification GitHub :

1. Dans `public/admin/config.yml`, remplacer `TODO_USER/chatterie-sciortino`
   par le vrai chemin du repo (ex : `merlin/chatterie-sciortino`).
2. Sur **GitHub** → Settings → Developer settings → OAuth Apps → New OAuth App :
   - Homepage URL : `https://chatterie-sciortino.netlify.app`
   - Callback URL : `https://api.netlify.com/auth/done`
3. Sur **Netlify** → Site settings → Access & security → OAuth → Install provider →
   GitHub → coller le **Client ID** et **Client Secret** de l'app GitHub.
4. Antonina (ou un compte qu'elle utilise) doit être **collaborateur** sur le repo GitHub.
5. Tester `https://chatterie-sciortino.netlify.app/admin/` → "Login with GitHub".

## Workflow d'édition

Antonina ouvre `/admin`, modifie / ajoute du contenu, clique "Publier".
Sveltia commit dans GitHub. Netlify détecte le push et redéploie automatiquement.
Le site est mis à jour en ~1 minute.

## Mentions légales — à compléter avant mise en ligne

Dans `src/content/pages/mentions-legales.md`, remplacer les `*à compléter*` :
- Numéro I-CAD d'Antonina (statut éleveur d'une seule portée)
- Affixe LOOF (si elle en a un)

Dans `src/content/pages/contact.md` : email et lien Facebook.
