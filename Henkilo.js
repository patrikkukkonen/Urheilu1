"use strict";


class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this._etunimet = etunimet;
        this._sukunimi = sukunimi;
        this._kutsumanimi = kutsumanimi;
        this._syntymavuosi = syntymavuosi;
        //console.log("Uusi henkilo luotu", this);

    }

}

class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, linkkikuvaan, omapaino, laji, saavutukset) {
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
        this._linkkikuvaan = linkkikuvaan;
        this._omapaino = omapaino + "  kg";
        this._laji = laji;
        this._saavutukset = saavutukset;
        console.log("Uusi urheilija lisatty", this);
    }
    //_linkkikuvaan
    get linkkikuvaan() {
        return this._linkkikuvaan;
    }
    set linkkikuvaan(value) {
        this._linkkikuvaan = value;
    }

    //_omapaino
    get omapaino() {
        return this._omapaino;
    }
    set omapaino(value) {
        this._omapaino = value;
    }

    //_laji
    get laji() {
        return this._laji;
    }
    set laji(value) {
        this._laji = value;
    }

    //_saavutukset
    get saavutukset() {
        return this._saavutukset;
    }
    set saavutukset(value) {
        this._saavutukset = value;
    }
}

var urheilija1 = new Urheilija("Patrik",
                            "Kukkonen",
                            "Pate",
                            "1998",
                            "https://www.instagram.com/patrikkukkonen",
                            "76",
                            "Kiipeily",
                            "6B");

var urheilija2 = new Urheilija("Matti",
                                "Meikalainen",
                                "Masa",
                                "1988",
                                "https://www.pictureofmatti.org",
                                "85",
                                "Hiihto",
                                "15 min 2km matkalla");