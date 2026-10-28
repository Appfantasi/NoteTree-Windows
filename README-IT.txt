NOTE TREE — PACCHETTO DI COMPILAZIONE WINDOWS + ANDROID

Contenuti:
- NoteTree.html: versione aggiornata con più alberi e cartelle.
- main.js e preload.js: avvio desktop Electron.
- package.json: dipendenze e configurazione per eseguibile portatile e installer Windows.
- capacitor.config.json: configurazione dell'app Android.
- .github/workflows/windows.yml: genera EXE portatile e installer Windows.
- .github/workflows/android.yml: genera APK Android debug.

IMPORTANTE
1. Conserva una copia del repository attuale prima di sostituire i file.
2. I workflow vanno collocati esattamente in .github/workflows/.
3. Su GitHub, carica NoteTree.html nella radice del repository sostituendo il file esistente.
4. Aggiorna package.json e aggiungi capacitor.config.json.
5. Aggiorna .github/workflows/windows.yml e crea .github/workflows/android.yml.
6. Dopo il commit, apri Actions e attendi che entrambe le compilazioni finiscano.
7. Apri il run verde, vai ad Artifacts e scarica Note-Tree-Windows oppure Note-Tree-Android-APK.

L'APK generato è una build debug per installazione e test personale, non un pacchetto firmato per Google Play.
