//genre
//spieldauer
//fsk
//title

//anzahl

class Filmliste {
  liste = []

  constructor(titel) {
     this.titel= titel
  }

  filmHinzufuegen(film) {
    this.liste.push(film)
  }


  filmeHinzufuegen(filme) {
    for (let i of filme){
      this.liste.push(i)

      console.debug(i.titel, "wurde hinzugefügt")

    }

    for (let i= 0; i< filme.length; i++) {
      this.liste.push(filme[i])
    }
  }

  sortieren() {
    this.liste.sort()
  }
}

class Film {
  constructor(titel, spieldauer, fsk, genre, erscheinungsjahr, specialEdition) {
    this.titel = titel
    this.spieldauer = spieldauer
    this.fsk = fsk
    this.genre = genre
    this.erscheinungsjahr = erscheinungsjahr
    this.specialEdition =specialEdition
  }
}



let Film1 = new Film("Avatar", 162, 12, "Science-Fiction", 2009, "True")
let Film2 = new Film("dune", 155, 12, "Science Fiction",2001, "false")
let Film3 = new Film("Enemy at the gate", 130, 16, "Drama", 2001, "false")
let Film4 = new Film("Iron Man", 126, 12, "Action", 2008, "false")

let siFiListe = new Filmliste("Science-Fiction")
let siFiArray = [Film1, Film2]
siFiListe.filmeHinzufuegen(siFiArray)