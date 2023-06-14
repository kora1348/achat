import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditListService {
  TIT = [
    {
      ADVTITRE: {
        BASIQUETITRE: {
          SVM: 355952917,
          ISIN: "LU0941535816",
          STOCK: "950056",
          LABEL: "NEK PORT VERY DEF RCAP",
          PLACE: 26,
          PLACELABEL: "Fundsettle",
          REGR: 5,
          REGRLABEL: "Sicav",
          DEVISE: "EUR",
          COURS: {
            DATE: "2023-03-23",
            TIME: "16:00:00+02:00",
            VALUE: 97.59,
            HIGH: 108.01,
            LOW: 93.35,
            CLOTURE: 97.59
          }
        }
      },
      EXIST: 9,
      SECE: 41,
      SECE_LIB: "Fonds Communs - Sicav",
      PAYS: 8,
      PAYS_LIB: "Luxembourg",
      YPMAR: "C",
      CUM: "0001-01-01",
      DEVCP: "EUR",
      CPPX: 0,
      DATCPN: "0001-01-01",
      COURG: 108.01,
      DCOURG: "2021-11-18",
      COURB: 93.35,
      DCOURB: "2020-03-26",
      CODEF: 1,
      ECHEANCE: "0001-01-01",
      RADIATION: "0001-01-01",
      COTATION: "2013-06-04",
      RATING: "",
      COURUS: 0,
      BRUT: 0,
      ECH1: "0001-01-01",
      ECH2: "0001-01-01",
      ECH3: "0001-01-01",
      ECH4: "0001-01-01",
      ECH5: "0001-01-01",
      TAUX1: 0,
      TAUX2: 0,
      TAUX3: 0,
      TAUX4: 0,
      TAUX5: 0,
      HYPERLINK: "",
      INFOBOU: 9,
      HISTCOURS: 1,
      GROUPE: "026S1",
      COUPON: 9,
      WARRANT: 9,
      OPTION: 9,
      REVERSE: 9,
      RECO: 9,
      SIGNAUX: 9,
      TITARG: {
        COMPLEXITY: "N",
        CREATTIME: "2013-06-04T15:01:42.458424+02:00",
        CREATUSER: "ANNE",
        MODTIME: "2019-02-25T08:32:07.751+01:00",
        MODUSER: "HOKAR1",
        CREATMODE: "M"
      },
      AANBOD:{
        ISINAANBOD:"Y",
        RISK:"3",
        COMMENTAIRE_FR:"",
        COMMENTAIRE_NL:"",
        QTTE_TOTALE:0,
        QTTE_FAITE:0,
        QTTE_REST:0,
        QTTE_MIN:0,
        QTTE_MAX:0,
        MULTIPLE:0,
        DATEVALID_DEBUT:"2019-02-25",
        DATEVALID_FIN:"2050-12-31",
        MARKET:"",
        SIPAGENCEFLAG:"Y",
        SIPCLIENTFLAG:"N",
        SIPMINIMUM:25,
        SIPMAXIMUM:1250,
        PRIX_MARCHE:0,
        PRIX_CLIENT:0
     },
     CUT_OFF:{
     FREQUENCE_VNI:"2",
     FREQUENCE_VNI_LIB:"Une fois par semaine",
     DATE:"2023-06-20",
     TIME:"15:00:00+02:00",
     CUT_OFF_PASSED:1,
     CUT_OFF_PASSED_LIB:"Oui"
   },
   CODE_DISTR:3,
   CODE_EMETTEUR:"NEK",
   TOLO:"Y",
   TCOD8:"N",
   TCOD9:"N",
   TAUX_PRECOMPTE_MOB:0.3,
   TAUX_TOB:0.0132,
   ISSIPABLE:"Y",
   ISSIPACTIF:"Y",
   CURRENCYALLOWED:"Y",
   BUYFLAG:"0",
   SELLFLAG:"0",
   SUBSCFLAG:"1",
   REDEMFLAG:"1",
   QORN:"N",
   QUOTITY:1,
   STOPALLOW:"N",
   QTEOUMNT:3,
   ISFOND:"Y",
   KIID:{
   FILENAME:"355.952.917-F.PDF",
   URL:"https://www.amenkor.be/content/dam/amenkor/documents/investir/fonds/amenkor-portfolio/les-documents/les-documents-amenkor-portfolio-very-defensive-capitalisation.pdf",
  },
   PDF:"https://www.amenkor.be/content/dam/amenkor/documents/investir/fonds/amenkor-portfolio/fiche-d-info",
   PLN:[
    {
       CODE:"NEK01",
       PLAN:4,
       CANAL:"*",
       AV:"A",
       LIB:"Fonds amenkor 4",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:10,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
      ]
    },
    {
       CODE:"NEK01",
       PLAN:4,
       CANAL:"*",
       AV:"V",
       LIB:"Fonds amenkor 4",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
       ]
    },
    {
       CODE:"NEK03",
       PLAN:4,
       CANAL:"*",
       AV:"A",
       LIB:"Fonds amenkor 4 - Staff",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:5,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
       ]
    },
    {
       CODE:"NEK03",
       PLAN:4,
       CANAL:"*",
       AV:"V",
       LIB:"Fonds amenkor 4 - Staff",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
       ]
    }
 ]
    },


    {
      ADVTITRE: {
        BASIQUETITRE: {
          SVM: 159888888,
          ISIN: "LU0941535816",
          STOCK: "950056",
          LABEL: "NEKor",
          PLACE: 26,
          PLACELABEL: "Fundsettle",
          REGR: 5,
          REGRLABEL: "Sicav",
          DEVISE: "EUR",
          COURS: {
            DATE: "2023-03-23",
            TIME: "16:00:00+02:00",
            VALUE: 97.59,
            HIGH: 108.01,
            LOW: 93.35,
            CLOTURE: 97.59
          }
        }
      },
      EXIST: 9,
      SECE: 41,
      SECE_LIB: "Fonds Communs - Sicav",
      PAYS: 8,
      PAYS_LIB: "Luxembourg",
      YPMAR: "C",
      CUM: "0001-01-01",
      DEVCP: "EUR",
      CPPX: 0,
      DATCPN: "0001-01-01",
      COURG: 108.01,
      DCOURG: "2021-11-18",
      COURB: 93.35,
      DCOURB: "2020-03-26",
      CODEF: 1,
      ECHEANCE: "0001-01-01",
      RADIATION: "0001-01-01",
      COTATION: "2013-06-04",
      RATING: "",
      COURUS: 0,
      BRUT: 0,
      ECH1: "0001-01-01",
      ECH2: "0001-01-01",
      ECH3: "0001-01-01",
      ECH4: "0001-01-01",
      ECH5: "0001-01-01",
      TAUX1: 0,
      TAUX2: 0,
      TAUX3: 0,
      TAUX4: 0,
      TAUX5: 0,
      HYPERLINK: "",
      INFOBOU: 9,
      HISTCOURS: 1,
      GROUPE: "026S1",
      COUPON: 9,
      WARRANT: 9,
      OPTION: 9,
      REVERSE: 9,
      RECO: 9,
      SIGNAUX: 9,
      TITARG: {
        COMPLEXITY: "N",
        CREATTIME: "2013-06-04T15:01:42.458424+02:00",
        CREATUSER: "ANNE",
        MODTIME: "2019-02-25T08:32:07.751+01:00",
        MODUSER: "HOKAR1",
        CREATMODE: "M"
      },
      AANBOD:{
        ISINAANBOD:"Y",
        RISK:"3",
        COMMENTAIRE_FR:"",
        COMMENTAIRE_NL:"",
        QTTE_TOTALE:0,
        QTTE_FAITE:0,
        QTTE_REST:0,
        QTTE_MIN:0,
        QTTE_MAX:0,
        MULTIPLE:0,
        DATEVALID_DEBUT:"2019-02-25",
        DATEVALID_FIN:"2050-12-31",
        MARKET:"",
        SIPAGENCEFLAG:"Y",
        SIPCLIENTFLAG:"N",
        SIPMINIMUM:25,
        SIPMAXIMUM:1250,
        PRIX_MARCHE:0,
        PRIX_CLIENT:0
     },
     CUT_OFF:{
     FREQUENCE_VNI:"2",
     FREQUENCE_VNI_LIB:"Une fois par semaine",
     DATE:"2023-06-20",
     TIME:"15:00:00+02:00",
     CUT_OFF_PASSED:1,
     CUT_OFF_PASSED_LIB:"Oui"
   },
   CODE_DISTR:3,
   CODE_EMETTEUR:"NEK",
   TOLO:"Y",
   TCOD8:"N",
   TCOD9:"N",
   TAUX_PRECOMPTE_MOB:0.3,
   TAUX_TOB:0.0132,
   ISSIPABLE:"Y",
   ISSIPACTIF:"Y",
   CURRENCYALLOWED:"Y",
   BUYFLAG:"0",
   SELLFLAG:"0",
   SUBSCFLAG:"1",
   REDEMFLAG:"1",
   QORN:"N",
   QUOTITY:1,
   STOPALLOW:"N",
   QTEOUMNT:3,
   ISFOND:"Y",
   KIID:{
   FILENAME:"355.952.917-F.PDF",
   URL:"https://www.amenkor.be/content/dam/amenkor/documents/investir/fonds/amenkor-portfolio/les-documents/les-documents-amenkor-portfolio-very-defensive-capitalisation.pdf",
  },
   PDF:"https://www.amenkor.be/content/dam/amenkor/documents/investir/fonds/amenkor-portfolio/fiche-d-info",
   PLN:[
    {
       CODE:"NEK01",
       PLAN:4,
       CANAL:"*",
       AV:"A",
       LIB:"Fonds amenkor 4",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:10,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
      ]
    },
    {
       CODE:"NEK01",
       PLAN:4,
       CANAL:"*",
       AV:"V",
       LIB:"Fonds amenkor 4",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
       ]
    },
    {
       CODE:"NEK03",
       PLAN:4,
       CANAL:"*",
       AV:"A",
       LIB:"Fonds amenkor 4 - Staff",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:5,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
       ]
    },
    {
       CODE:"NEK03",
       PLAN:4,
       CANAL:"*",
       AV:"V",
       LIB:"Fonds amenkor 4 - Staff",
       DATEV_EFFECTIVE:"0001-01-01",
       PLAGE:[
          {
             BORNE:9999999999999.99,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:1,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:1,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          },
          {
             BORNE:0,
             FRAIS_BORDEREAU:0,
             FRAIS_RETRAIT:0,
             TYPE_COURTAGE:0,
             COURTAGE:0,
             MIN_COURTAGE:0,
             TYPE_FRAIS_ETR:0,
             FRAIS_ETRANGERS:0,
             MIN_FRAIS_ETR:0
          }
       ]
    }
 ]
    }

  ];

  constructor() {}
}
