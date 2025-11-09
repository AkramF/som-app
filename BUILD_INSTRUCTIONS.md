# 📱 GUIDE COMPLET DE DÉPLOIEMENT - SPECIAL OLYMPICS MOROCCO

## 🎯 PRÉREQUIS

1. **Compte Expo** (gratuit)
2. **Node.js** installé sur votre ordinateur
3. **Connexion Internet** stable

---

## 📋 ÉTAPE 1 : INSTALLER EAS CLI

Ouvrez votre terminal et exécutez :

```bash
npm install -g eas-cli
```

---

## 🔐 ÉTAPE 2 : SE CONNECTER À EXPO

```bash
npx expo login
```

Si vous n'avez pas de compte :
```bash
npx expo register
```

Suivez les instructions pour créer votre compte gratuit.

---

## ⚙️ ÉTAPE 3 : CONFIGURER LE PROJET

Dans le dossier du projet, exécutez :

```bash
eas build:configure
```

Cette commande va :
- Créer un fichier `eas.json` (déjà fait)
- Créer votre projet sur les serveurs Expo
- Vous donner un **Project ID**

**IMPORTANT** : Copiez le Project ID qui s'affiche et collez-le dans `app.config.js` à la place de `'your-project-id-here'`

---

## 🏗️ ÉTAPE 4 : CRÉER LE BUILD APK

### Option A : Build de Test (Recommandé pour commencer)

```bash
eas build --profile preview --platform android
```

### Option B : Build de Production

```bash
eas build --profile production --platform android
```

**Ce qui va se passer :**
1. Le code sera envoyé aux serveurs Expo
2. Le build commencera (environ 10-15 minutes)
3. Vous verrez la progression dans le terminal
4. Un lien de téléchargement sera généré

---

## 📥 ÉTAPE 5 : TÉLÉCHARGER LE APK

Une fois le build terminé :

1. Un lien apparaîtra dans le terminal (exemple: `https://expo.dev/artifacts/...`)
2. **Copiez ce lien**
3. Ouvrez-le sur votre tablette Android
4. Téléchargez le fichier `.apk`

---

## 📲 ÉTAPE 6 : INSTALLER SUR LA TABLETTE

### Sur la tablette Android :

1. **Autoriser les sources inconnues**
   - Paramètres → Sécurité
   - Activez "Sources inconnues" ou "Installer des applications inconnues"

2. **Localiser le fichier APK**
   - Ouvrez l'application "Fichiers" ou "Téléchargements"
   - Trouvez le fichier `som-app-xxx.apk`

3. **Installer**
   - Appuyez sur le fichier
   - Appuyez sur "Installer"
   - Attendez la fin de l'installation
   - Appuyez sur "Ouvrir"

---

## 🎉 ÉTAPE 7 : LANCER L'APPLICATION

L'icône "Special Olympics Morocco" apparaîtra sur l'écran d'accueil.

Appuyez dessus pour lancer l'application !

---

## 🔄 MISES À JOUR FUTURES

Pour créer une nouvelle version :

1. Modifiez le code
2. Changez le numéro de version dans `app.config.js` :
   ```js
   version: '1.0.1',
   versionCode: 2,
   ```
3. Relancez `eas build --profile production --platform android`
4. Téléchargez et installez le nouveau APK

---

## 🆘 RÉSOLUTION DE PROBLÈMES

### Problème : "Build failed"
**Solution** : Vérifiez que tous les fichiers sont corrects et relancez le build

### Problème : "L'application ne s'installe pas"
**Solution** :
- Vérifiez que les sources inconnues sont autorisées
- Supprimez l'ancienne version avant d'installer la nouvelle

### Problème : "PDFs ne s'affichent pas"
**Solution** : Les PDFs sont intégrés dans l'APK, ils devraient fonctionner hors ligne

---

## 📞 COMMANDES UTILES

```bash
# Voir l'état de vos builds
eas build:list

# Voir les détails d'un build spécifique
eas build:view [BUILD_ID]

# Annuler un build en cours
eas build:cancel

# Voir les informations du projet
eas project:info
```

---

## ✅ CHECKLIST FINALE

- [ ] Compte Expo créé
- [ ] EAS CLI installé
- [ ] Projet configuré avec `eas build:configure`
- [ ] Project ID ajouté dans `app.config.js`
- [ ] Build APK créé avec succès
- [ ] APK téléchargé sur la tablette
- [ ] Application installée et testée
- [ ] Les deux PDFs s'ouvrent correctement

---

## 🎯 CARACTÉRISTIQUES DE L'APPLICATION

✅ Mode paysage verrouillé (parfait pour tablette 10.1")
✅ Deux boutons : PROGRAMME et PRÉSENTATION
✅ Lecteur PDF intégré
✅ Thème Special Olympics Morocco
✅ Fonctionne hors ligne
✅ Pas besoin de connexion Internet après installation

---

## 📧 SUPPORT

En cas de problème, consultez :
- Documentation Expo : https://docs.expo.dev/
- Forum Expo : https://forums.expo.dev/

**Bonne chance avec votre déploiement ! 🚀**
