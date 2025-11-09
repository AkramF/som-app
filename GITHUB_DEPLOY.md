# 🚀 DÉPLOIEMENT AUTOMATIQUE VIA GITHUB

Ce guide vous permet de construire votre APK automatiquement via GitHub Actions, sans avoir à installer quoi que ce soit sur votre Mac.

---

## 📋 PRÉREQUIS

1. **Compte Expo** (gratuit) - https://expo.dev/signup
2. **Compte GitHub** (gratuit)
3. **Projet pushé sur GitHub**

---

## 🔧 ÉTAPE 1 : CRÉER UN TOKEN EXPO

### 1.1 Se connecter à Expo
- Allez sur https://expo.dev/login
- Connectez-vous avec votre compte

### 1.2 Créer un Access Token
1. Cliquez sur votre profil (en haut à droite)
2. Allez dans **Settings** → **Access Tokens**
3. Cliquez sur **Create Token**
4. Nom du token : `GITHUB_ACTIONS`
5. Cliquez sur **Create**
6. **IMPORTANT** : Copiez le token (il commence par `expo-...`)

⚠️ **Sauvegardez ce token quelque part, vous ne pourrez plus le revoir !**

---

## 🔐 ÉTAPE 2 : AJOUTER LE TOKEN À GITHUB

### 2.1 Aller dans les Settings de votre repo
1. Allez sur votre repo GitHub : `https://github.com/VOTRE_USERNAME/som-app`
2. Cliquez sur **Settings** (onglet en haut)
3. Dans le menu de gauche : **Secrets and variables** → **Actions**

### 2.2 Créer le secret
1. Cliquez sur **New repository secret**
2. Name : `EXPO_TOKEN`
3. Secret : Collez le token Expo copié à l'étape 1.2
4. Cliquez sur **Add secret**

---

## ⚙️ ÉTAPE 3 : CONFIGURER LE PROJET EXPO

### 3.1 Créer le projet sur Expo (une seule fois)

Sur votre Mac, dans le dossier du projet :

```bash
cd ~/SOM-APP

# Se connecter à Expo
npx expo login

# Configurer EAS
npx eas build:configure
```

Quand on vous demande le **Project ID**, copiez-le et collez-le dans `app.config.js` :

```javascript
extra: {
  eas: {
    projectId: "VOTRE_PROJECT_ID_ICI"
  }
}
```

### 3.2 Push les changements

```bash
git add .
git commit -m "Configure EAS build"
git push origin main
```

---

## 🎯 ÉTAPE 4 : LANCER LE BUILD

### Option A : Build automatique (à chaque push)
Chaque fois que vous faites un `git push origin main`, le build démarre automatiquement !

### Option B : Build manuel
1. Allez sur votre repo GitHub
2. Cliquez sur l'onglet **Actions**
3. Sélectionnez **EAS Build** dans la liste de gauche
4. Cliquez sur **Run workflow** (bouton à droite)
5. Cliquez sur le bouton vert **Run workflow**

---

## 📥 ÉTAPE 5 : RÉCUPÉRER L'APK

### 5.1 Suivre le build
1. Allez sur **Actions** dans votre repo GitHub
2. Cliquez sur le workflow en cours
3. Le build prend **10-15 minutes**

### 5.2 Télécharger l'APK
Une fois le build terminé :

**Méthode 1 : Via Expo Dashboard**
1. Allez sur https://expo.dev/
2. Cliquez sur votre projet **som-app**
3. Allez dans **Builds**
4. Cliquez sur le dernier build réussi
5. Cliquez sur **Download** pour télécharger l'APK

**Méthode 2 : Via le lien direct**
Dans les logs GitHub Actions, vous verrez un lien comme :
```
https://expo.dev/accounts/VOTRE_USERNAME/projects/som-app/builds
```

---

## 📲 ÉTAPE 6 : INSTALLER SUR LA TABLETTE

1. **Transférer l'APK** sur la tablette (via email, USB, cloud, etc.)

2. **Autoriser les sources inconnues**
   - Paramètres → Sécurité
   - Activez "Sources inconnues"

3. **Installer l'APK**
   - Ouvrez le fichier `.apk`
   - Appuyez sur "Installer"
   - Lancez l'application

---

## 🔄 MISES À JOUR FUTURES

Pour créer une nouvelle version :

1. **Modifiez votre code**

2. **Changez la version** dans `app.config.js` :
```javascript
version: '1.0.1',
android: {
  versionCode: 2
}
```

3. **Push sur GitHub** :
```bash
git add .
git commit -m "Update app to v1.0.1"
git push origin main
```

4. Le build démarre automatiquement ! ✨

---

## 🆘 RÉSOLUTION DE PROBLÈMES

### ❌ "You must provide an EXPO_TOKEN"
**Solution** : Vérifiez que vous avez bien ajouté le secret `EXPO_TOKEN` dans GitHub Settings → Secrets

### ❌ "Project not found"
**Solution** :
1. Assurez-vous d'avoir exécuté `eas build:configure` localement
2. Vérifiez que le `projectId` est correct dans `app.config.js`

### ❌ "Build failed"
**Solution** :
1. Allez dans **Actions** → Cliquez sur le build échoué
2. Lisez les logs pour identifier l'erreur
3. Corrigez le code et re-push

### ❌ "No permission to access project"
**Solution** : Le token Expo doit appartenir au propriétaire du projet

---

## ✅ CHECKLIST

- [ ] Compte Expo créé
- [ ] Token Expo créé et copié
- [ ] Secret `EXPO_TOKEN` ajouté dans GitHub
- [ ] `eas build:configure` exécuté localement
- [ ] Project ID ajouté dans `app.config.js`
- [ ] Workflow `.github/workflows/eas-build.yml` présent
- [ ] Code pushé sur GitHub
- [ ] Build lancé avec succès
- [ ] APK téléchargé
- [ ] Application installée sur la tablette

---

## 📊 AVANTAGES DE CETTE MÉTHODE

✅ **Aucune installation** sur votre Mac (sauf Node.js)
✅ **Build automatique** à chaque push
✅ **Historique complet** des builds
✅ **Pas de problèmes** de permissions
✅ **Builds reproductibles** et traçables
✅ **Collaboration facile** en équipe

---

## 🎯 COMMANDES UTILES

```bash
# Voir les builds sur Expo
npx eas build:list

# Voir les détails d'un build
npx eas build:view [BUILD_ID]

# Forcer un nouveau build depuis GitHub
# → Allez dans Actions → Run workflow
```

---

## 📞 LIENS UTILES

- **Expo Dashboard** : https://expo.dev/
- **GitHub Actions** : https://github.com/VOTRE_USERNAME/som-app/actions
- **Documentation EAS** : https://docs.expo.dev/build/introduction/
- **GitHub Actions pour Expo** : https://docs.expo.dev/build/building-on-ci/

---

**Bonne chance ! 🚀**
