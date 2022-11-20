# Lab 3

Aufgabenstellung:

Setzen Sie die Software „Wordpress“ mit externer MySQL DB in 2 Containern auf. Diese Aufgabe besteht aus 2 Teilen. In den Teilen wird jeweils die gleiche Software mittels container zu Verfügung gestellt, wobei die container in Teil 2 selbst zu erstellen sind.

Teil 1

Erstellung eines Docker-Compose files welche Wordpress und MySQL images verwendet um eine Wordpress Container infrastruktur aufzusetzen.

Teil 2

Erstellung eigener Images auf basis von debian für eine Wordpress container installation. 

Beide Images benötigen persistente Volumes. Wordpress um die hochgeladene dateien und die config zu verwalten, MySQL um die datenbank persistent zu halten.  Di beiden Container sollen mittels TCP/IP kommunizieren können. Beachten sie dafür die entsprechenden Ports.

## Teil 1

Im Order Teil 1 befinded sich die docker-compose.yml Datei indem Passwort und Username festegelegt weren können.

Diese Datei kann man mit diesem Befehl ausführen:
```
docker-compose up -d
```

## Teil 2

Für den 2ten Teil werden eigene Images auf Basis von debian:jessie erstellt.

Mit dem Befeht 

```
docker-compose build 
```

kann man die Container builden um sie danach mit dem 

```
docker-compose up -d
```

wieder zu starten.

Nach dem start kann WP unter `localhost:80` erreicht werden.

## Probleme

* Allgemein wenig oder oft veraltete informationen zu dieser Aufgabenstellung
