/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten() {
    // ToDo: füge ab hier deinen Code ein
let artikelAuflisten= ["Brokkoli", "Reis", "Streukäse"]
    for (const artikel of artikelAuflisten) {
        console.debug(artikel)

    }
}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
    let gruppenListe = []
    let gemueseListe= ["Brokkoli", "Zwiebeln", "Salat"]
    let getreideListe= ["Reis", "Nudeln", "Quinoa"]
    let milchListe= ["Streukäse", "Sahne", "Joghurt"]

    gruppenListe.push(gemueseListe, getreideListe,  milchListe)

    for (let i = 0; i <= 2; i++) {
        console.debug("Gruppe", i + ":", gruppenListe[i])
    }

}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
    let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
    let gruppenListe = []

    gruppenListe.push(gemueseListe)

        console.debug("gemueseGruppe vorher:", gemueseListe)
    for (let i = 0; i <= 2; i++) {
    gemueseListe.splice(0, 1)
    }
        return (console.debug("gemueseGruppe nachher:", gemueseListe))


}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
    let gruppenListe = []
    let gemueseListe= ["Brokkoli", "Zwiebeln", "Salat"]
    let getreideListe= ["Reis", "Nudeln", "Quinoa"]
    let milchListe= ["Streukäse", "Sahne", "Joghurt"]
    gruppenListe.push(gemueseListe, getreideListe, milchListe)

    console.debug("GruppenListe vorher",gruppenListe)

    for (const gruppenListenElement of gruppenListe) {

        gruppenListenElement.sort();

    }
    gruppenListe.sort();
    console.debug("gruppenListe nachher", gruppenListe)
}
export {
    artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}