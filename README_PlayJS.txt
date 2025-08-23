
Idra · Pacchetto Play.js (iPad/iPhone)
=====================================

Contenuto:
- index.html               -> App offline (inventario, pick list, ordini, stock)
- sw.js                    -> Service Worker per uso offline
- manifest.webmanifest     -> PWA manifest (per installare come app)
- sample_inventory.csv     -> Template CSV per importare da Excel
- server.js                -> Mini server statico per Play.js (porta 3000)

Uso con Play.js
---------------
1) Copia questa cartella su iPad (iCloud Drive o AirDrop) e aprila in Play.js.
2) In Play.js apri `server.js` e premi "Run".
3) Apri Safari su iPad e vai a: http://localhost:3000
4) Condividi -> "Aggiungi alla schermata Home" per installarla come app.
5) Da ora funziona anche offline.

Note
----
- Per aggiornare i file, sostituiscili in Play.js e ricarica la pagina.
- Fai backup periodico esportando le liste CSV.
