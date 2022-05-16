import {Gruppe} from './Gruppe.js'

class Shopping {
  gruppenListe = []
  aktiveGruppe = null
  meldungenAusgeben = true


  /**
   * Entfernt die Gruppe mit dem `name`
   *@para {String} name - name der zu löschen Gruppe
   */
  gruppeEntfernen(name) {
  // gruppe 'name'finden
    let loeschGruppe =this.gruppeFinden(name)
    if (loeschGruppe) {
      //wenn gefunden, dann index ermitteln
      let index = this.gruppenListe.indexOf(loeschGruppe)
        //
    }
  }
}