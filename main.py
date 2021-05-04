def bit_groesse(bit: number):
    return 2 ** bit
# Hier wird wird die Binärzahl aus einer Dezimalzahl berechnet
def berechne_binaere_zahl(zahl: number):
    global binaerzahl, rest
    binaerzahl = ""
    rest = zahl
    for aktuelles_bit in [4, 3, 2, 1, 0]:
        if rest >= bit_groesse(aktuelles_bit):
            binaerzahl = "" + binaerzahl + "1"
            rest += 0 - bit_groesse(aktuelles_bit)
        else:
            binaerzahl = "" + binaerzahl + "0"
    return binaerzahl
"""

Hier ist das Hauptprogramm mit Ein- und Ausgabe

"""
rest = 0
binaerzahl = ""
# eingabe_zahl = input("Nenne eine Zahl zwischen 0 und 31")
eingabe_zahl = game.ask_for_number("Nenne eine Zahl zwischen 0 und 31", 2)
# print("Als Binärzahl ist das: " + berechne_binaere_zahl(eingabe_zahl))
game.show_long_text("Als Binärzahl ist das: " + berechne_binaere_zahl(eingabe_zahl),
    DialogLayout.BOTTOM)