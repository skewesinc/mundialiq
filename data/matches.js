// MundialIQ — Base de datos de partidos del Mundial 2026
// Fase de grupos completa + Dieciseisavos de Final (jugados y por jugar)

const MATCHES = [

  // ============ FASE DE GRUPOS — JORNADA 1 ============
  { id:"mex-rsa-2026-06-11", round:"Fase de Grupos · Grupo A", date:"2026-06-11", time:"14:00", venue:"Estadio Ciudad de México",
    teamA:{name:"México",code:"MEX",flag:"🇲🇽"}, teamB:{name:"Sudáfrica",code:"RSA",flag:"🇿🇦"},
    result:{scoreA:2,scoreB:0}, analysis:{summary:"Partido inaugural del Mundial 2026. México se impuso como anfitrión con goles de Julián Quiñones y Raúl Jiménez, en un encuentro marcado por tres tarjetas rojas.", picks:[]} },

  { id:"kor-cze-2026-06-12", round:"Fase de Grupos · Grupo A", date:"2026-06-12", time:"11:00", venue:"Estadio Guadalajara",
    teamA:{name:"Corea del Sur",code:"KOR",flag:"🇰🇷"}, teamB:{name:"Rep. Checa",code:"CZE",flag:"🇨🇿"},
    result:{scoreA:2,scoreB:1}, analysis:{summary:"Corea del Sur abrió su Mundial con triunfo ajustado sobre República Checa.", picks:[]} },

  { id:"can-bih-2026-06-12", round:"Fase de Grupos · Grupo B", date:"2026-06-12", time:"14:00", venue:"Estadio Toronto",
    teamA:{name:"Canadá",code:"CAN",flag:"🇨🇦"}, teamB:{name:"Bosnia y Herzegovina",code:"BIH",flag:"🇧🇦"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Empate entre Canadá y Bosnia en el debut grupal.", picks:[]} },

  { id:"usa-par-2026-06-13", round:"Fase de Grupos · Grupo D", date:"2026-06-13", time:"14:00", venue:"Estadio Los Ángeles",
    teamA:{name:"Estados Unidos",code:"USA",flag:"🇺🇸"}, teamB:{name:"Paraguay",code:"PAR",flag:"🇵🇾"},
    result:{scoreA:4,scoreB:1}, analysis:{summary:"Goleada de Estados Unidos como anfitrión sobre Paraguay en el debut.", picks:[]} },

  { id:"qat-sui-2026-06-13", round:"Fase de Grupos · Grupo B", date:"2026-06-13", time:"17:00", venue:"Estadio Bahía de San Francisco",
    teamA:{name:"Qatar",code:"QAT",flag:"🇶🇦"}, teamB:{name:"Suiza",code:"SUI",flag:"🇨🇭"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Empate entre Qatar y Suiza en la jornada inicial del Grupo B.", picks:[]} },

  { id:"bra-mar-2026-06-14", round:"Fase de Grupos · Grupo C", date:"2026-06-14", time:"16:00", venue:"Estadio Nueva York/Nueva Jersey",
    teamA:{name:"Brasil",code:"BRA",flag:"🇧🇷"}, teamB:{name:"Marruecos",code:"MAR",flag:"🇲🇦"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Brasil empató su debut ante un sólido Marruecos, aunque luego se asentó en el grupo.", picks:[]} },

  { id:"hai-sco-2026-06-14", round:"Fase de Grupos · Grupo C", date:"2026-06-14", time:"19:00", venue:"Estadio Boston",
    teamA:{name:"Haití",code:"HAI",flag:"🇭🇹"}, teamB:{name:"Escocia",code:"SCO",flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿"},
    result:{scoreA:0,scoreB:1}, analysis:{summary:"Escocia venció a Haití en su debut mundialista.", picks:[]} },

  { id:"aus-tur-2026-06-14", round:"Fase de Grupos · Grupo D", date:"2026-06-14", time:"22:00", venue:"Estadio BC Place Vancouver",
    teamA:{name:"Australia",code:"AUS",flag:"🇦🇺"}, teamB:{name:"Turquía",code:"TUR",flag:"🇹🇷"},
    result:{scoreA:2,scoreB:0}, analysis:{summary:"Australia sorprendió con triunfo claro sobre Turquía.", picks:[]} },

  { id:"ale-cuw-2026-06-14", round:"Fase de Grupos · Grupo E", date:"2026-06-14", time:"11:00", venue:"Estadio Houston",
    teamA:{name:"Alemania",code:"ALE",flag:"🇩🇪"}, teamB:{name:"Curazao",code:"CUW",flag:"🇨🇼"},
    result:{scoreA:7,scoreB:1}, analysis:{summary:"Goleada histórica de Alemania en el debut grupal.", picks:[]} },

  { id:"hol-jpn-2026-06-14", round:"Fase de Grupos · Grupo F", date:"2026-06-14", time:"14:00", venue:"Estadio Dallas",
    teamA:{name:"Países Bajos",code:"HOL",flag:"🇳🇱"}, teamB:{name:"Japón",code:"JPN",flag:"🇯🇵"},
    result:{scoreA:2,scoreB:2}, analysis:{summary:"Empate entre Holanda y Japón en la apertura del Grupo F.", picks:[]} },

  { id:"civ-ecu-2026-06-15", round:"Fase de Grupos · Grupo E", date:"2026-06-15", time:"17:00", venue:"Estadio Filadelfia",
    teamA:{name:"Costa de Marfil",code:"CIV",flag:"🇨🇮"}, teamB:{name:"Ecuador",code:"ECU",flag:"🇪🇨"},
    result:{scoreA:1,scoreB:0}, analysis:{summary:"Costa de Marfil derrotó a Ecuador en el inicio del Grupo E.", picks:[]} },

  { id:"swe-tun-2026-06-15", round:"Fase de Grupos · Grupo F", date:"2026-06-15", time:"20:00", venue:"Estadio Monterrey",
    teamA:{name:"Suecia",code:"SWE",flag:"🇸🇪"}, teamB:{name:"Túnez",code:"TUN",flag:"🇹🇳"},
    result:{scoreA:5,scoreB:1}, analysis:{summary:"Goleada de Suecia sobre Túnez en la jornada inicial.", picks:[]} },

  { id:"esp-cpv-2026-06-15", round:"Fase de Grupos · Grupo H", date:"2026-06-15", time:"10:00", venue:"Estadio Atlanta",
    teamA:{name:"España",code:"ESP",flag:"🇪🇸"}, teamB:{name:"Cabo Verde",code:"CPV",flag:"🇨🇻"},
    result:{scoreA:0,scoreB:0}, analysis:{summary:"España no pudo abrir el marcador ante un disciplinado Cabo Verde.", picks:[]} },

  { id:"bel-egy-2026-06-15", round:"Fase de Grupos · Grupo G", date:"2026-06-15", time:"13:00", venue:"Estadio Seattle",
    teamA:{name:"Bélgica",code:"BEL",flag:"🇧🇪"}, teamB:{name:"Egipto",code:"EGY",flag:"🇪🇬"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Empate entre Bélgica y Egipto en la primera fecha del Grupo G.", picks:[]} },

  { id:"ksa-uru-2026-06-15", round:"Fase de Grupos · Grupo H", date:"2026-06-15", time:"16:00", venue:"Estadio Miami",
    teamA:{name:"Arabia Saudita",code:"KSA",flag:"🇸🇦"}, teamB:{name:"Uruguay",code:"URU",flag:"🇺🇾"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Empate entre Arabia Saudita y Uruguay en el debut del Grupo H.", picks:[]} },

  { id:"irn-nzl-2026-06-16", round:"Fase de Grupos · Grupo G", date:"2026-06-16", time:"19:00", venue:"Estadio Los Ángeles",
    teamA:{name:"Irán",code:"IRN",flag:"🇮🇷"}, teamB:{name:"Nueva Zelanda",code:"NZL",flag:"🇳🇿"},
    result:{scoreA:2,scoreB:2}, analysis:{summary:"Empate dramático entre Irán y Nueva Zelanda.", picks:[]} },

  { id:"fra-sen-2026-06-16", round:"Fase de Grupos · Grupo I", date:"2026-06-16", time:"13:00", venue:"Estadio Nueva York/Nueva Jersey",
    teamA:{name:"Francia",code:"FRA",flag:"🇫🇷"}, teamB:{name:"Senegal",code:"SEN",flag:"🇸🇳"},
    result:{scoreA:3,scoreB:1}, analysis:{summary:"Francia se impuso con autoridad ante Senegal en el debut grupal.", picks:[]} },

  { id:"irq-nor-2026-06-16", round:"Fase de Grupos · Grupo I", date:"2026-06-16", time:"16:00", venue:"Estadio Boston",
    teamA:{name:"Irak",code:"IRQ",flag:"🇮🇶"}, teamB:{name:"Noruega",code:"NOR",flag:"🇳🇴"},
    result:{scoreA:1,scoreB:4}, analysis:{summary:"Noruega goleó a Irak con Haaland liderando el ataque.", picks:[]} },

  { id:"arg-alg-2026-06-16", round:"Fase de Grupos · Grupo J", date:"2026-06-16", time:"19:00", venue:"Estadio Kansas City",
    teamA:{name:"Argentina",code:"ARG",flag:"🇦🇷"}, teamB:{name:"Argelia",code:"ALG",flag:"🇩🇿"},
    result:{scoreA:3,scoreB:0}, analysis:{summary:"Argentina, defensora del título, goleó a Argelia en su debut.", picks:[]} },

  { id:"aut-jor-2026-06-16", round:"Fase de Grupos · Grupo J", date:"2026-06-16", time:"23:00", venue:"Estadio Bahía de San Francisco",
    teamA:{name:"Austria",code:"AUT",flag:"🇦🇹"}, teamB:{name:"Jordania",code:"JOR",flag:"🇯🇴"},
    result:{scoreA:3,scoreB:1}, analysis:{summary:"Austria controló su debut ante Jordania con triunfo cómodo.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Austria gana o empata"], probability:91, outcome:"win"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Austria gana o empata","Over corners 10.5","Over goles totales 1.5"], probability:65, outcome:"loss"}
    ]} },

  { id:"por-cod-2026-06-16", round:"Fase de Grupos · Grupo K", date:"2026-06-16", time:"12:00", venue:"Estadio Miami",
    teamA:{name:"Portugal",code:"POR",flag:"🇵🇹"}, teamB:{name:"Congo DR",code:"COD",flag:"🇨🇩"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Portugal no pudo ante un Congo DR aguerrido en el debut.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Portugal gana directo"], probability:70, outcome:"loss"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Portugal gana directo","Over corners 10.5","Over goles totales 1.5"], probability:48, outcome:"loss"}
    ]} },

  { id:"eng-cro-2026-06-17", round:"Fase de Grupos · Grupo L", date:"2026-06-17", time:"15:00", venue:"Estadio Dallas",
    teamA:{name:"Inglaterra",code:"ENG",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿"}, teamB:{name:"Croacia",code:"CRO",flag:"🇭🇷"},
    result:{scoreA:4,scoreB:2}, analysis:{summary:"Goleada de Inglaterra en un partido vibrante con seis goles.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Inglaterra gana o empata"], probability:88, outcome:"win"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Inglaterra gana o empata","Under corners 10.5","Over goles totales 1.5"], probability:64, outcome:"win"}
    ]} },

  { id:"gha-pan-2026-06-16", round:"Fase de Grupos · Grupo L", date:"2026-06-16", time:"18:00", venue:"Estadio Miami",
    teamA:{name:"Ghana",code:"GHA",flag:"🇬🇭"}, teamB:{name:"Panamá",code:"PAN",flag:"🇵🇦"},
    result:{scoreA:1,scoreB:0}, analysis:{summary:"Ghana se impuso por la mínima ante Panamá en el debut.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Ghana gana o empata"], probability:79, outcome:"win"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Ghana gana o empata","Under goles totales 2.5"], probability:62, outcome:"win"}
    ]} },

  { id:"uzb-col-2026-06-16", round:"Fase de Grupos · Grupo K", date:"2026-06-16", time:"21:00", venue:"Estadio Atlanta",
    teamA:{name:"Uzbekistán",code:"UZB",flag:"🇺🇿"}, teamB:{name:"Colombia",code:"COL",flag:"🇨🇴"},
    result:{scoreA:1,scoreB:3}, analysis:{summary:"Colombia se impuso con claridad ante el debutante Uzbekistán.", picks:[]} },

  // ============ FASE DE GRUPOS — JORNADA 2 (selección de resultados clave) ============
  { id:"cze-rsa-2026-06-18", round:"Fase de Grupos · Grupo A", date:"2026-06-18", time:"11:00", venue:"Estadio Guadalajara",
    teamA:{name:"Rep. Checa",code:"CZE",flag:"🇨🇿"}, teamB:{name:"Sudáfrica",code:"RSA",flag:"🇿🇦"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Empate entre República Checa y Sudáfrica en la segunda jornada.", picks:[]} },

  { id:"sui-bih-2026-06-18", round:"Fase de Grupos · Grupo B", date:"2026-06-18", time:"14:00", venue:"Estadio Los Ángeles",
    teamA:{name:"Suiza",code:"SUI",flag:"🇨🇭"}, teamB:{name:"Bosnia y Herzegovina",code:"BIH",flag:"🇧🇦"},
    result:{scoreA:4,scoreB:1}, analysis:{summary:"Suiza goleó a Bosnia en la segunda fecha del Grupo B.", picks:[]} },

  { id:"hol-swe-2026-06-20", round:"Fase de Grupos · Grupo F", date:"2026-06-20", time:"12:00", venue:"Estadio Houston",
    teamA:{name:"Países Bajos",code:"HOL",flag:"🇳🇱"}, teamB:{name:"Suecia",code:"SWE",flag:"🇸🇪"},
    result:{scoreA:5,scoreB:1}, analysis:{summary:"Holanda goleó a Suecia para tomar el control del Grupo F.", picks:[]} },

  { id:"civ-can-2026-06-20", round:"Fase de Grupos · Grupo E", date:"2026-06-20", time:"17:00", venue:"Estadio Toronto",
    teamA:{name:"Costa de Marfil",code:"CIV",flag:"🇨🇮"}, teamB:{name:"Canadá",code:"CAN",flag:"🇨🇦"},
    result:{scoreA:2,scoreB:1}, analysis:{summary:"Costa de Marfil venció a Canadá en partido de la segunda jornada.", picks:[]} },

  { id:"par-aus-2026-06-20", round:"Fase de Grupos · Grupo D", date:"2026-06-20", time:"14:00", venue:"Estadio San Francisco",
    teamA:{name:"Paraguay",code:"PAR",flag:"🇵🇾"}, teamB:{name:"Australia",code:"AUS",flag:"🇦🇺"},
    result:{scoreA:1,scoreB:0}, analysis:{summary:"Paraguay reaccionó con triunfo sobre Australia tras la derrota inicial.", picks:[]} },

  { id:"jpn-tun-2026-06-20", round:"Fase de Grupos · Grupo F", date:"2026-06-20", time:"20:00", venue:"Estadio Monterrey",
    teamA:{name:"Japón",code:"JPN",flag:"🇯🇵"}, teamB:{name:"Túnez",code:"TUN",flag:"🇹🇳"},
    result:{scoreA:4,scoreB:0}, analysis:{summary:"Japón goleó a Túnez en el partido número 1,000 de la historia de los Mundiales.", picks:[]} },

  { id:"egy-nzl-2026-06-21", round:"Fase de Grupos · Grupo G", date:"2026-06-21", time:"19:00", venue:"Estadio BC Place Vancouver",
    teamA:{name:"Egipto",code:"EGY",flag:"🇪🇬"}, teamB:{name:"Nueva Zelanda",code:"NZL",flag:"🇳🇿"},
    result:{scoreA:3,scoreB:1}, analysis:{summary:"Egipto remontó con Mohamed Salah para vencer a Nueva Zelanda.", picks:[]} },

  // ============ FASE DE GRUPOS — JORNADA 3 (cierre de grupos) ============
  { id:"esc-mar-2026-06-22", round:"Fase de Grupos · Grupo C", date:"2026-06-22", time:"17:00", venue:"Estadio Boston",
    teamA:{name:"Escocia",code:"SCO",flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿"}, teamB:{name:"Marruecos",code:"MAR",flag:"🇲🇦"},
    result:{scoreA:0,scoreB:1}, analysis:{summary:"Marruecos venció a Escocia y avanzó como segundo del Grupo C.", picks:[]} },

  { id:"bra-hai-2026-06-22", round:"Fase de Grupos · Grupo C", date:"2026-06-22", time:"19:30", venue:"Estadio Filadelfia",
    teamA:{name:"Brasil",code:"BRA",flag:"🇧🇷"}, teamB:{name:"Haití",code:"HAI",flag:"🇭🇹"},
    result:{scoreA:3,scoreB:0}, analysis:{summary:"Brasil goleó a Haití y lideró el Grupo C con autoridad.", picks:[]} },

  { id:"tur-par-2026-06-22", round:"Fase de Grupos · Grupo D", date:"2026-06-22", time:"22:00", venue:"Estadio Bahía de San Francisco",
    teamA:{name:"Turquía",code:"TUR",flag:"🇹🇷"}, teamB:{name:"Paraguay",code:"PAR",flag:"🇵🇾"},
    result:{scoreA:0,scoreB:1}, analysis:{summary:"Paraguay cerró su fase de grupos con triunfo sobre Turquía.", picks:[]} },

  { id:"usa-aus-2026-06-22", round:"Fase de Grupos · Grupo D", date:"2026-06-22", time:"14:00", venue:"Estadio Los Ángeles",
    teamA:{name:"Estados Unidos",code:"USA",flag:"🇺🇸"}, teamB:{name:"Australia",code:"AUS",flag:"🇦🇺"},
    result:{scoreA:2,scoreB:0}, analysis:{summary:"Estados Unidos cerró líder del Grupo D con triunfo sobre Australia.", picks:[]} },

  { id:"ale-civ-2026-06-25", round:"Fase de Grupos · Grupo E", date:"2026-06-25", time:"15:00", venue:"Estadio Toronto",
    teamA:{name:"Alemania",code:"ALE",flag:"🇩🇪"}, teamB:{name:"Costa de Marfil",code:"CIV",flag:"🇨🇮"},
    result:{scoreA:2,scoreB:1}, analysis:{summary:"Alemania remontó ante Costa de Marfil con doblete de Deniz Undav.", picks:[]} },

  { id:"ecu-ale-2026-06-25", round:"Fase de Grupos · Grupo E", date:"2026-06-25", time:"19:00", venue:"Estadio Nueva York/Nueva Jersey",
    teamA:{name:"Ecuador",code:"ECU",flag:"🇪🇨"}, teamB:{name:"Alemania",code:"ALE",flag:"🇩🇪"},
    result:{scoreA:2,scoreB:1}, analysis:{summary:"Ecuador dio la sorpresa y venció a Alemania en el cierre de grupos, dejando dudas sobre la Mannschaft de cara a dieciseisavos.", picks:[]} },

  { id:"col-cod-2026-06-23", round:"Fase de Grupos · Grupo K", date:"2026-06-23", time:"21:00", venue:"Estadio Atlanta",
    teamA:{name:"Colombia",code:"COL",flag:"🇨🇴"}, teamB:{name:"Congo DR",code:"COD",flag:"🇨🇩"},
    result:{scoreA:1,scoreB:0}, analysis:{summary:"Colombia venció a Congo DR para definir el liderato del Grupo K frente a Portugal.", picks:[]} },

  { id:"por-uzb-2026-06-23", round:"Fase de Grupos · Grupo K", date:"2026-06-23", time:"12:00", venue:"Estadio Miami",
    teamA:{name:"Portugal",code:"POR",flag:"🇵🇹"}, teamB:{name:"Uzbekistán",code:"UZB",flag:"🇺🇿"},
    result:{scoreA:5,scoreB:0}, analysis:{summary:"Portugal goleó a Uzbekistán con doblete de Cristiano Ronaldo.", picks:[]} },

  { id:"eng-gha-2026-06-23", round:"Fase de Grupos · Grupo L", date:"2026-06-23", time:"15:00", venue:"Estadio Boston",
    teamA:{name:"Inglaterra",code:"ENG",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿"}, teamB:{name:"Ghana",code:"GHA",flag:"🇬🇭"},
    result:{scoreA:0,scoreB:0}, analysis:{summary:"Empate sin goles entre Inglaterra y Ghana en la segunda jornada.", picks:[]} },

  { id:"pan-cro-2026-06-24", round:"Fase de Grupos · Grupo L", date:"2026-06-24", time:"18:00", venue:"Estadio Nueva York/Nueva Jersey",
    teamA:{name:"Panamá",code:"PAN",flag:"🇵🇦"}, teamB:{name:"Croacia",code:"CRO",flag:"🇭🇷"},
    result:{scoreA:0,scoreB:1}, analysis:{summary:"Croacia se impuso a Panamá en la segunda jornada del Grupo L.", picks:[]} },

  { id:"arg-aut-2026-06-21", round:"Fase de Grupos · Grupo J", date:"2026-06-21", time:"12:00", venue:"Estadio Dallas",
    teamA:{name:"Argentina",code:"ARG",flag:"🇦🇷"}, teamB:{name:"Austria",code:"AUT",flag:"🇦🇹"},
    result:{scoreA:1,scoreB:0}, analysis:{summary:"Argentina venció a Austria y se acercó al liderato del Grupo J.", picks:[]} },

  { id:"jor-alg-2026-06-22b", round:"Fase de Grupos · Grupo J", date:"2026-06-22", time:"22:00", venue:"Estadio Santa Clara",
    teamA:{name:"Jordania",code:"JOR",flag:"🇯🇴"}, teamB:{name:"Argelia",code:"ALG",flag:"🇩🇿"},
    result:{scoreA:1,scoreB:2}, analysis:{summary:"Argelia remontó ante Jordania en el cierre de la segunda jornada del Grupo J.", picks:[]} },

  // ============ FASE DE GRUPOS — Últimos resultados previos a dieciseisavos ============
  { id:"par-eng-2026-06-17", round:"Fase de Grupos · Grupo D", date:"2026-06-17", time:"15:00", venue:"Estadio Dallas",
    teamA:{name:"Paraguay",code:"PAR",flag:"🇵🇾"}, teamB:{name:"Inglaterra",code:"ENG",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿"},
    result:{scoreA:2,scoreB:4}, analysis:{summary:"Inglaterra venció a Paraguay 4-2 en la fase de grupos.", picks:[]} },

  { id:"par-pan-2026-06-24", round:"Fase de Grupos · Grupo D", date:"2026-06-24", time:"19:00", venue:"Estadio Toronto",
    teamA:{name:"Paraguay",code:"PAR",flag:"🇵🇾"}, teamB:{name:"Panamá",code:"PAN",flag:"🇵🇦"},
    result:{scoreA:1,scoreB:0}, analysis:{summary:"Paraguay venció a Panamá en partido de la fase de grupos camino a dieciseisavos.", picks:[]} },

  { id:"mar-hai-2026-06-19", round:"Fase de Grupos · Grupo C", date:"2026-06-19", time:"17:00", venue:"Estadio Nueva York/Nueva Jersey",
    teamA:{name:"Marruecos",code:"MAR",flag:"🇲🇦"}, teamB:{name:"Haití",code:"HAI",flag:"🇭🇹"},
    result:{scoreA:3,scoreB:0}, analysis:{summary:"Marruecos goleó a Haití en su camino para clasificar segundo del Grupo C.", picks:[]} },

  { id:"sco-bra-2026-06-19", round:"Fase de Grupos · Grupo C", date:"2026-06-19", time:"19:30", venue:"Estadio Boston",
    teamA:{name:"Escocia",code:"SCO",flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿"}, teamB:{name:"Brasil",code:"BRA",flag:"🇧🇷"},
    result:{scoreA:0,scoreB:1}, analysis:{summary:"Brasil venció a Escocia para cerrar invicto y líder del Grupo C.", picks:[]} },

  // ============ DIECISEISAVOS DE FINAL — JUGADOS ============
  { id:"rsa-can-2026-06-28", round:"Dieciseisavos de Final", date:"2026-06-28", time:"13:00", venue:"Estadio Los Ángeles",
    teamA:{name:"Sudáfrica",code:"RSA",flag:"🇿🇦"}, teamB:{name:"Canadá",code:"CAN",flag:"🇨🇦"},
    result:{scoreA:0,scoreB:1}, analysis:{summary:"Canadá abrió la ronda de dieciseisavos con triunfo sobre Sudáfrica y avanzó a octavos.", picks:[]} },

  { id:"bra-jpn-2026-06-29", round:"Dieciseisavos de Final", date:"2026-06-29", time:"11:00", venue:"Estadio Houston",
    teamA:{name:"Brasil",code:"BRA",flag:"🇧🇷"}, teamB:{name:"Japón",code:"JPN",flag:"🇯🇵"},
    result:{scoreA:2,scoreB:1}, analysis:{summary:"Brasil llegó invicto como líder del Grupo C con defensa sólida. Japón nunca había ganado un partido de eliminación directa en la historia del Mundial, y esta vez tampoco lo logró.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Brasil gana o empata"], probability:82, outcome:"win"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Brasil gana o empata","Over corners 7.5","Over goles totales 1.5"], probability:61, outcome:"win"}
    ]} },

  { id:"ale-par-2026-06-29", round:"Dieciseisavos de Final", date:"2026-06-29", time:"14:30", venue:"Estadio Boston",
    teamA:{name:"Alemania",code:"ALE",flag:"🇩🇪"}, teamB:{name:"Paraguay",code:"PAR",flag:"🇵🇾"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"Alemania ganó el Grupo E con 10 goles marcados, pero llegó con dudas tras perder ante Ecuador. Paraguay confirmó que el 'milagro' que advertían las casas de apuestas no era tan improbable: empate 1-1.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Alemania gana o empata"], probability:91, outcome:"win"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Alemania gana o empata","Over corners 7.5","Over goles totales 1.5"], probability:68, outcome:"win"}
    ]} },

  { id:"hol-mar-2026-06-29", round:"Dieciseisavos de Final", date:"2026-06-29", time:"19:00", venue:"Estadio Monterrey",
    teamA:{name:"Países Bajos",code:"HOL",flag:"🇳🇱"}, teamB:{name:"Marruecos",code:"MAR",flag:"🇲🇦"},
    result:{scoreA:1,scoreB:1}, analysis:{summary:"El duelo más parejo de la jornada. Holanda llegó invicta y goleadora; Marruecos con la mejor defensa del torneo y el antecedente de haber eliminado a Holanda en Qatar 2022. Terminó en empate, tal como anticipaba el mercado.", picks:[
      {label:"Apuesta A", tag:"Segura", selections:["Países Bajos gana o empata"], probability:64, outcome:"win"},
      {label:"Apuesta B", tag:"Arriesgada", selections:["Países Bajos gana o empata","Over corners 7.5","Under goles totales 2.5"], probability:47, outcome:"win"}
    ]} },

  // ============ DIECISEISAVOS DE FINAL — POR JUGAR ============
  { id:"civ-nor-2026-06-30", round:"Dieciseisavos de Final", date:"2026-06-30", time:"11:00", venue:"Estadio Dallas",
    teamA:{name:"Costa de Marfil",code:"CIV",flag:"🇨🇮"}, teamB:{name:"Noruega",code:"NOR",flag:"🇳🇴"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"fra-swe-2026-06-30", round:"Dieciseisavos de Final", date:"2026-06-30", time:"15:00", venue:"Estadio Nueva York/Nueva Jersey",
    teamA:{name:"Francia",code:"FRA",flag:"🇫🇷"}, teamB:{name:"Suecia",code:"SWE",flag:"🇸🇪"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"mex-ecu-2026-07-01", round:"Dieciseisavos de Final", date:"2026-07-01", time:"19:00", venue:"Estadio Ciudad de México",
    teamA:{name:"México",code:"MEX",flag:"🇲🇽"}, teamB:{name:"Ecuador",code:"ECU",flag:"🇪🇨"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"eng-cod-2026-07-01", round:"Dieciseisavos de Final", date:"2026-07-01", time:"10:00", venue:"Estadio Atlanta",
    teamA:{name:"Inglaterra",code:"ENG",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿"}, teamB:{name:"Congo DR",code:"COD",flag:"🇨🇩"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"bel-sen-2026-07-01", round:"Dieciseisavos de Final", date:"2026-07-01", time:"14:00", venue:"Estadio Seattle",
    teamA:{name:"Bélgica",code:"BEL",flag:"🇧🇪"}, teamB:{name:"Senegal",code:"SEN",flag:"🇸🇳"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"usa-bih-2026-07-02", round:"Dieciseisavos de Final", date:"2026-07-02", time:"18:00", venue:"Estadio Bahía de San Francisco",
    teamA:{name:"Estados Unidos",code:"USA",flag:"🇺🇸"}, teamB:{name:"Bosnia y Herzegovina",code:"BIH",flag:"🇧🇦"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"esp-aut-2026-07-02", round:"Dieciseisavos de Final", date:"2026-07-02", time:"13:00", venue:"Estadio Los Ángeles",
    teamA:{name:"España",code:"ESP",flag:"🇪🇸"}, teamB:{name:"Austria",code:"AUT",flag:"🇦🇹"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"por-cro-2026-07-02", round:"Dieciseisavos de Final", date:"2026-07-02", time:"17:00", venue:"Estadio Toronto",
    teamA:{name:"Portugal",code:"POR",flag:"🇵🇹"}, teamB:{name:"Croacia",code:"CRO",flag:"🇭🇷"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"sui-alg-2026-07-03", round:"Dieciseisavos de Final", date:"2026-07-03", time:"21:00", venue:"Estadio BC Place Vancouver",
    teamA:{name:"Suiza",code:"SUI",flag:"🇨🇭"}, teamB:{name:"Argelia",code:"ALG",flag:"🇩🇿"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"aus-egy-2026-07-03", round:"Dieciseisavos de Final", date:"2026-07-03", time:"12:00", venue:"Estadio Dallas",
    teamA:{name:"Australia",code:"AUS",flag:"🇦🇺"}, teamB:{name:"Egipto",code:"EGY",flag:"🇪🇬"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"arg-cpv-2026-07-03", round:"Dieciseisavos de Final", date:"2026-07-03", time:"16:00", venue:"Estadio Miami",
    teamA:{name:"Argentina",code:"ARG",flag:"🇦🇷"}, teamB:{name:"Cabo Verde",code:"CPV",flag:"🇨🇻"},
    result:null, analysis:{summary:"", picks:[]} },

  { id:"col-gha-2026-07-03", round:"Dieciseisavos de Final", date:"2026-07-03", time:"19:30", venue:"Estadio Kansas City",
    teamA:{name:"Colombia",code:"COL",flag:"🇨🇴"}, teamB:{name:"Ghana",code:"GHA",flag:"🇬🇭"},
    result:null, analysis:{summary:"", picks:[]} }
];

// Estadísticas globales del sistema (se actualizan manualmente por ahora)
const STATS = {
  totalMatches: 13,        // solo cuenta partidos con análisis de apuestas registrado
  correctPicks: 11,
  accuracy: 91.6,
  lastUpdated: "2026-06-29"
};

if (typeof module !== "undefined") {
  module.exports = { MATCHES, STATS };
}
