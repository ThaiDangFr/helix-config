# Helix Configuration & Sublime Text Theme

Ce dépôt contient la configuration pour l'éditeur [Helix](https://helix-editor.com/), incluant le thème **Sublime Text** ainsi que des règles de personnalisation de l'éditeur.

## 🚀 Installation et Activation

### 1. Répertoire de configuration Helix

Assurez-vous que le répertoire de configuration de Helix existe sur votre système :

- **Linux / macOS** : `~/.config/helix/`
- **Windows** : `%AppData%\helix\`

Pour créer la structure nécessaire sous Linux/macOS :

```bash
mkdir -p ~/.config/helix/themes
```

### 2. Installer le thème `sublime_text`

Copiez le fichier de thème `sublime_text.toml` dans le dossier `themes` de votre installation Helix :

```bash
cp themes/sublime_text.toml ~/.config/helix/themes/
```

### 3. Appliquer le fichier de configuration

Copiez le fichier `config.toml` vers votre dossier de configuration Helix :

```bash
cp config.toml ~/.config/helix/config.toml
```

Le fichier `config.toml` contient l'activation du thème et la désactivation de l'autocomplétion automatique des paires de caractères (`"`, `(`, `[`, `{`) :

```toml
theme = "sublime_text"

[editor]
auto-pairs = false
```

## ⚙️ Réglages inclus

- **Thème Sublime Text** (`theme = "sublime_text"`) : Applique le thème personnalisé Sublime Text.
- **Gestion manuelle des paires** (`auto-pairs = false`) : Désactive la fermeture automatique des guillemets, parenthèses et crochets lors de la saisie.

## 📖 Cheat Sheet

Retrouvez la liste complète des raccourcis essentiels (modes, sélection, suppression, copier-coller, presse-papiers système, multi-curseurs) dans [cheatsheet.md](file:///home/thai/checkout/helix-config/cheatsheet.md).
