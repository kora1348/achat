export interface TotoResponse {
  TIT: Tit[];
}

export interface Tit {
  ADVTITRE: {
    BASIQUETITRE: {
      SVM: number;
      ISIN: string;
      STOCK: string;
      LABEL: string;
      PLACE: number;
      PLACELABEL: string;
      REGR: number;
      REGRLABEL: string;
      DEVISE: string;
      COURS: {
        DATE: string;
        TIME: string;
        VALUE: number;
        HIGH: number;
        LOW: number;
        CLOTURE: number;
      };
    };
  };
  EXIST: number;
  SECE: number;
  SECE_LIB: string;
  PAYS: number;
  PAYS_LIB: string;
  YPMAR: string;
  CUM: string;
  DEVCP: string;
  CPPX: number;
  DATCPN: string;
  COURG: number;
  DCOURG: string;
  COURB: number;
  DCOURB: string;
  CODEF: number;
  ECHEANCE: string;
  RADIATION: string;
  COTATION: string;
  RATING: string;
  COURUS: number;
  BRUT: number;
  ECH1: string;
  ECH2: string;
  ECH3: string;
  ECH4: string;
  ECH5: string;
  TAUX1: number;
  TAUX2: number;
  TAUX3: number;
  TAUX4: number;
  TAUX5: number;
  HYPERLINK: string;
  INFOBOU: number;
  HISTCOURS: number;
  GROUPE: string;
  COUPON: number;
  WARRANT: number;
  OPTION: number;
  REVERSE: number;
  RECO: number;
  SIGNAUX: number;
  TITARG: {
    COMPLEXITY: string;
    CREATTIME: string;
    CREATUSER: string;
    MODTIME: string;
    MODUSER: string;
    CREATMODE: string;
  };
  AANBOD:{
    ISINAANBOD: string;
    RISK:string;
    COMMENTAIRE_FR:string;
    COMMENTAIRE_NL:string;
    QTTE_TOTALE:number;
    QTTE_FAITE:number;
    QTTE_REST:number;
    QTTE_MIN:number;
    QTTE_MAX:number;
    MULTIPLE:number;
    DATEVALID_DEBUT:string;
    DATEVALID_FIN:string;
    MARKET:string;
    SIPAGENCEFLAG:string;
    SIPCLIENTFLAG:string;
    SIPMINIMUM:number;
    SIPMAXIMUM:number;
    PRIX_MARCHE:number;
    PRIX_CLIENT:number;
 },
 CUT_OFF:{
  FREQUENCE_VNI:string;
  FREQUENCE_VNI_LIB:string;
  DATE:string;
  TIME:string;
  CUT_OFF_PASSED:number;
  CUT_OFF_PASSED_LIB:string;
},
   CODE_DISTR:number;
   CODE_EMETTEUR:string;
   TOLO:string;
   TCOD8:string;
   TCOD9:string;
   TAUX_PRECOMPTE_MOB:number;
   TAUX_TOB:number;
   ISSIPABLE:string;
   ISSIPACTIF:string;
   CURRENCYALLOWED:string;
   BUYFLAG:string;
   SELLFLAG:string;
   SUBSCFLAG:string;
   REDEMFLAG:string;
   QORN:string;
   QUOTITY:number;
   STOPALLOW:string;
   QTEOUMNT:number;
   ISFOND:string;
   KIID:{
    FILENAME:string;
    URL:string;
   },
    PDF:string;
    PLN: {
      CODE: string;
      PLAN: number;
      CANAL: string;
      AV: string;
      LIB: string;
      DATEV_EFFECTIVE: string;
      PLAGE: {
        BORNE: number;
        FRAIS_BORDEREAU: number;
        FRAIS_RETRAIT: number;
        TYPE_COURTAGE: number;
        COURTAGE: number;
        MIN_COURTAGE: number;
        TYPE_FRAIS_ETR: number;
        FRAIS_ETRANGERS: number;
        MIN_FRAIS_ETR: number;
      }[];
    }[];
  }
 
  
  
  
  
  
  
  
    


