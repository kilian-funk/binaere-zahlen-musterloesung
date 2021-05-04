function bit_groesse (bit: number) {
    return 2 ** bit
}
// Hier wird wird die Binärzahl aus einer Dezimalzahl berechnet
function berechne_binaere_zahl (zahl: number) {
    binaerzahl = ""
    rest = zahl
    for (let aktuelles_bit of [4, 3, 2, 1, 0]) {
        if (rest >= bit_groesse(aktuelles_bit)) {
            binaerzahl = "" + binaerzahl + "1"
            rest += 0 - bit_groesse(aktuelles_bit)
        } else {
            binaerzahl = "" + binaerzahl + "0"
        }
    }
    return binaerzahl
}
/**
 * Hier ist das Hauptprogramm mit Ein- und Ausgabe
 */
let rest = 0
let binaerzahl = ""
// eingabe_zahl = input("Nenne eine Zahl zwischen 0 und 31")
let eingabe_zahl = game.askForNumber("Nenne eine Zahl zwischen 0 und 31", 2)
// print("Als Binärzahl ist das: " + berechne_binaere_zahl(eingabe_zahl))
game.showLongText("Als Binärzahl ist das: " + berechne_binaere_zahl(eingabe_zahl), DialogLayout.Bottom)
