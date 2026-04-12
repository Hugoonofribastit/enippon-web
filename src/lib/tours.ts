export interface TourStop {
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface Tour {
  id: string;
  image: string;
  images?: string[];
  name: { es: string; en: string };
  duration: string;
  startTime: string;
  meetingPoint: { es: string; en: string };
  transportCost: string;
  shortDescription: { es: string; en: string };
  description: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
  itinerary: TourStop[];
  notes: { es: string[]; en: string[] };
  details: { es: string[]; en: string[] };
  extraCosts?: { es: string[]; en: string[] };
  includes?: { es: string[]; en: string[] };
  priceType: "group" | "person";
  maxPeople: number;
}

export interface SeasonalTour {
  id: string;
  image: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  type: { es: string; en: string };
}

export const tours: Tour[] = [
  {
    id: "tour-personalizado",
    image: "/tours/create.jpg",
    name: { es: "Tour Personalizado por Tokio", en: "Custom Tokyo Tour" },
    duration: "2 / 6 / 8",
    startTime: "-",
    meetingPoint: { es: "Entrada de su hotel", en: "Hotel entrance" },
    transportCost: "-",
    shortDescription: {
      es: "Diseña tu propio tour eligiendo entre distintos destinos de Tokio, según tu tiempo y tu ritmo.",
      en: "Design your own tour choosing from different Tokyo destinations, according to your time and pace.",
    },
    description: {
      es: "Diseña tu propio tour personalizado eligiendo entre distintos destinos de Tokio, pensado según tu tiempo, tu ritmo y el tipo de experiencia que buscas. Elige los destinos que coincidan con tus intereses y haz que tu experiencia en Tokio sea verdaderamente tuya.\n\nTambién podemos diseñar experiencias enfocadas en el Japón tradicional menos visible: templos y santuarios apartados en zonas de montaña, festividades locales que conservan siglos de historia, así como celebraciones estacionales que reflejan el calendario cultural japonés.\n\nDentro del tiempo disponible (2, 6 u 8 horas) el tour puede centrarse en una temática concreta e incluir encuentros con artesanos, espacios dedicados a oficios tradicionales, gastronomía regional fuera del circuito comercial o pequeñas comunidades donde la identidad local se mantiene vigente.",
      en: "Design your own customized tour choosing from different Tokyo destinations, tailored to your time, pace, and the type of experience you're looking for. Choose destinations that match your interests and make your Tokyo experience truly yours.\n\nWe can also design experiences focused on the less visible traditional Japan: secluded temples and shrines in mountain areas, local festivities that preserve centuries of history, as well as seasonal celebrations that reflect the Japanese cultural calendar.\n\nWithin the available time (2, 6, or 8 hours) the tour can focus on a specific theme and include encounters with artisans, spaces dedicated to traditional crafts, regional gastronomy off the commercial circuit, or small communities where local identity remains alive.",
    },
    highlights: {
      es: ["Ginza", "Akihabara", "Shinjuku", "Shibuya", "Harajuku", "Asakusa", "Ueno", "Odaiba", "Ikebukuro"],
      en: ["Ginza", "Akihabara", "Shinjuku", "Shibuya", "Harajuku", "Asakusa", "Ueno", "Odaiba", "Ikebukuro"],
    },
    itinerary: [
      {
        title: { es: "Tu itinerario, tu elección", en: "Your itinerary, your choice" },
        description: {
          es: "Tokio es una ciudad de distritos diversos y vibrantes, donde cada barrio tiene una identidad propia. Desde la elegancia comercial de Ginza y el universo tecnológico de Akihabara, hasta la energía urbana de Shinjuku y el pulso constante de Shibuya, la ciudad ofrece experiencias para todo tipo de viajeros. Harajuku y Omotesando destacan por su escena creativa y de moda, mientras que Asakusa conserva el encanto más tradicional. Zonas como Ueno, con sus parques y museos, Odaiba, con su perfil futurista junto al mar, e Ikebukuro, vinculado a la cultura del anime y el entretenimiento, completan el recorrido por algunos de los distritos más emblemáticos de la ciudad.",
          en: "Tokyo is a city of diverse and vibrant districts, where each neighborhood has its own identity. From the commercial elegance of Ginza and the technological universe of Akihabara, to the urban energy of Shinjuku and the constant pulse of Shibuya, the city offers experiences for all types of travelers. Harajuku and Omotesando stand out for their creative and fashion scene, while Asakusa preserves the most traditional charm. Areas like Ueno with its parks and museums, Odaiba with its futuristic seaside profile, and Ikebukuro linked to anime culture, complete the tour of the city's most iconic districts.",
        },
      },
    ],
    notes: {
      es: [
        "Tour disponible en formato de 2, 6 u 8 horas.",
        "Contáctanos y crearemos juntos el tour que mejor se adapte a tus gustos.",
      ],
      en: [
        "Tour available in 2, 6, or 8-hour format.",
        "Contact us and we'll create the tour that best suits your tastes.",
      ],
    },
    details: {
      es: [
        "El tour comienza en la entrada de su hotel o lugar de alojamiento. El horario de inicio se acuerda previamente.",
        "El recorrido se realiza caminando y utilizando transporte público.",
        "El transporte no está incluido en el costo del tour.",
        "Tickets, pases, comidas y bebidas no están incluidos en el precio del tour y corren por cuenta del cliente.",
      ],
      en: [
        "The tour starts at your hotel or accommodation entrance. The start time is agreed upon in advance.",
        "The tour is conducted by walking and using public transport.",
        "Transport is not included in the tour cost.",
        "Tickets, passes, meals and drinks are not included in the tour price and are at the client's expense.",
      ],
    },
    priceType: "group",
    maxPeople: 5,
  },
  {
    id: "neo-tour",
    image: "/tours/neo.jpg",
    name: { es: "Neo Tour", en: "Neo Tour" },
    duration: "8",
    startTime: "9:00 AM",
    meetingPoint: { es: "Entrada de su hotel", en: "Hotel entrance" },
    transportCost: "¥1,700",
    shortDescription: {
      es: "Descubre todas las caras de Tokio en un solo día: innovación, tradición y lujo.",
      en: "Discover all faces of Tokyo in a single day: innovation, tradition and luxury.",
    },
    description: {
      es: "El Neo Tour es ideal para quienes desean descubrir todas las caras de Tokio en un solo día: innovación, tradición y lujo. Una experiencia que conecta el Tokio futurista con sus profundas raíces culturales y espirituales.",
      en: "The Neo Tour is ideal for those who want to discover all faces of Tokyo in a single day: innovation, tradition and luxury. An experience connecting futuristic Tokyo with its deep cultural and spiritual roots.",
    },
    highlights: {
      es: ["Mercado de Toyosu", "Odaiba", "Ueno & Ameyoko", "Ginza"],
      en: ["Toyosu Market", "Odaiba", "Ueno & Ameyoko", "Ginza"],
    },
    itinerary: [
      {
        title: { es: "1. Mercado de Toyosu", en: "1. Toyosu Market" },
        description: {
          es: "El Mercado de Toyosu es el lugar ideal para experimentar la esencia de un mercado japonés moderno. Cuenta con vibrantes secciones de productos frescos, pescado y mariscos, y es la evolución del antiguo Mercado de Tsukiji, manteniéndose como el principal centro de distribución de productos del mar en Tokio. Aquí podrás disfrutar del ambiente dinámico que combina tradición y modernidad, probar productos frescos en los distintos restaurantes del mercado y, si deseas relajarte, visitar el Onsen de Pies Senkyaku Banrai, una experiencia única para descansar mientras disfrutas del entorno.",
          en: "Toyosu Market is the ideal place to experience the essence of a modern Japanese market. It features vibrant sections of fresh produce, fish and seafood, and is the evolution of the old Tsukiji Market, remaining as Tokyo's main seafood distribution center. Here you can enjoy the dynamic atmosphere that combines tradition and modernity, try fresh products at the market's restaurants and, if you want to relax, visit the Senkyaku Banrai Foot Onsen, a unique experience to rest while enjoying the surroundings.",
        },
      },
      {
        title: { es: "2. Odaiba", en: "2. Odaiba" },
        description: {
          es: "Desde el mercado nos dirigimos a Odaiba, una zona construida sobre islas artificiales que representa el lado más futurista de Tokio. En este recorrido veremos íconos como el imponente Gundam Unicorn RX-0, la Estatua de la Libertad y el famoso Puente Rainbow Bridge. Este distrito es ideal para explorar tiendas tecnológicas, centros comerciales temáticos y disfrutar de vistas panorámicas de la bahía de Tokio.",
          en: "From the market we head to Odaiba, an area built on artificial islands that represents Tokyo's most futuristic side. On this tour we'll see icons like the imposing Gundam Unicorn RX-0, the Statue of Liberty and the famous Rainbow Bridge. This district is ideal for exploring tech shops, themed malls and enjoying panoramic views of Tokyo Bay.",
        },
      },
      {
        title: { es: "3. Ueno", en: "3. Ueno" },
        description: {
          es: "Nuestra siguiente parada es el histórico Parque Ueno, una de las zonas culturales más importantes de Tokio, rodeada de templos y santuarios tradicionales. Visitamos el Templo Kiyomizu Kannon-dō, dedicado a la diosa de la misericordia Kannon, y el Santuario Ueno Tōshō-gū, reconocido por su arquitectura dorada y su conexión con el período Tokugawa. Finalizamos con un recorrido por Ameyoko, un animado mercado callejero lleno de colores, aromas y sabores irresistibles.",
          en: "Our next stop is the historic Ueno Park, one of Tokyo's most important cultural areas, surrounded by traditional temples and shrines. We visit Kiyomizu Kannon-dō Temple, dedicated to the goddess of mercy Kannon, and Ueno Tōshō-gū Shrine, known for its golden architecture and connection to the Tokugawa period. We finish with a tour of Ameyoko, a lively street market full of colors, aromas and irresistible flavors.",
        },
      },
      {
        title: { es: "4. Ginza", en: "4. Ginza" },
        description: {
          es: "Para cerrar el día, visitamos Ginza, el distrito de compras más exclusivo de Tokio. Aquí podrás admirar la arquitectura moderna de edificios emblemáticos como Ginza Six, un sofisticado complejo comercial que reúne marcas de alta gama. Justo enfrente se encuentra el edificio insignia de UNIQLO, una impresionante torre de 12 pisos que simboliza la moda contemporánea y la innovación japonesa.",
          en: "To close the day, we visit Ginza, Tokyo's most exclusive shopping district. Here you can admire the modern architecture of iconic buildings like Ginza Six, a sophisticated commercial complex housing high-end brands. Right across stands UNIQLO's flagship building, an impressive 12-story tower symbolizing contemporary fashion and Japanese innovation.",
        },
      },
    ],
    notes: {
      es: [
        "El Neo Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.",
        "El precio corresponde al grupo completo, no por persona.",
        "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes japoneses.",
        "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes japoneses por persona.",
        "Los menores de 6 años no tienen costo únicamente cuando participan como personas adicionales y no ocupan una plaza del grupo base.",
      ],
      en: [
        "The Neo Tour is a private experience, individual or group, for 1 to 5 people.",
        "The price is for the entire group, not per person.",
        "For each additional person aged 13 and over, an extra cost of 10,000 Japanese yen applies.",
        "For additional people aged 6 to 12, the cost is 5,000 Japanese yen per person.",
        "Children under 6 are free only when participating as additional people and not occupying a base group spot.",
      ],
    },
    details: {
      es: [
        "El tour comienza a las 9:00 AM en la entrada de su hotel o lugar de alojamiento.",
        "El recorrido se realiza caminando y utilizando transporte público.",
        "El transporte no está incluido en el costo del tour.",
        "Tickets, pases, comidas y bebidas no están incluidos en el precio del tour y corren por cuenta del cliente.",
      ],
      en: [
        "The tour starts at 9:00 AM at your hotel or accommodation entrance.",
        "The tour is conducted by walking and using public transport.",
        "Transport is not included in the tour cost.",
        "Tickets, passes, meals and drinks are not included in the tour price and are at the client's expense.",
      ],
    },
    extraCosts: {
      es: ["Costo de Transporte: 1,700 yenes aproximadamente por persona."],
      en: ["Transport cost: approximately 1,700 yen per person."],
    },
    priceType: "group",
    maxPeople: 5,
  },
  {
    id: "matcha-tour",
    image: "/tours/matcha.jpg",
    name: { es: "Matcha Tour", en: "Matcha Tour" },
    duration: "8",
    startTime: "9:00 AM",
    meetingPoint: { es: "Entrada de su hotel", en: "Hotel entrance" },
    transportCost: "¥1,000",
    shortDescription: {
      es: "Desde barrios históricos y tradiciones centenarias hasta la modernidad más vibrante.",
      en: "From historic neighborhoods and centuries-old traditions to the most vibrant modernity.",
    },
    description: {
      es: "El Matcha Tour es la experiencia ideal para descubrir Tokio en todas sus facetas: desde sus barrios más antiguos y tradiciones centenarias, hasta la modernidad más vibrante que define a la ciudad actual. Un recorrido pensado para conectar historia, cultura y vida urbana en una sola experiencia.",
      en: "The Matcha Tour is the ideal experience to discover Tokyo in all its facets: from its oldest neighborhoods and centuries-old traditions, to the most vibrant modernity that defines the current city. A tour designed to connect history, culture and urban life in a single experience.",
    },
    highlights: { es: ["Asakusa & Sensō-ji", "Akihabara", "Harajuku & Meiji Jingū", "Shinjuku"], en: ["Asakusa & Sensō-ji", "Akihabara", "Harajuku & Meiji Jingū", "Shinjuku"] },
    itinerary: [
      { title: { es: "1. Asakusa", en: "1. Asakusa" }, description: { es: "Comenzamos en Asakusa, donde el tiempo parece haberse detenido, frente al majestuoso Templo Sensō-ji, que guarda la esencia del Japón tradicional. Desde allí nos adentramos en Nakamise Street, llena de artesanías, kimono y dulces japoneses que despiertan los sentidos, hasta llegar al corazón del templo, un lugar que respira cultura y espiritualidad en cada rincón.", en: "We start in Asakusa, where time seems to have stopped, in front of the majestic Sensō-ji Temple, which preserves the essence of traditional Japan. From there we enter Nakamise Street, full of crafts, kimono and Japanese sweets that awaken the senses, until we reach the heart of the temple." } },
      { title: { es: "2. Akihabara", en: "2. Akihabara" }, description: { es: "Luego nos sumergimos en la energía única de Akihabara, meca de la electrónica y paraíso de la cultura geek y otaku. Cada calle y tienda vibra con luces, colores y sonidos que despiertan la curiosidad. En Radio Kaikan, Bic Camera, AmiAmi, Super Poteto, Akiba Cultures Zone y Tamashii Nations descubrimos desde gadgets futuristas hasta coleccionables únicos.", en: "Then we immerse ourselves in the unique energy of Akihabara, the mecca of electronics and paradise of geek and otaku culture. Every street and shop vibrates with lights, colors and sounds. In Radio Kaikan, Bic Camera, AmiAmi, Super Potato, Akiba Cultures Zone and Tamashii Nations we discover everything from futuristic gadgets to unique collectibles." } },
      { title: { es: "3. Harajuku", en: "3. Harajuku" }, description: { es: "El recorrido nos lleva a Harajuku, epicentro de la moda juvenil. Comenzamos descubriendo la calma del Santuario Meiji Jingū, un oasis de paz rodeado por un antiguo bosque donde se respira la espiritualidad de Japón, que contrasta con la energía de la cercana Takeshita Street, llena de color, estilo y la creatividad más extravagante de Tokio.", en: "The tour takes us to Harajuku, the epicenter of youth fashion. We begin discovering the calm of Meiji Jingū Shrine, an oasis of peace surrounded by an ancient forest, which contrasts with the energy of nearby Takeshita Street, full of color, style and Tokyo's most extravagant creativity." } },
      { title: { es: "4. Shinjuku", en: "4. Shinjuku" }, description: { es: "Cerramos el día en Shinjuku, el epicentro de la energía urbana de Tokio. Admiramos la famosa pantalla 3D, visitamos el histórico Santuario Hanazono y saludamos a Godzilla. Exploramos los callejones de Omoide Yokocho y Golden Gai, donde tradición y modernidad se entrelazan en cada rincón. Finalizamos frente a la imponente Kabukicho Tower, símbolo del Tokio más vibrante bajo las luces neón.", en: "We close the day in Shinjuku, the epicenter of Tokyo's urban energy. We admire the famous 3D screen, visit the historic Hanazono Shrine and greet Godzilla. We explore the alleys of Omoide Yokocho and Golden Gai. We finish in front of the imposing Kabukicho Tower, symbol of the most vibrant Tokyo under neon lights." } },
    ],
    notes: { es: ["El Matcha Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes japoneses.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes japoneses por persona.", "Los menores de 6 años no tienen costo únicamente cuando participan como personas adicionales."], en: ["The Matcha Tour is a private experience, individual or group, for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free only as additional participants."] },
    details: { es: ["El tour comienza a las 9:00 AM en la entrada de su hotel.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido en el costo del tour.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 9:00 AM at your hotel entrance.", "The tour is conducted by walking and using public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Costo de Transporte: 1,000 yenes aproximadamente por persona."], en: ["Transport cost: approximately 1,000 yen per person."] },
    priceType: "group",
    maxPeople: 5,
  },
  {
    id: "pop-tour",
    image: "/tours/pop.jpg",
    name: { es: "Pop Tour", en: "Pop Tour" },
    duration: "8",
    startTime: "9:00 AM",
    meetingPoint: { es: "Entrada de su hotel", en: "Hotel entrance" },
    transportCost: "¥1,000",
    shortDescription: { es: "La vibrante cultura pop de Tokio: moda, K-pop, pantallas futuristas y entretenimiento.", en: "The vibrant pop culture of Tokyo: fashion, K-pop, futuristic screens and entertainment." },
    description: { es: "Sumérgete en la vibrante cultura pop de Tokio con el Pop Tour, un recorrido por algunos de los distritos más emocionantes y de moda de la ciudad. Desde pantallas digitales futuristas hasta el mundo del K-pop, la moda y los lugares emblemáticos, este tour ofrece una combinación perfecta de modernidad, estilo y entretenimiento.", en: "Immerse yourself in Tokyo's vibrant pop culture with the Pop Tour, a journey through some of the city's most exciting and trendy districts. From futuristic digital screens to the world of K-pop, fashion and iconic landmarks, this tour offers a perfect combination of modernity, style and entertainment." },
    highlights: { es: ["Shinjuku", "Shin-Ōkubo (Korea Town)", "Harajuku", "Shibuya"], en: ["Shinjuku", "Shin-Ōkubo (Korea Town)", "Harajuku", "Shibuya"] },
    itinerary: [
      { title: { es: "1. Shinjuku", en: "1. Shinjuku" }, description: { es: "Comenzamos en Shinjuku, uno de los barrios más fascinantes de Tokio. Admiramos la famosa pantalla 3D, la imponente cabeza de Godzilla, el histórico Santuario Hanazono, y nos sumergimos en la atmósfera retro de Omoide Yokocho y Golden Gai, antes de recorrer las vibrantes calles de Kabukicho.", en: "We start in Shinjuku, one of Tokyo's most fascinating neighborhoods. We admire the famous 3D screen, the imposing Godzilla head, the historic Hanazono Shrine, and immerse ourselves in the retro atmosphere of Omoide Yokocho and Golden Gai, before touring the vibrant streets of Kabukicho." } },
      { title: { es: "2. Shin-Ōkubo", en: "2. Shin-Ōkubo" }, description: { es: "Luego nos dirigimos a Shin-Ōkubo, conocido como el Korea Town de Tokio, un barrio vibrante donde el K-Pop, el J-Pop, la moda y la cosmética coreana y japonesa son protagonistas. Sus calles comerciales invitan a descubrir desde merchandising de idols hasta productos de skincare que marcan tendencia a nivel mundial.", en: "Then we head to Shin-Ōkubo, known as Tokyo's Korea Town, a vibrant neighborhood where K-Pop, J-Pop, Korean and Japanese fashion and cosmetics are the stars. Its shopping streets invite you to discover idol merchandise and skincare products trending worldwide." } },
      { title: { es: "3. Harajuku", en: "3. Harajuku" }, description: { es: "Continuamos hacia Harajuku, donde la tranquilidad del Santuario Meiji Jingū se mezcla con la creatividad explosiva de Takeshita Street, cuna de la moda alternativa japonesa y de la expresión juvenil.", en: "We continue to Harajuku, where the tranquility of Meiji Jingū Shrine blends with the explosive creativity of Takeshita Street, birthplace of Japanese alternative fashion and youth expression." } },
      { title: { es: "4. Shibuya", en: "4. Shibuya" }, description: { es: "Finalmente, nos adentramos en Shibuya, epicentro de la cultura urbana y la juventud. Aquí nos esperan la entrañable estatua de Hachiko y el famoso Cruce de Shibuya, símbolo del ritmo incesante de la ciudad. Exploramos los icónicos Shibuya 109 y PARCO, donde cada piso sorprende con lo último en moda, arte, cultura y entretenimiento.", en: "Finally, we enter Shibuya, epicenter of urban culture and youth. Here awaits the beloved Hachiko statue and the famous Shibuya Crossing. We explore the iconic Shibuya 109 and PARCO, where every floor surprises with the latest in fashion, art, culture and entertainment." } },
    ],
    notes: { es: ["El Pop Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Pop Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 9:00 AM en la entrada de su hotel.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido en el costo del tour.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 9:00 AM at your hotel entrance.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Costo de Transporte: 1,000 yenes aproximadamente por persona."], en: ["Transport cost: approximately 1,000 yen per person."] },
    priceType: "group", maxPeople: 5,
  },
  {
    id: "night-tour",
    image: "/tours/night.jpg",
    name: { es: "Night Tour", en: "Night Tour" },
    duration: "4",
    startTime: "6:00 PM",
    meetingPoint: { es: "Estación de Shinjuku", en: "Shinjuku Station" },
    transportCost: "-",
    shortDescription: { es: "La magia de Tokio al caer la noche: vida nocturna, izakayas y neón.", en: "The magic of Tokyo at night: nightlife, izakayas and neon lights." },
    description: { es: "Vive la magia de Tokio al caer la noche con un Tour Nocturno. Explora la vibrante vida nocturna de la ciudad y descubre sus joyas ocultas mientras recorremos calles bulliciosas, lugares emblemáticos, callejones tradicionales llenos de pequeños bares (Izakaya) y tranquilos santuarios, todos iluminados por las luces de la metrópolis.", en: "Experience the magic of Tokyo at nightfall. Explore the vibrant nightlife and discover hidden gems as we walk bustling streets, iconic landmarks, traditional alleys full of small bars (Izakaya) and peaceful shrines, all illuminated by the city lights." },
    highlights: { es: ["Gobierno Metropolitano de Tokio", "Omoide Yokocho", "Golden Gai", "Kabukicho"], en: ["Tokyo Metropolitan Government", "Omoide Yokocho", "Golden Gai", "Kabukicho"] },
    itinerary: [
      { title: { es: "1. Edificio del Gobierno Metropolitano de Tokio", en: "1. Tokyo Metropolitan Government Building" }, description: { es: "Desde el mirador del Edificio del Gobierno Metropolitano de Tokio, contempla la inmensidad de la ciudad iluminada a tus pies y disfruta de vistas panorámicas que, en una tarde o noche despejada, se extienden hasta el Monte Fuji. A medida que avanza la noche, podrás presenciar las impresionantes proyecciones de mapping que transforman el edificio en un lienzo vibrante, combinando luz y sonido para crear una experiencia visual inolvidable.", en: "From the observatory of the Tokyo Metropolitan Government Building, contemplate the immensity of the illuminated city at your feet and enjoy panoramic views that, on a clear evening, extend to Mount Fuji. As night falls, you can witness stunning mapping projections that transform the building into a vibrant canvas, combining light and sound for an unforgettable experience." } },
      { title: { es: "2. Shinjuku", en: "2. Shinjuku" }, description: { es: "Después descendemos al corazón de Shinjuku, recorriendo los bares diminutos y llenos de historia de Omoide Yokocho y Golden Gai, donde cada rincón respira tradición y recuerdos de épocas pasadas. Admiramos el Santuario Hanazono, imponente y mágico bajo la luz de la noche, y caminamos entre las vibrantes calles de Kabukicho, vigilados por la imponente figura de Godzilla, sintiendo en cada paso la energía única y nocturna que hace de Tokio una ciudad que nunca duerme.", en: "Then we descend into the heart of Shinjuku, touring the tiny, history-filled bars of Omoide Yokocho and Golden Gai. We admire Hanazono Shrine, imposing and magical under the night light, and walk through the vibrant streets of Kabukicho, watched over by the imposing figure of Godzilla, feeling Tokyo's unique nocturnal energy." } },
    ],
    notes: { es: ["El Night Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Night Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 6:00 PM. Punto de encuentro: Estación de Shinjuku.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido en el costo del tour.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 6:00 PM. Meeting point: Shinjuku Station.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    priceType: "group", maxPeople: 5,
  },
  {
    id: "otaku-tour",
    image: "/tours/otaku.jpg",
    name: { es: "Otaku Tour", en: "Otaku Tour" },
    duration: "8", startTime: "9:00 AM",
    meetingPoint: { es: "Entrada de su hotel", en: "Hotel entrance" },
    transportCost: "¥1,000",
    shortDescription: { es: "El corazón de la cultura otaku: anime, manga, videojuegos y coleccionables.", en: "The heart of otaku culture: anime, manga, video games and collectibles." },
    description: { es: "Sumérgete en el corazón de la cultura otaku de Tokio con el Tour Otaku. Este recorrido es perfecto para los entusiastas del anime, manga, videojuegos y coleccionables que desean explorar los lugares icónicos que definen el universo de la cultura pop japonesa. Desde las vibrantes calles de Akihabara hasta las joyas escondidas de Nakano Broadway, descubrirás coleccionables raros, productos exclusivos y una completa inmersión en el mundo del anime, los videojuegos y la cultura pop japonesa. El Otaku Tour es totalmente personalizable.", en: "Immerse yourself in the heart of Tokyo's otaku culture. This tour is perfect for anime, manga, video game and collectible enthusiasts who want to explore the iconic places that define Japanese pop culture. From the vibrant streets of Akihabara to the hidden gems of Nakano Broadway, you'll discover rare collectibles, exclusive products and a complete immersion in the world of anime, video games and Japanese pop culture. The Otaku Tour is fully customizable." },
    highlights: { es: ["Akihabara", "Nakano Broadway"], en: ["Akihabara", "Nakano Broadway"] },
    itinerary: [
      { title: { es: "1. Akihabara", en: "1. Akihabara" }, description: { es: "Comenzamos en Akihabara, la meca geek–otaku por excelencia. Exploramos lugares icónicos como Radio Kaikan y Akiba Cultures Zone, repletos de figuras y coleccionables; Super Potato, un verdadero templo de los videojuegos retro; Mandarake y Surugaya, donde se esconden auténticos tesoros de manga y anime; y espacios como Tamashii Nations y AmiAmi, junto con otras tiendas especializadas conocidas por ofrecer algunos de los precios más bajos de Akihabara. El recorrido se completa con la visita a Bic Camera y Soft Map, un auténtico paraíso de gadgets, electrónica y tecnología japonesa.", en: "We start in Akihabara, the ultimate geek-otaku mecca. We explore iconic spots like Radio Kaikan and Akiba Cultures Zone, full of figures and collectibles; Super Potato, a true retro gaming temple; Mandarake and Surugaya, hiding authentic manga and anime treasures; Tamashii Nations, AmiAmi and other specialized stores known for some of the lowest prices in Akihabara. The tour includes Bic Camera and Soft Map, a true paradise of gadgets and Japanese technology." } },
      { title: { es: "2. Nakano Broadway", en: "2. Nakano Broadway" }, description: { es: "Luego nos dirigimos a Nakano Broadway, considerado por muchos el verdadero paraíso otaku retro. Este complejo es un auténtico laberinto de tiendas especializadas: desde Mandarake Henya, con su icónico torii, hasta Robot Robot, Anime World Star, Lashinbang y mucho más. En cada rincón se esconde una pieza de colección esperando ser descubierta. Finalizamos entre carteles antiguos y una arquitectura que conserva el espíritu del Japón de la era Shōwa, extendiéndose hacia callejones llenos de izakayas tradicionales y fachadas retro.", en: "Then we head to Nakano Broadway, considered by many the true retro otaku paradise. This complex is an authentic labyrinth of specialized shops: from Mandarake Henya with its iconic torii, to Robot Robot, Anime World Star, Lashinbang and much more. We finish among vintage posters and Shōwa-era architecture, extending to alleys full of traditional izakayas and retro facades." } },
    ],
    notes: { es: ["El Otaku Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Otaku Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 9:00 AM en la entrada de su hotel.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 9:00 AM at your hotel entrance.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Costo de Transporte: 1,000 yenes aproximadamente por persona."], en: ["Transport cost: approximately 1,000 yen per person."] },
    priceType: "group", maxPeople: 5,
  },
  {
    id: "nikko-tour",
    image: "/tours/nikko.jpg",
    name: { es: "Tour a Nikko", en: "Nikko Tour" },
    duration: "8", startTime: "8:00 AM",
    meetingPoint: { es: "Estación de Shinjuku", en: "Shinjuku Station" },
    transportCost: "¥12,000",
    shortDescription: { es: "Templos declarados Patrimonio de la Humanidad por la UNESCO, naturaleza imponente y legado histórico del shogunato.", en: "Temples declared UNESCO World Heritage Sites, imposing nature and the historical legacy of the shogunate." },
    description: { es: "Explora la impresionante belleza y la rica historia de Nikkō en este tour de un día lleno de experiencias. Conocida por sus sagrados templos y santuarios declarados Patrimonio de la Humanidad por la UNESCO, así como por sus espectaculares paisajes naturales, Nikkō ofrece una escapada perfecta al corazón espiritual e histórico de Japón.", en: "Explore the stunning beauty and rich history of Nikkō on this experience-filled day tour. Known for its sacred UNESCO World Heritage temples and shrines, as well as its spectacular natural landscapes, Nikkō offers a perfect escape to the spiritual and historic heart of Japan." },
    highlights: { es: ["Puente Shinkyō", "Templo Rinnō-ji", "Santuario Tōshō-gū", "Templo Futarasan", "Mausoleo Taiyūin"], en: ["Shinkyō Bridge", "Rinnō-ji Temple", "Tōshō-gū Shrine", "Futarasan Temple", "Taiyūin Mausoleum"] },
    itinerary: [
      { title: { es: "Puente Shinkyō", en: "Shinkyō Bridge" }, description: { es: "Comenzamos en el icónico Puente Shinkyō, uno de los lugares más pintorescos de Japón, que se arquea elegantemente sobre el río Daiya. Este puente sagrado marca la entrada a los templos de Nikkō y ofrece vistas impresionantes, especialmente durante el otoño.", en: "We begin at the iconic Shinkyō Bridge, one of the most picturesque places in Japan, elegantly arching over the Daiya River. This sacred bridge marks the entrance to Nikkō's temples and offers stunning views, especially during autumn." } },
      { title: { es: "Templo Rinnō-ji", en: "Rinnō-ji Temple" }, description: { es: "Visitamos el histórico Templo Rinnō-ji, fundado en el siglo VIII, un importante sitio espiritual que alberga hermosos jardines y el Salón de los Tres Budas, donde se resguardan tres impresionantes estatuas doradas de Buda.", en: "We visit the historic Rinnō-ji Temple, founded in the 8th century, an important spiritual site housing beautiful gardens and the Hall of the Three Buddhas, where three impressive golden Buddha statues are kept." } },
      { title: { es: "Santuario Nikkō Tōshō-gū", en: "Nikkō Tōshō-gū Shrine" }, description: { es: "Seguimos hacia la Pagoda de Cinco Pisos y el majestuoso Santuario Nikkō Tōshō-gū, lugar de descanso de Tokugawa Ieyasu, fundador del shogunato Tokugawa. Aquí podrás admirar la rica arquitectura y los intrincados relieves, incluyendo figuras icónicas como los Tres Monos Sabios, el Gato Durmiente y los \"Elefantes Imaginarios\".", en: "We continue to the Five-Story Pagoda and the majestic Nikkō Tōshō-gū Shrine, resting place of Tokugawa Ieyasu, founder of the Tokugawa shogunate. Here you can admire the rich architecture and intricate reliefs, including iconic figures like the Three Wise Monkeys, the Sleeping Cat and the \"Imaginary Elephants\"." } },
      { title: { es: "Templo Nikkō Futarasan", en: "Nikkō Futarasan Temple" }, description: { es: "Visitamos el sereno Templo Nikkō Futarasan, fundado en el año 767 y dedicado a las deidades de las montañas sagradas de Nikkō. Rodeado de exuberante vegetación, este templo ofrece un cierre apacible, ideal para la reflexión.", en: "We visit the serene Nikkō Futarasan Temple, founded in 767 and dedicated to the deities of Nikkō's sacred mountains. Surrounded by lush vegetation, this temple offers a peaceful closing, ideal for reflection." } },
      { title: { es: "Mausoleo Taiyūin", en: "Taiyūin Mausoleum" }, description: { es: "Nuestra última parada es el Mausoleo Taiyūin, lugar de descanso de Tokugawa Iemitsu, tercer shōgun del shogunato Tokugawa. Este templo-mausoleo combina solemnidad y riqueza arquitectónica, reflejando la grandeza y el poder de la era Tokugawa.", en: "Our last stop is the Taiyūin Mausoleum, resting place of Tokugawa Iemitsu, third shōgun of the Tokugawa shogunate. This temple-mausoleum combines solemnity and architectural richness, reflecting the grandeur of the Tokugawa era." } },
    ],
    notes: { es: ["El Nikko Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Nikko Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 8:00 AM. Punto de encuentro: Estación de Shinjuku.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 8:00 AM. Meeting point: Shinjuku Station.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Transporte y pases: 12,000 yenes aproximadamente por persona.", "Entradas: 2,200 yenes aproximadamente por persona (Puente, templos y santuarios)."], en: ["Transport and passes: approximately 12,000 yen per person.", "Entry fees: approximately 2,200 yen per person (Bridge, temples and shrines)."] },
    priceType: "group", maxPeople: 5,
  },
  {
    id: "kamakura-enoshima",
    image: "/tours/kamakura.jpg",
    name: { es: "Kamakura & Enoshima Tour", en: "Kamakura & Enoshima Tour" },
    duration: "8", startTime: "9:00 AM",
    meetingPoint: { es: "Entrada de su hotel", en: "Hotel entrance" },
    transportCost: "¥4,300",
    shortDescription: { es: "Encanto ancestral de Kamakura y belleza costera de Enoshima con vistas al Monte Fuji.", en: "Ancient charm of Kamakura and coastal beauty of Enoshima with views of Mount Fuji." },
    description: { es: "Descubre el encanto ancestral de Kamakura y la belleza costera de Enoshima en este inolvidable tour de un día. Esta experiencia combina los tesoros históricos de Japón con impresionantes vistas al mar, ofreciendo un equilibrio perfecto entre cultura y relajación.", en: "Discover the ancestral charm of Kamakura and the coastal beauty of Enoshima on this unforgettable day tour. This experience combines Japan's historical treasures with stunning ocean views, offering a perfect balance between culture and relaxation." },
    highlights: { es: ["Komachi Street", "Tsurugaoka Hachiman-gū", "Gran Buda de Kamakura", "Isla de Enoshima"], en: ["Komachi Street", "Tsurugaoka Hachiman-gū", "Great Buddha of Kamakura", "Enoshima Island"] },
    itinerary: [
      { title: { es: "Kamakura", en: "Kamakura" }, description: { es: "Comenzamos en Kamakura caminando por la pintoresca Komachi Street, llena de tiendas, aromas y recuerdos del Japón tradicional, que nos conduce hasta el Santuario Tsurugaoka Hachiman-gū, donde la espiritualidad y la calma nos envuelven.", en: "We start in Kamakura walking through picturesque Komachi Street, full of shops, aromas and memories of traditional Japan, leading us to Tsurugaoka Hachiman-gū Shrine, where spirituality and calm surround us." } },
      { title: { es: "Gran Buda de Kamakura", en: "Great Buddha of Kamakura" }, description: { es: "Nuestro paseo continúa abordando el pintoresco tranvía Enoden, que nos lleva por calles llenas de encanto local hasta el majestuoso Templo Kōtoku-in, hogar del imponente y sereno Gran Buda de Kamakura, un símbolo de espiritualidad e historia.", en: "Our walk continues boarding the picturesque Enoden tram, taking us through charming local streets to the majestic Kōtoku-in Temple, home of the imposing and serene Great Buddha of Kamakura, a symbol of spirituality and history." } },
      { title: { es: "Isla de Enoshima", en: "Enoshima Island" }, description: { es: "Retomamos el Enoden para seguir serpenteando junto a la costa hasta la Isla de Enoshima, donde la brisa marina y la naturaleza se mezclan con la cultura local. Recorremos calles llenas de vida y mercados tradicionales, y ascendemos al Santuario Enoshima, desde cuyos miradores se disfrutan panorámicas espectaculares del océano y la isla. Con un poco de suerte, el Monte Fuji se asoma en el horizonte.", en: "We take the Enoden again, winding along the coast to Enoshima Island, where the sea breeze and nature blend with local culture. We walk through lively streets and traditional markets, and climb to Enoshima Shrine, from whose viewpoints you can enjoy spectacular panoramic views of the ocean and the island. With a bit of luck, Mount Fuji peeks over the horizon." } },
    ],
    notes: { es: ["El Kamakura & Enoshima Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Kamakura & Enoshima Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 9:00 AM en la entrada de su hotel.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 9:00 AM at your hotel entrance.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Transporte: 4,300 yenes aproximadamente por persona.", "Tickets: Entre 200 y 800 yenes aproximadamente por persona (Templo en Kamakura y escaleras mecánicas en Enoshima)."], en: ["Transport: approximately 4,300 yen per person.", "Tickets: Between 200 and 800 yen approximately per person (Temple in Kamakura and escalators in Enoshima)."] },
    priceType: "group", maxPeople: 5,
  },
  {
    id: "hakone-tour",
    image: "/tours/hakone.jpg",
    name: { es: "Hakone Tour", en: "Hakone Tour" },
    duration: "8", startTime: "8:00 AM",
    meetingPoint: { es: "Estación de Shinjuku", en: "Shinjuku Station" },
    transportCost: "¥7,100",
    shortDescription: { es: "Naturaleza, aguas termales y las vistas más emblemáticas del Monte Fuji.", en: "Nature, hot springs and the most iconic views of Mount Fuji." },
    description: { es: "El Hakone Tour es la elección ideal para quienes desean condensar naturaleza, relax y cultura en una sola jornada. Un recorrido armonioso entre paisajes volcánicos, aguas termales y algunas de las vistas más emblemáticas del Monte Fuji.", en: "The Hakone Tour is the ideal choice for those who want to condense nature, relaxation and culture into a single day. A harmonious tour through volcanic landscapes, hot springs and some of the most iconic views of Mount Fuji." },
    highlights: { es: ["Onsen de pies", "Hakone Ropeway & Ōwakudani", "Lago Ashi & Barco pirata", "Santuario Hakone"], en: ["Foot onsen", "Hakone Ropeway & Ōwakudani", "Lake Ashi & Pirate ship", "Hakone Shrine"] },
    itinerary: [
      { title: { es: "Estación de Sōunzan & Onsen de pies", en: "Sōunzan Station & Foot Onsen" }, description: { es: "La experiencia comienza en la Estación de Sōunzan, donde nos detenemos a disfrutar de un onsen de pies gratuito, un primer momento de descanso mientras el entorno montañoso envuelve el paisaje. Desde allí abordamos el Hakone Ropeway, un teleférico que ofrece vistas aéreas espectaculares y, si las condiciones climáticas acompañan, la posibilidad de contemplar el Monte Fuji en todo su esplendor.", en: "The experience begins at Sōunzan Station, where we stop to enjoy a free foot onsen, a first moment of rest while the mountainous surroundings envelop the landscape. From there we board the Hakone Ropeway, a cable car offering spectacular aerial views and, weather permitting, the chance to contemplate Mount Fuji in all its splendor." } },
      { title: { es: "Valle de Ōwakudani", en: "Ōwakudani Valley" }, description: { es: "El trayecto nos conduce al Valle de Ōwakudani, una zona volcánica activa conocida por sus fumarolas sulfurosas y sus célebres huevos negros, tradicionalmente asociados con la longevidad.", en: "The journey takes us to Ōwakudani Valley, an active volcanic area known for its sulfurous fumaroles and famous black eggs, traditionally associated with longevity." } },
      { title: { es: "Lago Ashi & Barco pirata", en: "Lake Ashi & Pirate Ship" }, description: { es: "Tras la visita, retomamos el Ropeway hasta llegar al Lago Ashi, donde navegamos a bordo de los icónicos barcos piratas, una travesía tranquila que enmarca el paisaje natural desde el agua.", en: "After the visit, we take the Ropeway to Lake Ashi, where we sail aboard the iconic pirate ships, a peaceful crossing that frames the natural landscape from the water." } },
      { title: { es: "Santuario Hakone", en: "Hakone Shrine" }, description: { es: "El recorrido culmina en el Santuario Hakone, un enclave de profunda espiritualidad, famoso por su Torii de la Paz que emerge sobre el lago. Esta imagen, una de las postales más reconocidas de Japón, pone el broche final a un día que combina serenidad, tradición y belleza natural.", en: "The tour culminates at Hakone Shrine, a deeply spiritual enclave, famous for its Peace Torii emerging over the lake. This image, one of Japan's most recognized postcards, caps off a day combining serenity, tradition and natural beauty." } },
    ],
    notes: { es: ["El Hakone Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Hakone Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 8:00 AM. Punto de encuentro: Estación de Shinjuku.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 8:00 AM. Meeting point: Shinjuku Station.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Pase y transporte: 7,100 yenes aproximadamente por persona."], en: ["Pass and transport: approximately 7,100 yen per person."] },
    priceType: "group", maxPeople: 5,
  },
  {
    id: "kawagoe-tour",
    image: "/tours/kawagoe.jpg",
    name: { es: "Kawagoe Tour", en: "Kawagoe Tour" },
    duration: "8", startTime: "9:00 AM",
    meetingPoint: { es: "Estación de Ikebukuro", en: "Ikebukuro Station" },
    transportCost: "¥1,800",
    shortDescription: { es: "Viaje en el tiempo: kimono, sake, jinrikisha y la esencia del período Edo.", en: "Time travel: kimono, sake, jinrikisha and the essence of the Edo period." },
    description: { es: "El Kawagoe Tour te invita a un viaje en el tiempo, recorriendo calles tradicionales y descubriendo templos y santuarios centenarios que conservan la esencia del Japón histórico.", en: "The Kawagoe Tour invites you on a journey through time, walking traditional streets and discovering centuries-old temples and shrines that preserve the essence of historic Japan." },
    highlights: { es: ["Almacenes del Período Edo", "Santuarios Hikawa y Kumano", "Templo Kita-in", "Torre Toki no Kane", "Experiencia con kimono y jinrikisha"], en: ["Edo Period warehouses", "Hikawa & Kumano Shrines", "Kita-in Temple", "Toki no Kane Tower", "Kimono & jinrikisha experience"] },
    itinerary: [
      { title: { es: "Calles comerciales y almacenes del Período Edo", en: "Shopping streets and Edo Period warehouses" }, description: { es: "Comenzamos recorriendo calles comerciales donde lo moderno y lo tradicional se entrelazan. Más adelante, descubrimos históricos almacenes y comercios del Período Edo, cuyas fachadas sobrias pero elegantes nos transportan al Japón de siglos pasados. Cada detalle arquitectónico refleja la vida cotidiana y el comercio de la época.", en: "We start walking through shopping streets where the modern and traditional intertwine. Further on, we discover historic Edo Period warehouses, whose sober but elegant facades transport us to centuries-old Japan." } },
      { title: { es: "Templos y santuarios", en: "Temples and shrines" }, description: { es: "Visitamos templos y santuarios históricos como los santuarios Hikawa y Kumano, y el famoso Templo Kita-in, donde los rituales tradicionales y la espiritualidad se sienten en cada paso. Admiramos la emblemática torre del reloj Toki no Kane y recorremos un antiguo palacio.", en: "We visit historic temples and shrines like Hikawa and Kumano shrines, and the famous Kita-in Temple. We admire the emblematic Toki no Kane clock tower and tour an ancient palace." } },
      { title: { es: "Experiencia tradicional completa", en: "Complete traditional experience" }, description: { es: "El Kawagoe Tour te lleva a vivir la tradición japonesa de manera auténtica: vistiéndote con un kimono, degustando sake y dulces típicos, y paseando en Jinrikisha por las calles que parecen detenidas en el tiempo. Una experiencia que activa todos los sentidos y te hace sentir como un local inmerso en Japón.", en: "The Kawagoe Tour takes you to live Japanese tradition authentically: dressing in a kimono, tasting sake and typical sweets, and riding a Jinrikisha through streets that seem frozen in time. An experience that activates all your senses." } },
    ],
    notes: { es: ["El Kawagoe Tour es una experiencia privada y grupal, para 2 a 12 personas.", "Precio por persona."], en: ["The Kawagoe Tour is a private group experience for 2 to 12 people.", "Price per person."] },
    details: { es: ["El tour comienza a las 9:00 AM. Punto de encuentro: Estación de Ikebukuro.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido.", "El precio no incluye tickets, pases, comidas y bebidas fuera de las degustaciones preseleccionadas.", "No incluye accesorios para vestir kimono (wagasa, bolso, abanico, etc.)."], en: ["Tour starts at 9:00 AM. Meeting point: Ikebukuro Station.", "Walking and public transport.", "Transport is not included.", "Price does not include tickets, passes, meals and drinks outside preselected tastings.", "Does not include kimono accessories (wagasa, bag, fan, etc.)."] },
    includes: { es: ["Renta de Kimono para mujeres (con peinado incluido), hombres y niños.", "Aperitivos y bebidas seleccionadas.", "Degustación de sake seleccionado.", "Un paseo en Jinrikisha (vehículo tradicional japonés) de 10 minutos: 2 personas por paseo.", "Ticket Honmaru-goten Palace."], en: ["Kimono rental for women (with hairstyling included), men and children.", "Selected snacks and drinks.", "Selected sake tasting.", "A 10-minute Jinrikisha ride (traditional Japanese vehicle): 2 people per ride.", "Honmaru-goten Palace ticket."] },
    extraCosts: { es: ["Costo de Transporte: 1,800 yenes aproximadamente por persona."], en: ["Transport cost: approximately 1,800 yen per person."] },
    priceType: "person", maxPeople: 12,
  },
  {
    id: "mt-fuji-kawaguchiko",
    image: "/tours/fuji.jpg",
    name: { es: "Monte Fuji & Kawaguchiko Tour", en: "Mt. Fuji & Kawaguchiko Tour" },
    duration: "8", startTime: "8:00 AM",
    meetingPoint: { es: "Estación de Shinjuku", en: "Shinjuku Station" },
    transportCost: "¥4,200 - ¥7,200",
    shortDescription: { es: "Paisajes emblemáticos del Monte Fuji, lago Kawaguchiko y la icónica Pagoda Chureito.", en: "Iconic Mount Fuji landscapes, Lake Kawaguchiko and the iconic Chureito Pagoda." },
    description: { es: "Monte Fuji & Kawaguchiko Tour es ideal para quienes desean descubrir uno de los paisajes más emblemáticos de Japón de manera relajada y bien organizada. Nos alejamos del bullicio de Tokio para disfrutar de la naturaleza, las vistas y el encanto de la región del Monte Fuji, combinando los mejores puntos icónicos.", en: "Mt. Fuji & Kawaguchiko Tour is ideal for those who want to discover one of Japan's most iconic landscapes in a relaxed and well-organized way. We escape Tokyo's bustle to enjoy nature, views and the charm of the Mount Fuji region, combining the best iconic spots." },
    highlights: { es: ["Kawaguchiko", "Panoramic Ropeway", "Crucero por el lago", "Pagoda Chureito"], en: ["Kawaguchiko", "Panoramic Ropeway", "Lake cruise", "Chureito Pagoda"] },
    itinerary: [
      { title: { es: "Kawaguchiko", en: "Kawaguchiko" }, description: { es: "Comenzamos en la Estación de Shinjuku y viajamos hacia Kawaguchiko, dejando atrás el paisaje urbano y entrando en la serenidad de esta zona. En Kawaguchiko, hacemos una parada en el famoso kombini Lawson, donde se puede admirar y fotografiar al Monte Fuji integrado en la vida cotidiana local.", en: "We start at Shinjuku Station and travel to Kawaguchiko, leaving behind the urban landscape and entering the serenity of this area. In Kawaguchiko, we stop at the famous Lawson convenience store, where you can admire and photograph Mount Fuji integrated into local everyday life." } },
      { title: { es: "Mt. Fuji Panoramic Ropeway", en: "Mt. Fuji Panoramic Ropeway" }, description: { es: "Continuamos con el Mt. Fuji Panoramic Ropeway, que nos lleva a un mirador con vistas espectaculares del Lago Kawaguchiko, la ciudad y el Monte Fuji.", en: "We continue with the Mt. Fuji Panoramic Ropeway, which takes us to a viewpoint with spectacular views of Lake Kawaguchiko, the city and Mount Fuji." } },
      { title: { es: "Crucero por el lago", en: "Lake Cruise" }, description: { es: "Luego disfrutamos de un paseo en el Boat Cruise por el lago, una experiencia relajante que permite contemplar el icónico volcán y el entorno montañoso.", en: "Then we enjoy a Boat Cruise on the lake, a relaxing experience that allows you to contemplate the iconic volcano and the mountainous surroundings." } },
      { title: { es: "Pagoda Chureito", en: "Chureito Pagoda" }, description: { es: "Finalizamos en la Chureito Pagoda, ubicada en el Santuario Arakura Sengen, uno de los miradores más famosos de Japón. Tras subir sus escaleras, la vista combina la pagoda, la ciudad y el Monte Fuji al fondo, ofreciendo una de las postales más icónicas del país y cerrando el día de manera inolvidable.", en: "We finish at Chureito Pagoda, located at Arakura Sengen Shrine, one of Japan's most famous viewpoints. After climbing its stairs, the view combines the pagoda, the city and Mount Fuji in the background, offering one of the country's most iconic postcards and closing the day unforgettably." } },
    ],
    notes: { es: ["El Monte Fuji & Kawaguchiko Tour es una experiencia privada, individual o grupal, para 1 a 5 personas.", "El precio corresponde al grupo completo, no por persona.", "Por cada persona adicional de 13 años en adelante, se aplica un costo extra de 10.000 yenes.", "Para personas adicionales de 6 a 12 años, el costo es de 5.000 yenes por persona.", "Los menores de 6 años no tienen costo como personas adicionales."], en: ["The Mt. Fuji & Kawaguchiko Tour is a private experience for 1 to 5 people.", "The price is for the entire group, not per person.", "For each additional person aged 13+, an extra cost of 10,000 yen applies.", "For additional people aged 6-12, the cost is 5,000 yen per person.", "Children under 6 are free as additional participants."] },
    details: { es: ["El tour comienza a las 8:00 AM. Punto de encuentro: Estación de Shinjuku.", "El recorrido se realiza caminando y utilizando transporte público.", "El transporte no está incluido.", "Tickets, pases, comidas y bebidas no están incluidos."], en: ["Tour starts at 8:00 AM. Meeting point: Shinjuku Station.", "Walking and public transport.", "Transport is not included.", "Tickets, passes, meals and drinks are not included."] },
    extraCosts: { es: ["Paseo en barco: 1,000 yenes aproximadamente por persona.", "Teleférico: 1,000 yenes aproximadamente por persona.", "Transporte Tokio-Kawaguchiko: 4,200 yenes con JR Pass / 7,200 yenes sin JR Pass, aproximadamente por persona (ida y vuelta)."], en: ["Boat ride: approximately 1,000 yen per person.", "Ropeway: approximately 1,000 yen per person.", "Tokyo-Kawaguchiko transport: 4,200 yen with JR Pass / 7,200 yen without JR Pass, approximately per person (round trip)."] },
    priceType: "group", maxPeople: 5,
  },
];

export const seasonalTours: SeasonalTour[] = [
  { id: "sakura-tour", image: "/tours/sakura.jpg", name: { es: "Sakura Tour", en: "Sakura Tour" }, description: { es: "Experiencia de temporada pensada para disfrutar la floración de los cerezos en diferentes parques y rincones seleccionados de Tokio. A lo largo del recorrido, combinamos paseos tranquilos, naturaleza y momentos para disfrutar del Hanami (花見). El tour incluye entradas a los parques, aperitivos y bebidas de edición limitada propios de la temporada.", en: "Seasonal experience designed to enjoy cherry blossom season in selected parks and spots in Tokyo. Along the tour, we combine peaceful walks, nature and moments to enjoy Hanami (花見). The tour includes park entries, snacks and limited edition seasonal drinks." }, type: { es: "Tour grupal, no privado", en: "Group tour, not private" } },
  { id: "kawagoe-matsuri", image: "/tours/kawagoematsuri.jpg", name: { es: "Kawagoe Matsuri Free Tour", en: "Kawagoe Matsuri Free Tour" }, description: { es: "El Kawagoe Matsuri es uno de los festivales más importantes de la prefectura de Saitama y se celebra cada octubre en la histórica ciudad de Kawagoe, conocida como la \"Pequeña Edo\". Durante el festival, las calles se llenan de grandes carrozas tradicionales llamadas Dashi (山車), música, danzas y encuentros entre barrios, recreando el espíritu del Japón del período Edo. A lo largo del recorrido, numerosos puestos de comida callejera Yatai (屋台) donde es posible probar especialidades típicas de los matsuri japoneses.", en: "The Kawagoe Matsuri is one of the most important festivals in Saitama prefecture, held every October in the historic city of Kawagoe, known as \"Little Edo\". During the festival, streets fill with large traditional floats called Dashi (山車), music, dances and neighborhood encounters, recreating the spirit of Edo-period Japan. Along the route, numerous street food stalls Yatai (屋台) where you can try typical matsuri specialties." }, type: { es: "Tour grupal, no privado", en: "Group tour, not private" } },
  { id: "higanbana-tour", image: "/tours/higanbana.jpg", name: { es: "Higanbana Tour", en: "Higanbana Tour" }, description: { es: "Este tour de temporada te lleva al Parque Kinchakuda Manjushage, en la prefectura de Saitama, famoso por la impresionante floración de la Higanbana (彼岸花), también conocida como Lycoris Radiata, Red Spider Lily o Flor del Infierno. Durante pocas semanas al año, miles de flores rojas cubren el parque y transforman el paisaje en una escena única.", en: "This seasonal tour takes you to Kinchakuda Manjushage Park in Saitama prefecture, famous for the stunning Higanbana bloom (彼岸花), also known as Lycoris Radiata, Red Spider Lily or Hell Flower. For just a few weeks each year, thousands of red flowers cover the park transforming the landscape into a unique scene." }, type: { es: "Tour grupal, no privado", en: "Group tour, not private" } },
];
