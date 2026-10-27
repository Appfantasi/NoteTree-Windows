NOTE TREE - VERSIONE WINDOWS

Questa cartella contiene la versione desktop di Note Tree.

FUNZIONI
- Organizzazione ad albero di voci e note.
- Collegamenti tra note: nell'editor usa "🔗 Collega nota", scegli un numero dalla lista.
- È ancora disponibile il formato [[Titolo nota]].
- I collegamenti inversi "Collegato da" appaiono quando una nota è aperta.
- Collegamento e apertura di file locali (PDF, Word, immagini ecc.).
- Tema chiaro/scuro, ricerca, importazione/esportazione JSON e Markdown.

COME OTTENERE L'EXE SENZA INSTALLARE STRUMENTI SUL PC
1. Carica questi file in un repository GitHub (nella cartella principale).
2. Apri la scheda Actions del repository.
3. Seleziona "Build Note Tree for Windows".
4. Premi "Run workflow" (se non appare, prima fai un commit dei file).
5. Attendi che il lavoro sia verde.
6. Apri il risultato e scarica l'artefatto "Note-Tree-Windows".
7. Estrai lo ZIP scaricato: dentro trovi Note-Tree-Windows-1.0.0.exe.

NOTA SUI DATI
Le note sono salvate nel profilo locale dell'app. Esporta periodicamente un backup JSON:
i dati locali non vengono automaticamente trasferiti da un browser a questa app desktop.

Per avviare una compilazione locale (facoltativo), installa Node.js 22, poi esegui:
npm install
npm run dist:win
