(function () {
  const PHASES = [
    {
      id: 'fase0',
      shortTitle: 'Mapa conceptual',
      title: 'Práctica inicial · Elabora y completa el mapa conceptual del tema',
      intro:
        'Organiza las relaciones entre satisfacción del cliente, derechos del consumidor, atención al cliente, administración pública, reclamaciones, gestión empresarial, reclamación presencial y conflicto en el ámbito empresarial.',
      theory: [
        'La unidad conecta satisfacción del cliente, exteriorización de la insatisfacción y reclamación formal.',
        'También relaciona protección jurídica, organismos públicos, procedimientos de gestión y resolución del conflicto.',
        'Conviene que el mapa muestre relaciones de causa-efecto, canales de actuación y secuencia procedimental.'
      ],
      rubric: [
        'Incluye los 8 grandes bloques del tema.',
        'Muestra al menos 10 relaciones entre conceptos.',
        'Diferencia entre satisfacción, queja, sugerencia y reclamación.',
        'Introduce al menos 3 organismos o vías de actuación pública o privada.'
      ],
      practicePrompt:
        'Redacta tu mapa conceptual en formato textual. Puedes usar flechas, niveles, listas jerárquicas o una explicación estructurada. Ejemplo: “Satisfacción del cliente → si no se alcanza → exteriorización de la insatisfacción → queja / sugerencia / reclamación…”.',
      minLength: 260,
      test: [
        {
          question: '¿Qué característica convierte un esquema en un buen mapa conceptual del tema?',
          options: [
            'Que enumere únicamente los títulos de los apartados del tema sin establecer relaciones entre ellos, para evitar interpretaciones subjetivas.',
            'Que conecte conceptos mediante relaciones significativas, distinguiendo procesos, derechos, organismos y actuaciones posibles del consumidor y de la empresa.',
            'Que se limite a resumir la normativa de consumo y deje fuera las fases de gestión de reclamaciones para no mezclar contenidos.',
            'Que presente solo definiciones literales del manual, incluso aunque no se vea cómo se pasa de un conflicto a una reclamación o a una negociación.'
          ],
          correct: 1,
          explanation: 'El mapa conceptual debe mostrar vínculos entre ideas, no solo una lista de apartados.'
        },
        {
          question: 'En la lógica del tema, ¿qué secuencia es la más coherente?',
          options: [
            'Insatisfacción del cliente → posible queja, sugerencia o reclamación → tratamiento empresarial o administrativo → resolución del conflicto.',
            'Negociación comercial → satisfacción del cliente → derechos del consumidor → desaparición automática de cualquier reclamación.',
            'Protección del consumidor → certificado del curso → conflicto interpersonal → encuesta de satisfacción.',
            'Reclamación presencial → publicidad del producto → mapa conceptual → fidelización inmediata del cliente.'
          ],
          correct: 0,
          explanation: 'El tema avanza desde la experiencia del cliente hasta la gestión y resolución del conflicto.'
        },
        {
          question: '¿Qué elemento NO debería faltar en un mapa conceptual completo de esta unidad?',
          options: [
            'La conexión entre reclamación y canales de presentación ante empresa, administración o asociaciones de consumidores.',
            'La explicación de que todos los conflictos se resuelven siempre con sanción administrativa, sin intervención empresarial previa.',
            'Una lista cerrada de definiciones sin jerarquía, para que el alumnado memorice contenidos de forma aislada.',
            'La idea de que el departamento de atención al cliente solo sirve para vender y no para recoger incidencias o retroalimentación.'
          ],
          correct: 0,
          explanation: 'La reclamación se articula a través de varios canales y eso forma parte del núcleo del tema.'
        },
        {
          question: '¿Por qué esta práctica inicial tiene sentido antes de las 8 fases?',
          options: [
            'Porque obliga al estudiante a visualizar la estructura general del tema y a anticipar cómo se conectan teoría, práctica y procedimiento.',
            'Porque sustituye por completo el estudio posterior y hace innecesaria la lectura de los contenidos de cada fase.',
            'Porque su única finalidad es decorar la web con una actividad creativa, sin función didáctica real.',
            'Porque sirve exclusivamente para comprobar si el alumnado domina herramientas de diseño gráfico y no contenidos jurídicos o comerciales.'
          ],
          correct: 0,
          explanation: 'La práctica inicial ayuda a construir una visión global antes de profundizar fase a fase.'
        },
        {
          question: '¿Cuál sería la relación conceptual más precisa entre conflicto y reclamación?',
          options: [
            'Toda reclamación es una técnica de arbitraje y, por tanto, solo existe cuando la administración impone una solución vinculante.',
            'La reclamación es una posible vía formal para canalizar un conflicto o una insatisfacción cuando el cliente solicita restitución o respuesta.',
            'El conflicto y la reclamación son sinónimos perfectos, de manera que siempre deben usarse indistintamente.',
            'La reclamación solo aparece cuando la empresa reconoce por escrito su culpa antes de que el consumidor actúe.'
          ],
          correct: 1,
          explanation: 'La reclamación es una vía formal de gestión del conflicto, no el conflicto en sí mismo.'
        }
      ]
    },
    {
      id: 'fase1',
      shortTitle: 'Satisfacción del cliente',
      title: 'Fase 1 · Satisfacción del cliente',
      intro:
        'Analiza la relación entre expectativas, experiencia de uso, experiencia de atención y fidelización.',
      theory: [
        'La satisfacción depende de las expectativas previas y de la experiencia real de uso o de atención.',
        'La excelencia aparece cuando la experiencia supera las expectativas y favorece la fidelización.',
        'La insatisfacción puede exteriorizarse mediante sugerencia, queja, reclamación o incluso difusión a terceros.'
      ],
      rubric: [
        'Diferencia con precisión entre queja, sugerencia y reclamación.',
        'Explica por qué la falta de opiniones no siempre es una buena noticia para la empresa.',
        'Relaciona satisfacción, excelencia y fidelización con un ejemplo razonado.'
      ],
      practicePrompt:
        'Caso práctico: una cadena de supermercados detecta que casi no recibe opiniones de su clientela y concluye que su servicio es excelente. Redacta un informe breve en el que valores esa conclusión, diferencies queja, sugerencia y reclamación con ejemplos propios y propongas al menos cuatro mecanismos para recoger la satisfacción del cliente.',
      minLength: 320,
      test: [
        {
          question: '¿Cuál es la interpretación más adecuada cuando una empresa apenas recibe opiniones de sus clientes?',
          options: [
            'Siempre significa que el servicio es excelente, porque el silencio del cliente prueba que no existen fallos ni oportunidades de mejora.',
            'Puede indicar falta de canales de expresión o baja implicación del cliente, lo que reduce información útil para mejorar productos y procedimientos.',
            'Supone que las reclamaciones se están resolviendo automáticamente por la administración pública sin necesidad de intervención empresarial.',
            'Demuestra que el departamento de atención al cliente puede centrarse exclusivamente en tareas comerciales sin escuchar incidencias.'
          ],
          correct: 1,
          explanation: 'La ausencia de opiniones limita la mejora continua y no prueba por sí sola la satisfacción.'
        },
        {
          question: '¿Qué opción define mejor la diferencia entre sugerencia y reclamación?',
          options: [
            'La sugerencia persigue normalmente una mejora o propuesta, mientras que la reclamación formula una petición formal de restitución o respuesta ante un perjuicio.',
            'La sugerencia siempre exige compensación económica y la reclamación solo expresa una opinión general sobre el servicio recibido.',
            'La sugerencia debe presentarse ante la OMIC y la reclamación únicamente por redes sociales para que quede constancia pública.',
            'La sugerencia y la reclamación son categorías equivalentes, pero la segunda utiliza un lenguaje más severo.'
          ],
          correct: 0,
          explanation: 'La reclamación tiene un carácter formal y suele pedir una reparación o restitución.'
        },
        {
          question: '¿Qué relación es correcta entre excelencia y fidelización?',
          options: [
            'La excelencia surge cuando la experiencia real iguala exactamente las expectativas mínimas y eso elimina toda necesidad de seguimiento.',
            'La excelencia consiste en reducir costes de atención aunque el cliente perciba un servicio estándar, porque así aumenta el margen comercial.',
            'La excelencia implica superar expectativas razonables del cliente y eso puede fortalecer de forma decisiva la fidelización.',
            'La fidelización depende solo del precio, por lo que la calidad de la experiencia de uso o de atención es secundaria.'
          ],
          correct: 2,
          explanation: 'Superar expectativas de forma consistente incrementa la probabilidad de fidelización.'
        },
        {
          question: '¿Cuál de los siguientes canales es coherente con una política activa de recogida de satisfacción?',
          options: [
            'Reducir al mínimo el contacto con clientes para evitar mensajes contradictorios y trabajar únicamente con datos internos de ventas.',
            'Combinar encuestas, personal de atención, web, correo electrónico, redes sociales gestionadas y buzones de sugerencias.',
            'Esperar a que la administración autonómica comunique las incidencias para decidir si la empresa debe escuchar al cliente.',
            'Limitar las opiniones a formularios trimestrales sin posibilidad de comentarios abiertos ni trazabilidad posterior.'
          ],
          correct: 1,
          explanation: 'El tema destaca una estrategia multicanal para canalizar opiniones y reclamaciones.'
        },
        {
          question: '¿Qué afirmación describe mejor una queja?',
          options: [
            'Una manifestación formal escrita mediante la que el consumidor solicita siempre indemnización por daños y perjuicios cuantificados.',
            'Una expresión de descontento que puede trasladarse a la empresa para denunciar una experiencia negativa, aunque no incluya una solicitud formal de restitución.',
            'Una propuesta de mejora voluntaria que nunca hace referencia a molestias, errores o insatisfacciones ya producidas.',
            'Una resolución administrativa dictada tras analizar el incumplimiento de la normativa de consumo por parte de la empresa.'
          ],
          correct: 1,
          explanation: 'La queja manifiesta insatisfacción, pero no equivale necesariamente a una reclamación formal.'
        }
      ]
    },
    {
      id: 'fase2',
      shortTitle: 'Derechos del consumidor',
      title: 'Fase 2 · Protección de los derechos del consumidor',
      intro:
        'Examina el marco de protección del consumidor, sus derechos básicos y algunos supuestos frecuentes de garantía y cláusulas abusivas.',
      theory: [
        'La normativa protege salud, seguridad, información, intereses económicos y participación a través de asociaciones de consumidores.',
        'Consumidor, usuario y cliente no son exactamente lo mismo; el destinatario final es la clave jurídica.',
        'Una cláusula abusiva es nula de pleno derecho y la garantía no puede ser renunciada a cambio de descuento.'
      ],
      rubric: [
        'Distingue consumidor, usuario y cliente con criterio jurídico-comercial.',
        'Aplica correctamente derechos básicos y garantía legal.',
        'Argumenta por qué una cláusula abusiva carece de eficacia para el consumidor.'
      ],
      practicePrompt:
        'Caso práctico: una tienda ofrece un descuento adicional a quienes acepten por escrito renunciar a la garantía de un producto reacondicionado. Además, el contrato incluye una cláusula por la que el consumidor renuncia a reclamar judicial o administrativamente. Explica si ambas prácticas son válidas, diferencia consumidor, usuario y cliente en este caso y señala qué derechos se ven afectados.',
      minLength: 330,
      test: [
        {
          question: '¿Cuándo puede actuar una empresa como consumidora a efectos legales?',
          options: [
            'Cuando adquiere un bien o servicio como destinataria final para satisfacer una necesidad propia ajena a la reventa, fabricación o prestación a terceros.',
            'Cuando compra mercancía para integrarla inmediatamente en su actividad comercial, porque toda compraventa empresarial genera automáticamente consumo.',
            'Cuando utiliza cualquier adquisición para fines profesionales, aunque el bien se incorpore al proceso productivo o al circuito de intermediación.',
            'Cuando el bien adquirido tiene un precio inferior a un determinado umbral económico fijado por la empresa vendedora.'
          ],
          correct: 0,
          explanation: 'La condición de consumidor depende de actuar fuera del ámbito empresarial o profesional como destinatario final.'
        },
        {
          question: '¿Qué efecto produce una cláusula abusiva incorporada a un contrato con consumidores?',
          options: [
            'Queda plenamente válida si el consumidor la firmó, porque la firma siempre presume consentimiento informado y elimina cualquier impugnación posterior.',
            'Se considera nula de pleno derecho y el contrato subsiste en lo demás si puede mantenerse sin esa cláusula.',
            'Solo puede dejarse sin efecto si una asociación de consumidores la impugna colectivamente en nombre de todos los clientes afectados.',
            'Produce únicamente una reducción del plazo de garantía, pero no afecta al resto de derechos económicos del consumidor.'
          ],
          correct: 1,
          explanation: 'La nulidad de la cláusula abusiva opera aunque el consumidor la haya firmado.'
        },
        {
          question: 'Respecto a la garantía legal, ¿qué afirmación es correcta?',
          options: [
            'La empresa puede ofrecer un descuento si el cliente renuncia voluntariamente a la garantía, siempre que lo haga por escrito y con dos testigos.',
            'La garantía legal puede modularse libremente en función de campañas comerciales si el producto está rebajado o reacondicionado.',
            'No es válido imponer al consumidor la renuncia a la garantía como condición para obtener un mejor precio.',
            'La garantía solo ampara a quien paga el producto y nunca al usuario final que lo recibe como regalo.'
          ],
          correct: 2,
          explanation: 'La renuncia a la garantía como condición contractual no es admisible.'
        },
        {
          question: 'Si una persona recibe un portátil de regalo y deja de funcionar a los tres meses, ¿quién puede reclamar?',
          options: [
            'Solo quien aparece en el ticket, porque la protección de consumo no alcanza al usuario efectivo del bien recibido.',
            'Nadie, ya que al tratarse de un regalo desaparece el vínculo con la compraventa original y no existe legitimación para exigir reparación.',
            'El usuario del portátil puede reclamar directamente como destinatario final del bien, aunque no lo haya pagado personalmente.',
            'Únicamente la administración de consumo, previa denuncia formal y apertura de expediente sancionador.'
          ],
          correct: 2,
          explanation: 'El usuario final puede reclamar la reparación del bien.'
        },
        {
          question: '¿Cuál de estos derechos básicos aparece claramente en la normativa de consumo?',
          options: [
            'El derecho del empresario a decidir unilateralmente qué información esencial omite en la venta cuando la competencia también la omite.',
            'El derecho a ser informado y educado para un adecuado uso, consumo o disfrute de bienes y servicios.',
            'El derecho del consumidor a ignorar las instrucciones de uso sin que eso afecte nunca a la cobertura de la garantía.',
            'El derecho a sustituir siempre la hoja de reclamaciones por mensajes verbales informales sin dejar ninguna constancia documental.'
          ],
          correct: 1,
          explanation: 'La información adecuada y suficiente es uno de los derechos básicos del consumidor.'
        }
      ]
    },
    {
      id: 'fase3',
      shortTitle: 'Atención al Cliente',
      title: 'Fase 3 · Departamento de Atención al Cliente',
      intro:
        'Valora la utilidad estratégica del departamento de atención al cliente y los requisitos mínimos de un servicio accesible, gratuito y eficaz.',
      theory: [
        'El departamento de atención al cliente es fuente directa de información para la mejora del producto, del servicio y de los procedimientos.',
        'La atención debe ser visible, accesible y orientada a la resolución, no solo a la imagen comercial de la empresa.',
        'La Ley de Servicios de Atención al Cliente refuerza gratuidad, accesibilidad, trazabilidad y tiempos razonables de respuesta.'
      ],
      rubric: [
        'Explica el valor informativo y estratégico del departamento.',
        'Identifica incumplimientos de gratuidad, accesibilidad o información al cliente.',
        'Propone medidas concretas de mejora del servicio.'
      ],
      practicePrompt:
        'Caso práctico: una compañía de suministros básicos mantiene un teléfono de atención que deriva a números de pago, no informa del estado de las reclamaciones y tarda semanas en asignar un número de referencia. Elabora un diagnóstico del servicio de atención al cliente, indica qué principios se incumplen y plantea cinco mejoras operativas viables.',
      minLength: 340,
      test: [
        {
          question: '¿Por qué el departamento de atención al cliente tiene valor estratégico para la empresa?',
          options: [
            'Porque sustituye al departamento financiero en la fijación de precios y elimina la necesidad de analizar la experiencia del cliente.',
            'Porque concentra información directa sobre incidencias, expectativas y percepciones, útil para procesos de mejora continua del bien o servicio.',
            'Porque su función principal es frenar reclamaciones para que no se transformen en expedientes administrativos, aunque no se resuelvan.',
            'Porque permite que el resto de áreas se desentiendan por completo de la calidad del producto o del servicio comercializado.'
          ],
          correct: 1,
          explanation: 'La información de atención al cliente alimenta la mejora del servicio y la toma de decisiones.'
        },
        {
          question: '¿Qué práctica contradice el principio de gratuidad en la atención al cliente?',
          options: [
            'Ofrecer atención por varios canales y generar un identificador único para cada consulta o reclamación.',
            'Derivar desde un teléfono gratuito a otro de pago para continuar la gestión del expediente del consumidor.',
            'Enviar al cliente confirmación del recibo de su reclamación por correo electrónico o SMS.',
            'Informar del estado del expediente a través de un área privada de seguimiento accesible con contraseña.'
          ],
          correct: 1,
          explanation: 'No se puede obligar al cliente a continuar la atención por un canal de pago.'
        },
        {
          question: 'En relación con personas con discapacidad auditiva, ¿qué sería una medida adecuada?',
          options: [
            'Mantener solo el canal telefónico tradicional, ya que incorporar mensajería escrita supondría un privilegio no exigible.',
            'Exigir atención presencial obligatoria para evitar duplicidad de canales y un exceso de costes organizativos.',
            'Complementar el canal telefónico con sistemas alternativos de mensajería escrita instantánea o equivalentes accesibles.',
            'Delegar la atención de estos supuestos exclusivamente en asociaciones de consumidores y no en el servicio propio de la empresa.'
          ],
          correct: 2,
          explanation: 'La accesibilidad exige canales alternativos adecuados.'
        },
        {
          question: '¿Qué indicador refleja mejor una atención trazable y profesional?',
          options: [
            'Cada incidencia cuenta con número identificativo, acuse de recibo y posibilidad de seguimiento por parte del reclamante.',
            'Las llamadas se atienden sin registro documental para agilizar el servicio y evitar cargas administrativas innecesarias.',
            'Solo se conservan datos internos de ventas, porque las reclamaciones abiertas generan una imagen negativa de la empresa.',
            'El personal decide caso por caso si asigna o no referencia, en función de la insistencia del consumidor.'
          ],
          correct: 0,
          explanation: 'La trazabilidad exige identificación y seguimiento del expediente.'
        },
        {
          question: '¿Qué enfoque describe mejor un servicio de atención al cliente de calidad?',
          options: [
            'Un servicio centrado únicamente en contener el descontento para proteger a la empresa de críticas públicas o sanciones.',
            'Un servicio receptivo a la retroalimentación, orientado a resolver incidencias y a aprender de ellas para mejorar.',
            'Un servicio que prioriza derivar todas las incidencias al área jurídica para reducir el contacto directo con clientes insatisfechos.',
            'Un servicio que utiliza los datos de reclamación para campañas comerciales adicionales, siempre que la incidencia ya conste en el sistema.'
          ],
          correct: 1,
          explanation: 'El enfoque al cliente implica receptividad, resolución y aprendizaje organizativo.'
        }
      ]
    },
    {
      id: 'fase4',
      shortTitle: 'Consumidor y administración',
      title: 'Fase 4 · El consumidor y la administración',
      intro:
        'Identifica normativa, organismos públicos y vías institucionales de protección del consumidor.',
      theory: [
        'La protección del consumidor se articula en niveles comunitario, nacional, autonómico y local.',
        'Entre los organismos públicos destacan OMIC, direcciones generales de consumo, Consejo de Consumidores y Centro Europeo del Consumidor.',
        'La administración cumple funciones de información, atención de incidencias, control y defensa de derechos.'
      ],
      rubric: [
        'Relaciona correctamente nivel normativo y organismo competente.',
        'Distingue vías municipales, autonómicas, estatales y europeas.',
        'Aplica el cauce institucional más adecuado según el caso.'
      ],
      practicePrompt:
        'Caso práctico: un ciudadano inglés compra en Madrid un producto defectuoso y el establecimiento se niega a facilitarle hoja de reclamaciones. Redacta una respuesta orientativa en la que indiques a qué entidad puede acudir, qué vías existen para tramitar la incidencia y qué papel desempeñan la OMIC, la Dirección General de Consumo y el Centro Europeo del Consumidor.',
      minLength: 320,
      test: [
        {
          question: '¿Qué organismo resulta especialmente pertinente cuando un consumidor de otro país de la UE tiene un problema en España?',
          options: [
            'El Centro Europeo del Consumidor, por su función de apoyo en conflictos de consumo con dimensión europea.',
            'Exclusivamente la Oficina Municipal de Información al Consumidor del municipio del comprador, aunque el caso tenga alcance transfronterizo.',
            'La Agencia Estatal de Administración Tributaria, porque toda reclamación de consumo internacional se convierte en un asunto fiscal.',
            'La conferencia sectorial de consumo, ya que tramita individualmente todas las quejas presentadas por ciudadanos extranjeros.'
          ],
          correct: 0,
          explanation: 'El Centro Europeo del Consumidor es el referente cuando existe componente europeo.'
        },
        {
          question: '¿Cuál es una función típica de la OMIC?',
          options: [
            'Resolver judicialmente conflictos de consumo con efectos de cosa juzgada sobre cualquier contrato privado.',
            'Ofrecer información y orientación al consumidor, además de canalizar determinadas reclamaciones a nivel local.',
            'Sustituir a las asociaciones de consumidores en todos sus servicios privados de asesoramiento especializado.',
            'Aprobar legislación estatal en materia de consumo y coordinar reglamentos europeos vinculantes.'
          ],
          correct: 1,
          explanation: 'La OMIC desarrolla funciones de información, orientación y tramitación en el ámbito local.'
        },
        {
          question: '¿Cómo se ordena correctamente el marco normativo en materia de consumo?',
          options: [
            'Únicamente por normas estatales, ya que la protección del consumidor no admite desarrollo autonómico ni local.',
            'Ámbito comunitario, nacional, autonómico y local, con normas y organismos que se complementan.',
            'Solo por ordenanzas municipales y reglamentos internos de empresa, porque son los instrumentos más próximos al cliente.',
            'Primero acuerdos privados con asociaciones y después, de forma supletoria, cualquier referencia constitucional.'
          ],
          correct: 1,
          explanation: 'El sistema es multinivel: europeo, estatal, autonómico y local.'
        },
        {
          question: '¿Qué organismo coordina políticas de consumo entre administraciones públicas?',
          options: [
            'La Conferencia Sectorial de Consumo.',
            'La OMIC del municipio con mayor población.',
            'El Consejo General del Poder Judicial.',
            'La asociación de consumidores con más socios en cada comunidad autónoma.'
          ],
          correct: 0,
          explanation: 'La coordinación interadministrativa se articula a través de la Conferencia Sectorial de Consumo.'
        },
        {
          question: '¿Qué opción refleja mejor una vía institucional de defensa del consumidor?',
          options: [
            'Confiar exclusivamente en valoraciones publicadas en redes sociales, porque sustituyen a cualquier procedimiento público o privado de reclamación.',
            'Acudir a organismos de consumo competentes o asociaciones de consumidores, además de presentar formalmente la reclamación por los cauces previstos.',
            'Esperar a que el establecimiento reconozca por iniciativa propia el error, ya que la administración solo interviene si existe delito penal.',
            'Solicitar siempre arbitraje obligatorio sin documentar hechos ni aportar pruebas, porque la carga de probar corresponde íntegramente a la empresa.'
          ],
          correct: 1,
          explanation: 'Existen cauces institucionales claros que complementan la reclamación ante la empresa.'
        }
      ]
    },
    {
      id: 'fase5',
      shortTitle: 'Reclamación',
      title: 'Fase 5 · La reclamación',
      intro:
        'Trabaja la hoja de reclamaciones, su estructura, consejos de cumplimentación y vías de presentación.',
      theory: [
        'La reclamación es un documento escrito por el que el consumidor expresa formalmente su insatisfacción y solicita restitución o respuesta.',
        'Es recomendable intentar una solución amistosa previa, no dejar campos en blanco, indicar hechos, fecha, hora y pruebas.',
        'La hoja oficial suele incluir datos de la empresa, del reclamante, motivo, solicitud, otros datos y firmas.'
      ],
      rubric: [
        'Describe correctamente el modelo y contenido de la reclamación.',
        'Distingue firma de recepción y conformidad con el contenido.',
        'Explica al menos tres vías válidas de presentación.'
      ],
      practicePrompt:
        'Caso práctico: a una persona le devuelven por un jersey el precio rebajado actual y no el importe original abonado según el ticket. Redacta el texto central de una hoja de reclamaciones: identifica hechos, solicitud, pruebas que acompañarías y vías posteriores de presentación si la empresa no responde adecuadamente.',
      minLength: 340,
      test: [
        {
          question: '¿Qué significa la firma del establecimiento en una hoja de reclamaciones?',
          options: [
            'Que la empresa reconoce la veracidad íntegra de los hechos descritos y acepta automáticamente indemnizar al reclamante.',
            'Que la empresa recibe formalmente la reclamación, sin que ello implique estar de acuerdo con el contenido manifestado por el cliente.',
            'Que la empresa queda sancionada de manera inmediata por la administración competente en materia de consumo.',
            'Que la reclamación ya no puede ampliarse con más pruebas ni tramitarse por otras vías administrativas o asociativas.'
          ],
          correct: 1,
          explanation: 'La firma acredita recepción, no conformidad con lo reclamado.'
        },
        {
          question: '¿Qué recomendación es correcta al cumplimentar una hoja de reclamaciones?',
          options: [
            'Dejar en blanco los apartados dudosos para que la administración los complete después de recibir la documentación.',
            'Rellenarla con letra legible, indicar fecha y hora de los hechos, mencionar pruebas y concretar una solicitud proporcional.',
            'Evitar reflejar la solicitud concreta para que la empresa proponga libremente una solución más flexible.',
            'Presentarla solo varios meses después del incidente para comprobar antes si otros clientes tienen problemas semejantes.'
          ],
          correct: 1,
          explanation: 'La reclamación debe ser concreta, legible y bien documentada.'
        },
        {
          question: '¿Cuál de estas vías es válida para presentar una reclamación de consumo?',
          options: [
            'Solo existe la presentación en el establecimiento donde ocurrieron los hechos; cualquier otra vía carece de eficacia.',
            'Presentarla ante OMIC, Dirección General de Consumo, registro administrativo, asociación de consumidores o por los cauces admitidos.',
            'Únicamente puede tramitarla una asociación privada de consumidores con delegación en la provincia del reclamante.',
            'Solo cabe la vía judicial civil, porque la hoja oficial no puede presentarse ante administraciones públicas.'
          ],
          correct: 1,
          explanation: 'El sistema prevé varias vías de presentación además del propio establecimiento.'
        },
        {
          question: '¿Qué apartado forma parte del modelo oficial de hoja de reclamaciones?',
          options: [
            'Datos identificativos de la empresa, del reclamante, motivo de la reclamación y solicitud, entre otros apartados.',
            'Un juicio preliminar obligatorio redactado por el encargado del establecimiento antes de entregar el impreso al cliente.',
            'La valoración final del inspector de consumo que resuelve el caso en el mismo acto de cumplimentación.',
            'Una cláusula de confidencialidad por la que el consumidor renuncia a comunicar el problema a asociaciones o administraciones.'
          ],
          correct: 0,
          explanation: 'Esos apartados forman parte del modelo oficial de hoja de reclamaciones.'
        },
        {
          question: '¿Qué actuación previa suele recomendarse antes de formalizar la reclamación?',
          options: [
            'Intentar una solución amistosa con el establecimiento, siempre que ello no impida después formalizar la reclamación si es necesario.',
            'Presentar directamente denuncia penal en cualquier supuesto para reforzar la posición del consumidor.',
            'Esperar a que la empresa modifique unilateralmente la situación una vez transcurrido un plazo prudencial sin dejar constancia documental.',
            'Limitarse a publicar la incidencia en internet, ya que esa publicidad sustituye jurídicamente a la hoja de reclamaciones.'
          ],
          correct: 0,
          explanation: 'Se aconseja intentar una vía amistosa antes de usar la hoja, sin renunciar por ello a reclamar.'
        }
      ]
    },
    {
      id: 'fase6',
      shortTitle: 'Gestión empresarial',
      title: 'Fase 6 · Gestión empresarial de reclamaciones',
      intro:
        'Estudia principios, procedimiento interno, seguimiento y mejora continua en el tratamiento de reclamaciones.',
      theory: [
        'Los principios básicos son visibilidad, accesibilidad, respuesta diligente, gratuidad, objetividad, enfoque al cliente, confidencialidad, responsabilidad y mejora continua.',
        'El procedimiento interno incluye información, recepción, acuse de recibo, seguimiento, evaluación inicial, investigación, resolución, comunicación y cierre.',
        'La calidad del sistema exige clasificar reclamaciones, medir satisfacción, auditar y revisar periódicamente el proceso.'
      ],
      rubric: [
        'Identifica principios incumplidos y los justifica.',
        'Describe ordenadamente el procedimiento interno de gestión.',
        'Propone medidas de seguimiento y mejora continua.'
      ],
      practicePrompt:
        'Caso práctico: una empresa recibe una reclamación por publicidad engañosa en precios. Tarda tres meses en contestar, no facilita información del estado del expediente y nadie sabe quién debe resolverla. Diseña el procedimiento correcto que debería seguir la empresa desde la recepción hasta el cierre e indica qué principios de gestión se estaban incumpliendo.',
      minLength: 360,
      test: [
        {
          question: 'Si una empresa tarda tres meses en responder a una reclamación ordinaria, ¿qué principio se ve afectado con mayor claridad?',
          options: [
            'Respuesta diligente, porque la gestión exige prontitud razonable y seguimiento adecuado del expediente.',
            'Confidencialidad, porque el retraso siempre implica una filtración de datos personales del reclamante.',
            'Visibilidad, porque cualquier demora significa que la cartelería del establecimiento no era suficientemente llamativa.',
            'Gratuidad, ya que la lentitud solo sería un problema si existiera un coste económico asociado al trámite.'
          ],
          correct: 0,
          explanation: 'La tardanza injustificada afecta directamente a la diligencia en la respuesta.'
        },
        {
          question: '¿Qué diferencia describe mejor visibilidad y accesibilidad en un procedimiento de reclamaciones?',
          options: [
            'La visibilidad se refiere a que se conozca cómo reclamar, mientras la accesibilidad exige que el procedimiento pueda utilizarse de forma sencilla y real por cualquier reclamante.',
            'La visibilidad alude exclusivamente a carteles en el escaparate y la accesibilidad solo a la gratuidad del teléfono de atención.',
            'Ambos términos son equivalentes y se usan únicamente para distinguir reclamaciones presenciales de telemáticas.',
            'La visibilidad afecta a la administración pública y la accesibilidad es una cuestión interna sin relevancia para el cliente.'
          ],
          correct: 0,
          explanation: 'Visibilidad es conocer el sistema; accesibilidad es poder usarlo de forma efectiva.'
        },
        {
          question: '¿Qué secuencia recoge mejor el procedimiento empresarial de tratamiento de reclamaciones?',
          options: [
            'Recepción, evaluación económica, archivo provisional y cierre definitivo salvo protesta del consumidor.',
            'Información, recepción, acuse de recibo, seguimiento, evaluación inicial, investigación, resolución, comunicación y cierre.',
            'Registro, sanción automática a la plantilla, reembolso inmediato y eliminación de los datos del expediente.',
            'Atención telefónica, negociación comercial, mediación obligatoria y certificado de satisfacción final.'
          ],
          correct: 1,
          explanation: 'Esa es la secuencia procedimental completa que figura en el tema.'
        },
        {
          question: '¿Qué medida encaja con la mejora continua del sistema?',
          options: [
            'Clasificar y analizar reclamaciones para detectar tendencias, auditar el proceso y revisar periódicamente su eficacia.',
            'Evitar registrar reclamaciones repetidas para que no aparezcan patrones que afecten a la imagen interna de calidad.',
            'Resolver solo las incidencias más graves y archivar el resto sin seguimiento para concentrar recursos.',
            'Usar las quejas como base exclusiva para campañas de fidelización sin estudiar causas ni recursos implicados.'
          ],
          correct: 0,
          explanation: 'La mejora continua exige análisis sistemático, seguimiento y revisión del proceso.'
        },
        {
          question: '¿Qué principio se incumple si nadie sabe quién es responsable de dar solución a las reclamaciones?',
          options: [
            'Responsabilidad, porque deben estar claramente definidas las funciones y la titularidad de la respuesta.',
            'Objetividad, porque toda indefinición funcional implica automáticamente un sesgo a favor del cliente.',
            'Accesibilidad, porque la falta de responsable solo afecta a personas con dificultades para usar canales digitales.',
            'Confidencialidad, dado que la responsabilidad siempre se identifica con el tratamiento de datos personales.'
          ],
          correct: 0,
          explanation: 'La organización debe definir con claridad quién responde y quién informa al reclamante.'
        }
      ]
    },
    {
      id: 'fase7',
      shortTitle: 'Reclamación presencial',
      title: 'Fase 7 · Reclamación presencial',
      intro:
        'Entrena la atención cara a cara ante clientes alterados, con escucha activa, lenguaje verbal y no verbal adecuados.',
      theory: [
        'Conviene evitar discusiones innecesarias, escuchar sin interrumpir y resumir los argumentos del reclamante.',
        'Hay que cuidar el lenguaje verbal y corporal para transmitir interés real por la solución.',
        'Se deben jerarquizar motivos de insatisfacción, pedir disculpas cuando corresponda y no prometer lo que no se puede cumplir.'
      ],
      rubric: [
        'Aplica escucha activa, empatía y asertividad.',
        'Explica cómo bajar la tensión y centrar la conversación en hechos y soluciones.',
        'Diferencia entre reconocer el problema y prometer soluciones inviables.'
      ],
      practicePrompt:
        'Caso práctico: en un negocio de reparación informática, un cliente muy alterado exige la devolución inmediata de su portátil tras tres semanas sin noticias sobre la reparación. Redacta el protocolo de actuación presencial que debería seguir la persona responsable de atenderle, incluyendo lenguaje verbal, no verbal, resumen de hechos, disculpa si procede y pasos posteriores.',
      minLength: 340,
      test: [
        {
          question: '¿Qué actuación es más adecuada al inicio de una reclamación presencial con un cliente muy alterado?',
          options: [
            'Interrumpirle desde el primer momento para aclarar que la empresa no admite tonos elevados y cerrar la conversación si continúa disconforme.',
            'Invitarle a un espacio más tranquilo, dejarle exponer su versión y formular preguntas aclaratorias sin adoptar una postura defensiva.',
            'Explicarle inmediatamente todas las razones internas de la empresa antes de escuchar lo sucedido, para que comprenda el contexto completo.',
            'Pedirle que presente por escrito la incidencia sin ofrecer ninguna atención inicial, ya que así se evita subjetividad en el trato.'
          ],
          correct: 1,
          explanation: 'La gestión presencial eficaz empieza creando un entorno menos tenso y escuchando activamente.'
        },
        {
          question: '¿Qué valor tiene resumir con otras palabras lo que ha dicho el reclamante?',
          options: [
            'Permite rebajar la importancia del problema a ojos de la empresa y preparar una defensa jurídica más sólida.',
            'Ayuda a que el cliente se sienta escuchado, comprueba que se han entendido los hechos y facilita reconducir la conversación.',
            'Sustituye la necesidad de aportar soluciones, porque una vez resumido el problema la gestión presencial ya se considera correcta.',
            'Evita cualquier posibilidad de que el cliente aporte nuevas pruebas o matices relevantes sobre lo ocurrido.'
          ],
          correct: 1,
          explanation: 'El resumen comprueba comprensión y transmite escucha activa.'
        },
        {
          question: '¿Qué recomendación es coherente cuando la empresa ha fallado realmente?',
          options: [
            'Pedir disculpas de forma clara, una sola vez, sin justificar el fallo y orientando la conversación hacia la solución posible.',
            'Ofrecer varias disculpas sucesivas mezcladas con excusas detalladas para demostrar que el trabajador no fue personalmente culpable.',
            'Evitar reconocer cualquier error hasta que exista resolución administrativa firme, aunque el problema sea evidente.',
            'Prometer una compensación máxima de inmediato, aunque todavía no se sepa si la empresa podrá cumplirla.'
          ],
          correct: 0,
          explanation: 'La disculpa debe ser clara, sobria y acompañada de una orientación realista a la solución.'
        },
        {
          question: '¿Qué papel desempeña el lenguaje no verbal en la atención presencial?',
          options: [
            'Es irrelevante porque el cliente valora solo la solución final y no cómo se le escucha o se le mira durante el proceso.',
            'Ayuda a transmitir preocupación, escucha y disposición a resolver, reforzando la coherencia del mensaje verbal.',
            'Sustituye completamente a la argumentación objetiva, por lo que no es necesario aportar datos ni explicaciones contrastables.',
            'Solo importa en ventas, pero no cuando el cliente ya está descontento y acude con intención de reclamar.'
          ],
          correct: 1,
          explanation: 'El lenguaje no verbal es clave para comunicar respeto, calma e interés real.'
        },
        {
          question: 'Si el cliente ha interpretado mal las promesas empresariales, ¿qué procede?',
          options: [
            'Contradecirle con brusquedad para dejar claro desde el primer momento que la empresa no asume expectativas irreales.',
            'Explicarle con paciencia, apoyándose en datos objetivos y contrastables, por qué la expectativa no se corresponde con lo ofrecido.',
            'Ignorar su interpretación y remitirle automáticamente a la administración, porque ya no existe margen para una gestión presencial útil.',
            'Aceptar sin matices toda su versión para evitar tensión, aunque eso obligue a reconocer compromisos que la empresa nunca asumió.'
          ],
          correct: 1,
          explanation: 'Cuando el cliente se equivoca, hay que explicar con paciencia y pruebas, no confrontar ni prometer falsamente.'
        }
      ]
    },
    {
      id: 'fase8',
      shortTitle: 'Conflicto empresarial',
      title: 'Fase 8 · El conflicto en el ámbito empresarial',
      intro:
        'Aborda fases del conflicto, estilos de resolución y negociación como técnica para alcanzar acuerdos.',
      theory: [
        'El conflicto pasa por inicio, definición, planteamiento de alternativas y acuerdo.',
        'Existen estilos como integrador, complaciente, dominante, evasivo y comprometido.',
        'La negociación implica preparación, desarrollo y cierre, con interés real de las partes por alcanzar un acuerdo.'
      ],
      rubric: [
        'Distingue fases, estilos y técnicas de resolución.',
        'Valora límites de los estilos dominante y evasivo.',
        'Diseña una negociación con preparación, desarrollo y cierre bien fundamentados.'
      ],
      practicePrompt:
        'Caso práctico: Marcos suministra pan a una cadena de restaurantes que quiere reducir el precio del contrato un 10 %. Prepara una propuesta de negociación: define intereses de ambas partes, estilo recomendado para abordar el conflicto, información previa necesaria, concesiones posibles, argumentos de cierre y riesgos de adoptar un estilo dominante o evasivo.',
      minLength: 360,
      test: [
        {
          question: '¿Qué diferencia principal existe entre un estilo complaciente y uno dominante en la resolución de conflictos?',
          options: [
            'El complaciente prioriza la relación y los objetivos ajenos incluso sacrificando los propios, mientras el dominante busca imponerse y vencer en el conflicto.',
            'El complaciente evita cualquier acuerdo y el dominante busca siempre un punto medio beneficioso para ambas partes.',
            'Ambos estilos se caracterizan por idéntico equilibrio entre intereses propios y ajenos, cambiando solo el lenguaje empleado.',
            'El complaciente se usa solo en consumo y el dominante solo en negociación mercantil entre empresas.'
          ],
          correct: 0,
          explanation: 'El complaciente sacrifica lo propio; el dominante impone lo propio.'
        },
        {
          question: '¿Por qué suele ser difícil alcanzar acuerdos duraderos desde estilos evasivos o dominantes?',
          options: [
            'Porque uno evita el trabajo real del conflicto y el otro tiende a bloquear las concesiones mutuas necesarias para un consenso estable.',
            'Porque ambos estilos obligan jurídicamente a la mediación administrativa antes de formular cualquier propuesta comercial.',
            'Porque son estilos diseñados solo para conflictos personales y no pueden usarse en relaciones empresariales complejas.',
            'Porque provocan automáticamente la nulidad del acuerdo alcanzado, aunque las partes lo firmen voluntariamente.'
          ],
          correct: 0,
          explanation: 'La evasión impide abordar el problema y la imposición dificulta la construcción de acuerdos sostenibles.'
        },
        {
          question: '¿Qué fase pertenece a toda negociación bien planteada?',
          options: [
            'Preparación, desarrollo y cierre, con o sin acuerdo final según la evolución del proceso.',
            'Recepción, acuse de recibo y cierre de incidencia, porque la negociación sigue el mismo procedimiento que una reclamación formal.',
            'Denuncia, inspección y sanción, ya que toda negociación requiere autoridad externa que valide concesiones mutuas.',
            'Inicio emocional, confrontación directa y resolución inmediata, evitando recopilar información previa para no sesgar el diálogo.'
          ],
          correct: 0,
          explanation: 'La negociación se estructura en preparación, desarrollo y cierre.'
        },
        {
          question: '¿Qué sería una buena práctica en la preparación de una negociación comercial?',
          options: [
            'Entrar a la reunión con un único objetivo rígido y sin alternativas, para transmitir firmeza absoluta desde el principio.',
            'Recopilar información sobre intereses, límites, poder relativo, posibles concesiones y propuestas previsibles de la otra parte.',
            'Evitar estudiar al interlocutor para no generar expectativas que limiten la espontaneidad del encuentro.',
            'Posponer cualquier análisis hasta el desarrollo de la reunión, ya que la preparación resta flexibilidad al negociador.'
          ],
          correct: 1,
          explanation: 'La preparación exige información, límites y estrategia antes de negociar.'
        },
        {
          question: '¿Qué técnica general describe mejor la negociación en el marco del tema?',
          options: [
            'Un proceso comunicativo en el que las partes, desde posiciones distintas, acercan posturas mediante concesiones mutuas para intentar alcanzar un acuerdo.',
            'Una forma de arbitraje en la que un tercero impone a ambas partes una solución definitiva y ejecutiva sin margen de discusión.',
            'Un procedimiento reservado para conflictos judicializados, posterior siempre a la reclamación administrativa formal.',
            'Una conversación comercial orientada a lograr que una parte acepte sin modificaciones la propuesta inicial de la otra.'
          ],
          correct: 0,
          explanation: 'La negociación consiste en acercar posiciones mediante comunicación y concesiones mutuas.'
        }
      ]
    }
  ];

  window.Tema7Data = { PHASES };
})();
