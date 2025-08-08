document.addEventListener('DOMContentLoaded', () => {
  // Datos de ejemplo con categorías (ambiente, prestigio, oportunidades)
  // Lista de despachos basados en las clasificaciones de Chambers and Partners.
  // Cada despacho tiene un id único, un nombre y una breve descripción genérica.
  // Las ofertas de empleo son genéricas; se espera que los usuarios agreguen reseñas.
  const firms = [
    { id: 1,  name: 'Creel, García-Cuéllar, Aiza y Enríquez, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 2,  name: 'Galicia Abogados, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 3,  name: 'Mijares, Angoitia, Cortés y Fuentes, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 4,  name: 'Nader Hayaux & Goebel', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 5,  name: 'Ritch Mueller', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 6,  name: 'Baker McKenzie', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 7,  name: 'Greenberg Traurig, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 8,  name: 'Pérez-Llorca', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 9,  name: 'Santamarina y Steta SC', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 10, name: 'Von Wobeser y Sierra, SC', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 11, name: 'White & Case SC', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 12, name: 'Jones Day', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 13, name: 'Bufete Robles Miaja, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 14, name: 'Kuri Breña, Sánchez Ugarte y Aznar, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 15, name: 'Actio Legal Partners', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 16, name: 'Villarreal, García Campuzano, Gómez y Fernández', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 17, name: 'Hogan Lovells', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 18, name: 'Holland & Knight', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 19, name: 'Gaxiola Calvo, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 20, name: 'CANNIZZO', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 21, name: 'Garrigues', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 22, name: 'CMS Woodhouse Lorente Ludlow SC', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 23, name: 'Ibarra, del Paso y Gallego, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 24, name: 'SMPS Legal', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 25, name: 'TA Trujillo Abogados', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 26, name: 'Cacheaux, Cavazos & Newton', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 27, name: 'Pérez Correa, González y Asociados, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 28, name: 'Sainz Abogados', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 29, name: 'A&H Haiat y Amezcua, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 30, name: 'Snell & Wilmer LLP', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 31, name: 'Arochi & Lindner', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 32, name: 'Basham, Ringe y Correa S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 33, name: 'OLIVARES', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 34, name: 'Uhthoff, Gómez Vega & Uhthoff, S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 35, name: 'Tsuru', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 36, name: 'BC&B Law & Business', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 37, name: 'Goodrich Riquelme y Asociados', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 38, name: 'Calderón & De La Sierra', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 39, name: 'Dumont', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 40, name: 'Müggenburg, Gorches y Peñalosa, S.C. (MGPS)', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 41, name: 'Iberbrand S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 42, name: 'Panamericana de Patentes y Marcas', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 43, name: 'Solórzano Linaldi', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 44, name: 'AXKT-IP', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 45, name: 'BGAL Asociados', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 46, name: 'C & L ATTORNEYS', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 47, name: 'Cuesta Campos y Asociados S.C.', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 48, name: 'Guerra González y Asociados SC', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 49, name: 'Malpica, Iturbe, Buj & Paredes', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] },
    { id: 50, name: 'Bufete Asali', description: 'Despacho de abogados reconocido por Chambers and Partners en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    // A continuación se incluyen 50 despachos adicionales basados en las clasificaciones de Legal 500.
    // Estos despachos no estaban en la lista original de 50 y se agregan con identificadores consecutivos
    // a partir del 51. Cada despacho se inicializa con una descripción genérica y ofertas de empleo
    // genéricas para mantener la coherencia con el resto del sitio.
    ,{ id: 51, name: 'Chevez Ruiz Zamarripa', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 52, name: 'Sánchez Devanny', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 53, name: 'Turanzas, Bravo & Ambrosi', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 54, name: 'Arias y Meurinne, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 55, name: 'DLA Piper Mexico', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 56, name: 'Acedo Santamarina, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 57, name: 'C&C Asesores', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 58, name: 'Deloitte Impuestos y Servicios Legales, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 59, name: 'EC Rubio', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 60, name: 'Anaya Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 61, name: 'Calvo Nicolau y Marquez Cristerna‑DFK, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 62, name: 'Kavanagh Gorozpe', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 63, name: 'Ortiz Abogados Tributarios S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 64, name: 'Parás Asesores Fiscales, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 65, name: 'Cuatrecasas', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 66, name: 'Martín, Isla & Pickering, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 67, name: 'Tena Abogados, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 68, name: 'MCM Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 69, name: 'Norton Rose Fulbright', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 70, name: 'Dentons López Velarde', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 71, name: 'Ramos, Ripoll & Schuster', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 72, name: 'Mayer Brown Mexico, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 73, name: 'Ontier México', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 74, name: 'Santos‑Elizondo, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 75, name: 'Clyde & Co', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 76, name: 'Rodríguez Dávalos Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 77, name: 'Bello, Gallardo, Bonequi y García, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 78, name: 'ClarkeModet México', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 79, name: 'MCOY Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 80, name: 'Méndez + Cortés S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 81, name: 'ECIJA', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 82, name: 'Vázquez Aldana, Hernández Gómez Asociados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 83, name: 'SAI Derecho & Economía S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 84, name: 'Valdés Abascal Abogados, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 85, name: 'Aziz & Kaye Business Law', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 86, name: 'Vázquez Tercero & Zepeda', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 87, name: 'Conesa y Moreno Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 88, name: 'Martínez, Algaba, de Haro y Curiel', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 89, name: 'Quijano, Cortina y de la Torre Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 90, name: 'Martens Abogados, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 91, name: 'Ramírez Ornelas Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 92, name: 'Cervantes Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 93, name: 'Del Castillo y Castro Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 94, name: 'Guerra, Hidalgo y Mendoza (GHM)', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 95, name: 'Mañón Quintana Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 96, name: 'Bufete Cuetara Canale', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 97, name: 'Corona & Nepote, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 98, name: 'De la Garza y Acosta, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 99, name: 'López Melih y Estrada, S.C.', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    ,{ id: 100, name: 'CDA Abogados', description: 'Despacho de abogados reconocido por Legal 500 en México.', jobs: ['Abogado Junior', 'Pasante legal'], reviews: [] }
    // Notarías relevantes de la Ciudad de México añadidas a la lista
    ,{ id: 101,
       name: 'Notaría 29 (Luis Antonio Montes de Oca Mayagoitia)',
       description: 'Notaría pública ubicada en la Ciudad de México que ofrece servicios como transmisiones inmobiliarias, fideicomisos, constitución de sociedades, testamentos y más, según su sitio oficial.',
       jobs: ['Notario Auxiliar', 'Asistente legal'],
       reviews: [] }
    ,{ id: 102,
       name: 'Notaría 44 (Praga 39, Juárez)',
       description: 'Notaría pública situada en la colonia Juárez, Ciudad de México, identificada por el Colegio Nacional del Notariado Mexicano como notaría titular en la dirección Praga 39.',
       jobs: ['Notario Auxiliar', 'Asistente legal'],
       reviews: [] }
    ,{ id: 103,
       name: 'Notarías 92 y 145',
       description: 'Dos notarías ubicadas en la calle Patricio Sanz 1101, en Benito Juárez, Ciudad de México, que destacan por su importancia en el centro de la ciudad y ofrecen servicios como autenticaciones, testamentos, poderes y asesorías.',
       jobs: ['Notario Auxiliar', 'Asistente legal'],
       reviews: [] }
    ,{ id: 104,
       name: 'Notaría 183 (Paseo del Pedregal)',
       description: 'Notaría pública localizada en Av. Paseo del Pedregal 150, Jardines del Pedregal, Ciudad de México; presta diversos servicios notariales a la comunidad.',
       jobs: ['Notario Auxiliar', 'Asistente legal'],
       reviews: [] }

    // Nuevas notarías añadidas
    ,{ id: 105,
       name: 'Notaría 6 (Claudio Juan Ramón Hernández de Rubín)',
       description: 'Notaría pública de la Ciudad de México dirigida por Claudio Juan Ramón Hernández de Rubín; ofrece servicios como testamentos, otorgamiento de poderes, sucesiones, compra‑venta de inmuebles, fideicomisos y constitución de sociedades【616500515607461†L6-L30】. El notario se desempeña como Notario 6 desde marzo de 2016【616500515607461†L32-L39】.',
       jobs: ['Notario Auxiliar', 'Asistente legal'],
       reviews: [] }
    ,{ id: 106,
       name: 'Notaría 180 (Luis Eduardo Paredes Sánchez)',
       description: 'Notaría 180 ubicada en Gabriel Mancera 1022, colonia Del Valle, Benito Juárez, Ciudad de México; a cargo del Lic. Luis Eduardo Paredes Sánchez desde 2012. La notaría busca proporcionar un servicio público notarial de gran calidad, rápido y flexible, brindando certeza jurídica a sus clientes【602843964979032†L31-L37】【602843964979032†L63-L67】.',
       jobs: ['Notario Auxiliar', 'Asistente legal'],
       reviews: [] }
  ];

  // Recuperar datos desde localStorage si existen para mantener reseñas añadidas
  const stored = localStorage.getItem('firmsData');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Para cada despacho almacenado, buscar su id y actualizar el objeto en memoria
        parsed.forEach(storedFirm => {
          const idx = firms.findIndex(f => f.id === storedFirm.id);
          if (idx !== -1) {
            // Copiar las reseñas y cualquier otra info persistente
            firms[idx] = { ...firms[idx], ...storedFirm };
          }
        });
      }
    } catch (e) {
      console.error('No se pudo parsear datos de despachos desde localStorage', e);
    }
  }
  // Almacena la lista completa (incluyendo nuevos despachos) de vuelta en localStorage
  // Esto asegura que se conserven las reseñas existentes pero también se incluyan los nuevos despachos
  localStorage.setItem('firmsData', JSON.stringify(firms));

  const firmsList = document.getElementById('firmsList');
  const searchInput = document.getElementById('search');

  // Calcula el promedio de una categoría
  function averageByKey(reviews, key) {
    if (!reviews || !reviews.length) return 0;
    const sum = reviews.reduce((acc, r) => acc + (r[key] || 0), 0);
    return sum / reviews.length;
  }

  // Calcula el promedio global promediando las tres categorías
  function calculateOverall(firm) {
    if (!firm.reviews.length) return 0;
    const a = averageByKey(firm.reviews, 'ambiente');
    const p = averageByKey(firm.reviews, 'prestigio');
    const o = averageByKey(firm.reviews, 'oportunidades');
    return (a + p + o) / 3;
  }

  // Renderiza las tarjetas de despachos
  function renderFirms(data) {
    firmsList.innerHTML = '';
    data.forEach(firm => {
      const card = document.createElement('div');
      card.classList.add('firm-card');
      const avg = calculateOverall(firm);
      let ratingClass = 'rating-low';
      if (avg >= 4) ratingClass = 'rating-high';
      else if (avg >= 2.5) ratingClass = 'rating-mid';

      card.innerHTML = `
        <div class="firm-header">
          <div class="rating-circle ${ratingClass}">${avg ? avg.toFixed(1) : 'N/A'}</div>
          <h3>${firm.name}</h3>
        </div>
        <p>${firm.description}</p>
        <p><strong>Ofertas:</strong> ${firm.jobs.join(', ')}</p>
        <p class="rating-count">${firm.reviews.length} reseña${firm.reviews.length !== 1 ? 's' : ''}</p>
      `;

      // Botón para calificar / ver detalles
      const btn = document.createElement('button');
      btn.textContent = 'Calificar';
      btn.addEventListener('click', (e) => {
        // Detener la propagación para que el clic no active el listener de la tarjeta
        e.stopPropagation();
        window.location.href = `firm.html?id=${firm.id}`;
      });
      card.appendChild(btn);

      // Al hacer clic en cualquier parte de la tarjeta, navegar a la página de detalles
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = `firm.html?id=${firm.id}`;
      });
      firmsList.appendChild(card);
    });
  }

  // Filtra los despachos según el término de búsqueda
  function filterFirms() {
    const term = searchInput.value.toLowerCase();
    const filtered = firms.filter(firm => firm.name.toLowerCase().includes(term));
    renderFirms(filtered);
  }

  // Inicializa la lista
  renderFirms(firms);
  searchInput.addEventListener('input', filterFirms);

  // ---------- Gestión de modales y términos ----------
  // Elementos del DOM para privacidad y sugerir nuevo despacho
  const privacyLink = document.getElementById('privacyLink');
  const privacyModal = document.getElementById('privacyModal');
  const closePrivacy = document.getElementById('closePrivacy');
  const addFirmBtn = document.getElementById('addFirmBtn');
  const addFirmModal = document.getElementById('addFirmModal');
  const closeAddFirm = document.getElementById('closeAddFirm');
  const addFirmForm = document.getElementById('addFirmForm');
  const addFirmMessage = document.getElementById('addFirmMessage');
  const termsModal = document.getElementById('termsModal');
  const acceptTermsBtn = document.getElementById('acceptTermsBtn');
  const declineTermsBtn = document.getElementById('declineTermsBtn');

  // Funciones utilitarias para abrir/cerrar modales
  function openModal(modal) {
    if (modal) {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    }
  }
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  // Mostrar aviso de privacidad
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(privacyModal);
    });
  }
  if (closePrivacy) {
    closePrivacy.addEventListener('click', () => closeModal(privacyModal));
  }

  // Mostrar formulario de sugerir despacho
  if (addFirmBtn) {
    addFirmBtn.addEventListener('click', () => {
      openModal(addFirmModal);
      if (addFirmMessage) addFirmMessage.classList.add('hidden');
    });
  }
  if (closeAddFirm) {
    closeAddFirm.addEventListener('click', () => closeModal(addFirmModal));
  }

  // Procesar envío del formulario de sugerencias
  if (addFirmForm) {
    addFirmForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('firmName').value.trim();
      const description = document.getElementById('firmDescription').value.trim();
      const source = document.getElementById('firmSource').value.trim();
      const existing = JSON.parse(localStorage.getItem('suggestedFirms') || '[]');
      existing.push({ name, description, source, date: new Date().toISOString() });
      localStorage.setItem('suggestedFirms', JSON.stringify(existing));
      if (addFirmForm) addFirmForm.reset();
      if (addFirmMessage) addFirmMessage.classList.remove('hidden');
    });
  }

  // Mostrar términos de uso si no se han aceptado
  if (termsModal) {
    const accepted = localStorage.getItem('termsAccepted');
    if (!accepted) {
      openModal(termsModal);
    }
    if (acceptTermsBtn) {
      acceptTermsBtn.addEventListener('click', () => {
        localStorage.setItem('termsAccepted', 'true');
        closeModal(termsModal);
      });
    }
    // Si el usuario rechaza los términos, mostramos un mensaje y no permitimos continuar
    if (declineTermsBtn) {
      declineTermsBtn.addEventListener('click', () => {
        // Mostrar un mensaje dentro del modal informando que no puede continuar
        const content = termsModal.querySelector('.terms-content');
        if (content) {
          content.innerHTML = '<h2>Acceso denegado</h2><p>No puedes utilizar este sitio sin aceptar los términos y condiciones. Si deseas usar la plataforma, por favor acepta los términos.</p>';
        }
      });
    }
  }
});
