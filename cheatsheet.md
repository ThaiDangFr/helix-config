# 📖 Helix Cheat Sheet (Antisèche Helix)

Un mémento rapide des raccourcis et commandes essentiels pour l'éditeur [Helix](https://helix-editor.com/).

---

## 🟢 Modes de base

Dans Helix, le paradigme est **Sélection → Action** (différent de Vim qui fait *Action → Sélection*).

| Touche | Description |
|--------|-------------|
| `i` | Entrer en mode **Insertion** avant le curseur |
| `a` | Entrer en mode **Insertion** après le curseur (Append) |
| `I` | Entrer en mode Insertion en début de ligne |
| `A` | Entrer en mode Insertion en fin de ligne |
| `o` | Ouvrir une nouvelle ligne sous le curseur |
| `O` | Ouvrir une nouvelle ligne au-dessus du curseur |
| `v` | Entrer / sortir du mode **Sélection** (visuel) |
| `Esc` | Revenir au mode **Normal** |

---

## 🎯 Mouvements & Sélections

### Mouvements simples
| Touche | Action |
|--------|--------|
| `h` / `j` / `k` / `l` | Gauche / Bas / Haut / Droite |
| `w` | Avancer au mot suivant (sélectionne le mot) |
| `b` | Reculer au mot précédent |
| `e` | Aller à la fin du mot suivant |
| `W` / `B` / `E` | Mêmes mouvements en ignorant la ponctuation (mots séparés par espaces) |

### Lignes et Fichier
| Touche | Action |
|--------|--------|
| `x` | Sélectionner la ligne entière |
| `X` | Étendre la sélection à la ligne suivante |
| `gh` | Aller au début de la ligne (`Home`) |
| `gl` | Aller à la fin de la ligne (`End`) |
| `gg` | Aller au début du fichier |
| `ge` / `G` | Aller à la fin du fichier |
| `%` | Sélectionner tout le contenu du fichier |

---

## ✂️ Supprimer, Modifier, Copier & Coller

| Touche | Action |
|--------|--------|
| `d` | Supprimer (Delete) la sélection actuelle |
| `c` | Changer (Change) : supprime la sélection et passe en mode Insertion |
| `r` | Remplacer un seul caractère sous le curseur par le caractère saisi |
| `y` | Copier (Yank) la sélection dans le registre par défaut |
| `p` | Coller (Paste) après le curseur |
| `P` | Coller avant le curseur |
| `u` | Annuler la dernière action (Undo) |
| `U` | Rétablir l'action annulée (Redo) |

### 📋 Presse-papiers système
Par défaut, Helix utilise son propre registre interne. Pour interagir avec le presse-papiers du système d'exploitation :

| Touche | Action |
|--------|--------|
| `"+y` | Copier la sélection dans le **presse-papiers système** |
| `"+p` | Coller depuis le **presse-papiers système** après le curseur |
| `"+P` | Coller depuis le **presse-papiers système** avant le curseur |
| `Space` + `y` | Raccourci espace : copier dans le presse-papiers système |
| `Space` + `p` | Raccourci espace : coller depuis le presse-papiers système |

---

## 🛠️ Formatage & Indentation

| Touche / Commande | Action |
|-------------------|--------|
| `=` | Ré-indenter la sélection courante (Tree-sitter natif) |
| `%` puis `=` | Sélectionner tout le fichier et ré-indenter |
| `>` | Décaler la sélection vers la droite (indentation) |
| `<` | Décaler la sélection vers la gauche (désindentation) |
| `:format` | Formater le fichier complet via le formateur externe (`prettier`, `black`, etc.) |
| `Alt` + `Shift` + `F` | Raccourci clavier pour formater avec le formateur LSP/externe |

---

## 🔍 Recherche & Navigation


| Touche | Action |
|--------|--------|
| `/` | Rechercher dans le fichier courant (expression régulière) |
| `n` | Aller à la occurrence suivante de la recherche |
| `N` | Aller à la occurrence précédente de la recherche |
| `*` | Rechercher la mot sous le curseur |
| `Space` + `f` | Recherche de fichier par nom dans le projet (`fzf` / picker) |
| `Space` + `F` | Recherche globale dans le projet par contenu (`live grep`) |
| `Space` + `b` | Lister et basculer entre les buffers (fichiers ouverts) |

---

## 💡 Multi-curseurs & Sélections multiples

| Touche | Action |
|--------|--------|
| `C` | Dupliquer le curseur sur la ligne en dessous |
| `Alt` + `C` | Dupliquer le curseur sur la ligne au-dessus |
| `s` | Sélectionner toutes les occurrences correspondant à une Regex dans la sélection |
| `,` | Conserver uniquement le curseur principal (Supprime les curseurs secondaires) |
| `Alt` + `,` | Supprimer le curseur principal |
| `&` | Aligner les sélections |

---

## 🪟 Fenêtres & Splits

Accédez au mode fenêtre avec `Ctrl+w` ou `Space` + `w` :

| Touche | Action |
|--------|--------|
| `Ctrl+w` + `v` / `s` | Séparer la fenêtre verticalement (`v`) ou horizontalement (`s`) |
| `Ctrl+w` + `h`/`j`/`k`/`l` | Naviguer entre les fenêtres divisées |
| `Ctrl+w` + `q` / `c` | Fermer la fenêtre courante |

---

## ⚡ Commandes utiles (`:`)

| Commande | Action |
|----------|--------|
| `:w` | Sauvegarder le fichier |
| `:q` | Quitter Helix |
| `:wq` ou `:x` | Sauvegarder et quitter |
| `:q!` | Quitter sans sauvegarder |
| `:theme sublime_text` | Changer de thème à la volée |
| `:config-reload` | Recharger la configuration Helix sans redémarrer |
