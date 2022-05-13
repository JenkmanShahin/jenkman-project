import Gruppe from "./Gruppe.js"

class Shopping {
gruppenListe =[]
activeGruppe = null
meldungenAusgaben = true


  gruppeFinden(suchName, meldungAusgen = false ) {
    for (let gruppe of this.gruppenListe) {
      if (gruppe.name == suchName) {
        return gruppe
      }
    }
    //nichts gefunden, meldung ausgeben
    console.debug("Gruppe", suchName, "nicht gefunden")
    return null
  }

  gruppeHinzufuegen(name) {
  // gruppeFinden
  let vorhandeneGruppe = this.gruppeFinden(name)
  if (vorhandeneGruppe == null) {
    let neueGruppe = new Gruppe(name, this.gruppenListe.length)
    this.gruppenListe.push(neueGruppe)
    this.informieren("[App] Gruppe \"" + name + "\" angelegt")
    return neueGruppe
  } else {
    this.informieren("Gruppe: \"" + name + "\"  schon vorhanden")

        }
      }


  informieren(nachricht, istWarnung = false ) {
    if (this.meldungenAusgaben) {
      if (istWarnung) {
        console.debug(nachricht)
      } else {
        console.debug(nachricht)
  // Todo: Speichern
      }
  }
}
}





const App = new Shopping()
let früchte = App.gruppeHinzufuegen("Früchte")
console.debug(früchte)
let früchte2 = App.gruppeHinzufuegen("früchte")


let früchteGruppe =App.gruppeFinden("Früchte")
console.debug(früchteGruppe)

let getränkeGruppe = App.gruppeFinden("Getränke")


export default App