/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const pizza = {
  title: "Pizza",
  belag: ["Käse", "Tunfisch", "Paprika", "Champignon"],
  skala:  10,
  gerneIsst: true,
}
  console.debug(pizza)
  console.debug(pizza.belag[1])

}


/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ghibli = {
    name: "Studio Ghibli",
    gruendung: 1985,
    medium: "Anime",
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein
  console.debug(Object.keys(ghibli))
  console.debug(Object.values(ghibli))
  console.debug(Object.entries(ghibli))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  const kuenstler = {
    vorname: "Denezel",
    nachname: "Washington",
    geboren: "28. December, 1954",
    gestorben: "Am Leben",
    taetigkeit: "Schauspieler",
    lieblingsWerk: "The Book of Eli",
    quote: "Goals on the road to achievement cannot be achieved without discipline and consistency"
  }
  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
  console.debug(kuenstler)
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()
