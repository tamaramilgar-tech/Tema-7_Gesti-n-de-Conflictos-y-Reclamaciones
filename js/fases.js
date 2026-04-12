export const fases = [
  {
    id: 0,
    titulo: 'Fase previa · Mapa conceptual',
    resumen: 'Descarga, completa y entrega en EVAGD el mapa conceptual del tema.',
    teoria: [
      'Antes de comenzar el tema, conviene identificar los grandes bloques: satisfacción del cliente, protección de derechos, reclamación, gestión empresarial de reclamaciones, reclamación presencial y resolución de conflictos.',
      'El mapa conceptual sirve para anticipar relaciones entre conceptos y ayudarte a organizar la información antes del estudio detallado.'
    ],
    practica: [
      'Descarga el mapa conceptual del tema con espacios incompletos.',
      'Complétalo a mano o en digital.',
      'Sube la evidencia al EVAGD y solicita al docente el código de verificación para desbloquear la siguiente fase.'
    ],
    recursoDescargable: {
      texto: 'Descargar mapa conceptual del tema',
      url: 'assets/mapa_conceptual_tema7.svg'
    },
    test: [
      {
        pregunta: '¿Cuál es la finalidad principal de un mapa conceptual de inicio en un tema profesional?',
        opciones: [
          'Sustituir por completo el estudio teórico posterior porque permite responder sin necesidad de leer ni relacionar conceptos.',
          'Organizar visualmente los conceptos esenciales, anticipar relaciones entre bloques y facilitar una comprensión estructurada del contenido.',
          'Limitar el aprendizaje a definiciones muy breves para evitar que el alumnado tenga que desarrollar razonamientos más complejos.',
          'Reducir la materia a ejemplos aislados sin conexión entre los procedimientos, derechos y fases del tratamiento de reclamaciones.'
        ],
        correcta: 1
      }
    ]
  },
  {
    id: 1,
    titulo: 'Fase 1 · Satisfacción del cliente',
    resumen: 'Comprende la relación entre expectativas, experiencia y fidelización.',
    teoria: [
      'La satisfacción del cliente depende del contraste entre las expectativas previas y la experiencia de uso o atención recibida.',
      'La excelencia se alcanza cuando la experiencia supera las expectativas, lo que incrementa la fidelización y mejora la imagen de la empresa.',
      'La empresa debe favorecer la expresión de la satisfacción o la insatisfacción mediante encuestas, atención proactiva, redes sociales, página web, correo electrónico y buzones de sugerencias.'
    ],
    practica: [
      'Analiza un caso real o verosímil de atención al cliente en el que la experiencia haya sido satisfactoria o insatisfactoria.',
      'Explica qué expectativas tenía el cliente, qué elementos de la experiencia fueron decisivos y qué mejoras propondrías para elevar el nivel de satisfacción.',
      'Redacta una breve propuesta de mejora para el servicio de atención al cliente y súbela al EVAGD.'
    ],
    test: [
      {
        pregunta: '¿Qué situación describe mejor una experiencia excelente de cliente?',
        opciones: [
          'La empresa cumple únicamente con los requisitos mínimos del servicio sin generar una percepción diferenciada respecto a sus competidores.',
          'La experiencia recibida iguala exactamente lo esperado por el cliente, de manera que no aparece ni satisfacción ni insatisfacción relevante.',
          'La experiencia de uso y de atención supera las expectativas previas del cliente, generando una percepción positiva que favorece la fidelización.',
          'La empresa reduce al máximo la interacción con el cliente para evitar que se produzcan opiniones negativas sobre el servicio recibido.'
        ],
        correcta: 2
      },
      {
        pregunta: '¿Qué utilidad tienen para la empresa las opiniones negativas bien gestionadas?',
        opciones: [
          'Ninguna, porque una reclamación o queja siempre es un obstáculo que perjudica la imagen y conviene neutralizar rápidamente.',
          'Aportan información valiosa para detectar fallos, revisar procedimientos y desarrollar procesos de mejora continua orientados al cliente.',
          'Solo son útiles cuando proceden de clientes muy rentables, ya que el resto de observaciones no aportan datos estratégicos relevantes.',
          'Sirven principalmente para justificar sanciones internas al personal sin necesidad de analizar el funcionamiento general del servicio.'
        ],
        correcta: 1
      }
    ]
  },
  {
    id: 2,
    titulo: 'Fase 2 · Protección de los derechos del consumidor',
    resumen: 'Identifica derechos básicos, deberes y marco legal de protección.',
    teoria: [
      'La protección de los consumidores se apoya en la Constitución, la normativa estatal y las disposiciones autonómicas y locales.',
      'Entre los derechos básicos figuran la protección de la salud y la seguridad, la protección de los intereses económicos, la información, la educación en consumo y la representación a través de asociaciones.',
      'El consumidor también tiene deberes: actuar de buena fe, cumplir los compromisos de la compraventa y seguir las instrucciones de uso cuando resulten relevantes para la garantía.'
    ],
    practica: [
      'Selecciona un supuesto en el que una persona consumidora vea afectados sus derechos en una compraventa o prestación de servicios.',
      'Indica qué derecho o derechos se han vulnerado, qué norma o principio justificaría su protección y qué actuación debería emprender el consumidor.',
      'Entrega tu resolución argumentada en EVAGD.'
    ],
    test: [
      {
        pregunta: '¿Cuál de las siguientes afirmaciones se ajusta mejor al concepto legal de consumidor?',
        opciones: [
          'Es cualquier persona física o jurídica que adquiere bienes o servicios con independencia del uso posterior que vaya a darles en su actividad profesional.',
          'Es la persona física o jurídica que actúa en un ámbito ajeno a una actividad empresarial o profesional y utiliza el bien o servicio como destinataria final.',
          'Es exclusivamente la persona física que compra productos para su uso privado, quedando excluidas las personas jurídicas en todos los supuestos.',
          'Es toda persona que paga por un bien o servicio, aunque lo incorpore de forma directa a un proceso de producción o de comercialización a terceros.'
        ],
        correcta: 1
      },
      {
        pregunta: '¿Cuál de estas opciones refleja un derecho básico de las personas consumidoras?',
        opciones: [
          'Renunciar libremente a la garantía legal del producto a cambio de obtener un descuento aplicado por el establecimiento vendedor.',
          'Exigir que cualquier conflicto de consumo se resuelva exclusivamente por la vía judicial sin posibilidad de mediación o arbitraje.',
          'Ser protegidas frente a prácticas comerciales desleales y cláusulas abusivas que afecten a sus legítimos intereses económicos y sociales.',
          'Modificar unilateralmente las condiciones de la compraventa una vez formalizada, aunque la empresa haya cumplido de forma correcta.'
        ],
        correcta: 2
      }
    ]
  },
  {
    id: 3,
    titulo: 'Fase 3 · Departamento de Atención al Cliente',
    resumen: 'Valora la función estratégica del departamento de atención al cliente.',
    teoria: [
      'El departamento de atención al cliente canaliza información esencial para detectar incidencias, proponer mejoras y reforzar la relación con la clientela.',
      'Su utilidad no se limita a responder quejas: también recoge sugerencias, mide satisfacción, orienta a la clientela y aporta información clave para decisiones empresariales.',
      'Una atención proactiva, visible y accesible mejora la percepción del servicio y facilita la prevención de conflictos.'
    ],
    practica: [
      'Diseña un pequeño protocolo de actuación para un departamento de atención al cliente de una empresa ficticia.',
      'Incluye canales de contacto, tratamiento de sugerencias, seguimiento de incidencias y uso de la información para la mejora del servicio.',
      'Sube al EVAGD tu propuesta explicando por qué sería útil para la empresa.'
    ],
    test: [
      {
        pregunta: '¿Por qué se considera estratégico el departamento de atención al cliente dentro de una empresa?',
        opciones: [
          'Porque sustituye al resto de departamentos y concentra todas las decisiones operativas y comerciales de la organización.',
          'Porque aporta información directa del contacto con el cliente, detecta incidencias y favorece procesos de mejora del producto, del servicio y de la atención.',
          'Porque su misión principal es reducir el número de reclamaciones impidiendo que el cliente acceda con facilidad a los canales de contacto.',
          'Porque permite delegar en una sola persona la responsabilidad absoluta sobre la satisfacción del cliente sin implicar a otras áreas de la empresa.'
        ],
        correcta: 1
      }
    ]
  },
  {
    id: 4,
    titulo: 'Fase 4 · El consumidor y la administración',
    resumen: 'Conoce los organismos públicos y las vías institucionales de protección.',
    teoria: [
      'Las administraciones públicas desarrollan normas y organismos para proteger a consumidores y usuarios en los ámbitos comunitario, nacional, autonómico y local.',
      'Entre las instituciones relevantes se encuentran el Centro Europeo del Consumidor, las Direcciones Generales de Consumo y las OMIC.',
      'La persona consumidora puede acudir a estos organismos cuando necesite información, mediación, tramitación de reclamaciones o tutela de sus derechos.'
    ],
    practica: [
      'Investiga qué organismo público de tu entorno sería competente para orientar a un consumidor en un conflicto de consumo habitual.',
      'Compara la función de una OMIC con la de una Dirección General de Consumo o con un organismo de ámbito europeo.',
      'Sube al EVAGD una ficha-resumen en la que expliques cuándo acudirías a cada uno.'
    ],
    test: [
      {
        pregunta: '¿Qué caracteriza mejor el papel de una OMIC en materia de consumo?',
        opciones: [
          'Es un órgano judicial local encargado de imponer sanciones penales cuando una empresa incumple la normativa de atención al cliente.',
          'Es una oficina municipal de información al consumidor que orienta, informa y puede canalizar reclamaciones dentro del ámbito local.',
          'Es una entidad privada financiada por empresas para resolver de forma vinculante los conflictos entre comercio y clientela.',
          'Es un servicio interno de cada establecimiento comercial que actúa como sustituto de la hoja oficial de reclamaciones.'
        ],
        correcta: 1
      }
    ]
  },
  {
    id: 5,
    titulo: 'Fase 5 · Reclamación',
    resumen: 'Aprende a redactar, fundamentar y presentar correctamente una reclamación.',
    teoria: [
      'La reclamación es un documento escrito mediante el cual el cliente expresa su insatisfacción y solicita la restitución o compensación que considere procedente.',
      'Debe cumplimentarse con claridad, sin dejar campos en blanco, indicando hechos, fecha, hora, pruebas y solicitud concreta.',
      'Puede presentarse en el establecimiento, ante la administración, por registro o con ayuda de asociaciones de consumidores.'
    ],
    practica: [
      'Redacta el contenido esencial de una hoja de reclamaciones para un caso de devolución o garantía en el que la empresa no haya actuado correctamente.',
      'Incluye datos identificativos, exposición de hechos, solicitud y pruebas o documentos adjuntos.',
      'Entrega el documento en EVAGD con redacción formal y precisa.'
    ],
    test: [
      {
        pregunta: '¿Qué implica la firma de una hoja de reclamaciones por parte del establecimiento?',
        opciones: [
          'Que el establecimiento reconoce automáticamente como ciertos todos los hechos descritos por la persona reclamante y acepta su pretensión.',
          'Que el establecimiento confirma la recepción de la reclamación, aunque ello no suponga estar conforme con el contenido expuesto por el cliente.',
          'Que el establecimiento renuncia a aportar pruebas o alegaciones posteriores durante la tramitación administrativa de la reclamación.',
          'Que el establecimiento se obliga de manera inmediata a indemnizar al cliente en los términos exactos recogidos en la hoja presentada.'
        ],
        correcta: 1
      },
      {
        pregunta: '¿Cuál de estas recomendaciones es adecuada al cumplimentar una reclamación?',
        opciones: [
          'Redactarla de forma genérica para no comprometer la futura estrategia del reclamante y evitar concretar hechos o pruebas documentales.',
          'Dejar algunos campos pendientes hasta que la administración valore el caso y complete la información relevante por su cuenta.',
          'Exponer con claridad los hechos, aportar pruebas si existen y formular una solicitud proporcionada al daño o incumplimiento sufrido.',
          'Evitar toda referencia temporal concreta porque la fecha y la hora de los hechos suelen ser datos secundarios sin valor probatorio.'
        ],
        correcta: 2
      }
    ]
  },
  {
    id: 6,
    titulo: 'Fase 6 · Gestión empresarial de reclamaciones',
    resumen: 'Aplica principios, procedimiento y mejora continua en la gestión interna.',
    teoria: [
      'La gestión empresarial de reclamaciones debe regirse por principios como visibilidad, accesibilidad, respuesta diligente, gratuidad, objetividad, confidencialidad, enfoque al cliente, responsabilidad y mejora continua.',
      'Un procedimiento adecuado incluye información, recepción, acuse de recibo, seguimiento, evaluación inicial, investigación, resolución, comunicación y cierre.',
      'La calidad del sistema exige clasificar reclamaciones, medir satisfacción, auditar procesos y revisar periódicamente la eficacia del tratamiento.'
    ],
    practica: [
      'Elabora un procedimiento interno para gestionar una reclamación en una empresa de servicios.',
      'Debes incluir recepción, registro, acuse de recibo, investigación, resolución y cierre, así como medidas para evitar que el problema se repita.',
      'Sube el procedimiento al EVAGD y justifica qué principios de calidad aplicas en cada fase.'
    ],
    test: [
      {
        pregunta: '¿Qué principio se incumple si un servicio telefónico de reclamaciones obliga al cliente a utilizar una línea de pago?',
        opciones: [
          'Se incumple el principio de gratuidad, ya que el acceso al proceso de tratamiento de reclamaciones no debe suponer un coste añadido para el reclamante.',
          'Se incumple únicamente el principio de objetividad, puesto que el coste de la llamada determina por sí solo el resultado final del expediente.',
          'Se incumple el principio de confidencialidad porque la tarificación especial impide proteger los datos personales del usuario durante la llamada.',
          'Se incumple el principio de mejora continua porque todo servicio de pago está necesariamente desactualizado desde el punto de vista organizativo.'
        ],
        correcta: 0
      },
      {
        pregunta: '¿Qué actuación encaja mejor con la mejora continua del sistema de reclamaciones?',
        opciones: [
          'Cerrar los expedientes con rapidez sin analizar patrones de repetición para evitar aumentar la carga administrativa del departamento.',
          'Clasificar y analizar reclamaciones para detectar problemas recurrentes, revisar el proceso y corregir causas de fondo en la organización.',
          'Reservar el análisis de reclamaciones únicamente para casos con amenaza de sanción administrativa o de repercusión mediática elevada.',
          'Confiar exclusivamente en la experiencia subjetiva del responsable del departamento sin necesidad de indicadores, registros ni auditorías.'
        ],
        correcta: 1
      }
    ]
  },
  {
    id: 7,
    titulo: 'Fase 7 · Reclamación presencial',
    resumen: 'Entrena habilidades de comunicación y actuación presencial ante un cliente insatisfecho.',
    teoria: [
      'En la atención presencial es esencial evitar discusiones innecesarias, escuchar sin interrumpir, resumir con otras palabras lo expresado por el reclamante y cuidar tanto el lenguaje verbal como el no verbal.',
      'Se debe ayudar al cliente a identificar el motivo real de su insatisfacción, mantener actitud positiva, pedir disculpas cuando proceda y no prometer nada que no pueda cumplirse.',
      'Si el cliente está equivocado, la explicación debe darse con paciencia y con datos objetivos y contrastables.'
    ],
    practica: [
      'Prepara una evidencia en formato vídeo o audio con al menos dos personajes: un cliente y una persona representante de la empresa.',
      'Representa una reclamación presencial completa, mostrando escucha activa, empatía, reformulación del problema y propuesta de solución o de seguimiento.',
      'Sube la grabación al EVAGD y solicita al docente el código de validación para continuar.'
    ],
    test: [
      {
        pregunta: '¿Qué actuación es más adecuada al atender presencialmente a un cliente muy alterado?',
        opciones: [
          'Contradecir de inmediato los aspectos exagerados de su relato para recuperar el control de la interacción y evitar que eleve el tono.',
          'Escuchar sin interrumpir, resumir sus argumentos con otras palabras y reconducir la conversación hacia la identificación del problema y la posible solución.',
          'Defender la actuación empresarial desde el primer momento para mostrar seguridad y evitar que el cliente interprete la escucha como una admisión de culpa.',
          'Cerrar la conversación cuanto antes remitiendo al cliente exclusivamente a una reclamación escrita, sin ofrecer ninguna atención personal adicional.'
        ],
        correcta: 1
      }
    ]
  },
  {
    id: 8,
    titulo: 'Fase 8 · El conflicto en el ámbito empresarial',
    resumen: 'Analiza estilos, fases y técnicas para resolver conflictos y negociar.',
    teoria: [
      'El conflicto surge cuando dos o más personas perciben incompatibilidad entre necesidades, intereses o valores.',
      'Su resolución suele pasar por fases de aparición, desarrollo, planteamiento de alternativas y acuerdo o compromiso.',
      'Existen distintos estilos de afrontamiento: integrador o colaborativo, complaciente, dominante, evasivo y comprometido. Además, pueden emplearse técnicas como negociación, mediación y arbitraje.'
    ],
    practica: [
      'Prepara una evidencia en formato vídeo o audio con al menos dos personajes que representen un conflicto en el ámbito empresarial.',
      'Debes mostrar el origen del conflicto, el intercambio de posiciones, la búsqueda de alternativas y un intento de acuerdo mediante negociación.',
      'Sube el producto al EVAGD y pide la validación docente para cerrar el itinerario.'
    ],
    test: [
      {
        pregunta: '¿Qué rasgo define mejor el estilo dominante de resolución de conflictos?',
        opciones: [
          'Da prioridad a preservar la relación incluso a costa de renunciar de forma sistemática a los objetivos propios del negociador.',
          'Evita intervenir de manera activa y prefiere aplazar el conflicto sin plantear alternativas ni contrastar intereses de fondo.',
          'Busca imponerse y vencer en el conflicto, mostrando alto interés por los propios objetivos y escaso interés por los ajenos.',
          'Persigue necesariamente una solución equilibrada y cooperativa en la que ambas partes ganen mediante concesiones mutuas equivalentes.'
        ],
        correcta: 2
      },
      {
        pregunta: '¿Qué secuencia refleja mejor un proceso razonable de resolución de conflictos?',
        opciones: [
          'Imposición inicial, renuncia de una de las partes, cierre rápido y archivo del conflicto sin revisión de compromisos.',
          'Identificación del conflicto, definición de intereses, generación de alternativas y confirmación de acuerdos o compromisos.',
          'Aplazamiento del problema, derivación automática a la vía judicial y comunicación unilateral de la solución más conveniente para la empresa.',
          'Intercambio improvisado de reproches, decisión del interlocutor con mayor autoridad y aceptación pasiva por la parte menos favorecida.'
        ],
        correcta: 1
      }
    ]
  }
];
