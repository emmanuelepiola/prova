## Workflow di Sviluppo con Git e GitHub

Seguire questo workflow per gestire efficacemente il codice e le Pull Requests su GitHub.

### 1. Assicurati che il branch `dev` sia aggiornato:
```bash
git checkout dev  # Passa al branch dev
git pull origin dev  # Aggiorna il branch dev con le ultime modifiche da GitHub
```

### 2. Crea un nuovo branch per la feature:
```bash
git checkout -b feature/nome-feature  # Crea e passa al branch della feature
```

### 3. Lavora sulla tua feature:
Effettua tutte le modifiche necessarie alla tua feature.

### 4. Aggiungi le modifiche e fai il commit:
```bash
git add .  # Aggiungi tutte le modifiche
git commit -m "Aggiunta funzionalità XYZ"  # Fai il commit con un messaggio descrittivo
```

### 5. Spingi il branch remoto su GitHub:
```bash
git push origin feature/nome-feature  # Pusha il branch della feature su GitHub
```

### 6. Crea una Pull Request su GitHub:
- Vai su GitHub e trova il tuo repository.
- Clicca su "Pull requests" e poi su "New pull request".
- Seleziona come **base** `dev` e come **branch da unire** `feature/nome-feature`.
- Clicca su **Create pull request** per creare la PR.
- Dopo la revisione, se tutto va bene, clicca su **Merge pull request**.
- Conferma il merge con **Confirm merge** per aggiungere le modifiche alla branch `dev`.

### 7. Aggiorna il tuo branch `dev` localmente dopo il merge:
```bash
git checkout dev  # Torna al branch dev
git pull origin dev  # Aggiorna il tuo dev locale con i cambiamenti appena mergiati
```

### 8. (Opzionale) Elimina il branch della feature:
Dopo aver completato il merge, puoi rimuovere il branch della feature sia localmente che su GitHub:
- **Localmente:**
```bash
git branch -d feature/nome-feature  # Elimina il branch localmente
```
- **Da GitHub:**
```bash
git push origin --delete feature/nome-feature  # Elimina il branch remoto su GitHub
```

### Considerazioni Aggiuntive:
- **Pull Request**: Quando crei una PR, descrivi bene i cambiamenti che hai fatto, per facilitare la revisione del codice.
- **Merge**: Su GitHub, se ci sono conflitti durante il merge, GitHub ti guiderà nel processo di risoluzione dei conflitti. Puoi risolverli prima di fare il merge definitivo.
- **Eliminazione del Branch**: Dopo il merge, è buona pratica eliminare il branch della feature, per evitare di mantenere troppo "disordine" nel repository.
