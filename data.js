const TOURISM_DATA = {

  beaches: {
    name: "Fukwe & Visiwa",
    icon: "🏝️",

    regions: {

      "Dar es Salaam": [
        {
          name: "Mbudya Island",
          type: "Kisiwa",
          image: "images/beaches/mbudya.jpg",
          description: "Kisiwa kizuri karibu na Dar es Salaam kwa beach day, kuogelea na mapumziko."
        },
        {
          name: "Bongoyo Island",
          type: "Kisiwa",
          image: "images/beaches/bongoyo.jpg",
          description: "Kisiwa chenye fukwe nzuri na mazingira mazuri kwa mapumziko."
        },
        {
          name: "Coco Beach",
          type: "Beach",
          image: "images/beaches/coco-beach.jpg",
          description: "Moja ya maeneo maarufu ya ufukweni Dar es Salaam."
        },
        {
          name: "Kigamboni",
          type: "Beach Area",
          image: "images/beaches/kigamboni.jpg",
          description: "Eneo lenye fukwe na resorts mbalimbali kwa mapumziko."
        }
      ],

      "Pwani": [
        {
          name: "Bagamoyo",
          type: "Beach & History",
          image: "images/beaches/bagamoyo.jpg",
          description: "Pwani yenye historia, utamaduni na mandhari nzuri."
        },
        {
          name: "Saadani",
          type: "Beach & Safari",
          image: "images/beaches/saadani.jpg",
          description: "Eneo la kipekee linalounganisha safari ya wanyamapori na beach."
        }
      ],

      "Tanga": [
        {
          name: "Pangani",
          type: "Beach Destination",
          image: "images/beaches/pangani.jpg",
          description: "Fukwe, historia na utamaduni wa pwani ya Tanga."
        },
        {
          name: "Ushongo Beach",
          type: "Beach",
          image: "images/beaches/ushongo.jpg",
          description: "Beach tulivu inayofaa kwa mapumziko."
        }
      ],

      "Lindi": [
        {
          name: "Kilwa",
          type: "Beach & History",
          image: "images/beaches/kilwa.jpg",
          description: "Eneo lenye historia kubwa na mandhari ya pwani."
        }
      ],

      "Mtwara": [
        {
          name: "Mikindani",
          type: "Coastal Experience",
          image: "images/beaches/mikindani.jpg",
          description: "Historia, utamaduni na mazingira mazuri ya pwani ya kusini."
        },
        {
          name: "Msimbati",
          type: "Beach",
          image: "images/beaches/msimbati.jpg",
          description: "Eneo la pwani lenye mazingira mazuri kwa mapumziko."
        }
      ],

      "Zanzibar": [
        {
          name: "Nungwi",
          type: "Beach",
          image: "images/beaches/nungwi.jpg",
          description: "Moja ya beach destinations maarufu Zanzibar."
        },
        {
          name: "Kendwa",
          type: "Beach",
          image: "images/beaches/kendwa.jpg",
          description: "Beach maarufu kwa sunset na mapumziko."
        },
        {
          name: "Paje",
          type: "Beach & Adventure",
          image: "images/beaches/paje.jpg",
          description: "Eneo maarufu kwa beach na water activities."
        }
      ],

      "Mafia": [
        {
          name: "Mafia Island",
          type: "Kisiwa",
          image: "images/beaches/mafia.jpg",
          description: "Kisiwa chenye marine experiences na fukwe nzuri."
        }
      ],

      "Mwanza": [
        {
          name: "Saanane Island",
          type: "Kisiwa",
          image: "images/beaches/saanane.jpg",
          description: "Kisiwa cha Lake Victoria chenye nature na wildlife experiences."
        }
      ],

      "Kigoma": [
        {
          name: "Lake Tanganyika",
          type: "Ziwa",
          image: "images/beaches/tanganyika.jpg",
          description: "Mandhari ya Lake Tanganyika na water experiences."
        }
      ],

      "Kagera": [
        {
          name: "Lake Victoria",
          type: "Ziwa",
          image: "images/beaches/victoria.jpg",
          description: "Mandhari na shughuli mbalimbali zinazohusiana na Lake Victoria."
        }
      ]

    }
  },


  mountains: {
    name: "Milima & Hiking",
    icon: "🏔️",

    regions: {

      "Kilimanjaro": [
        {
          name: "Mount Kilimanjaro",
          type: "Mountain",
          image: "images/mountains/kilimanjaro.jpg",
          description: "Mlima maarufu wa Tanzania kwa mountain trekking."
        }
      ],

      "Arusha": [
        {
          name: "Mount Meru",
          type: "Mountain",
          image: "images/mountains/meru.jpg",
          description: "Mlima maarufu kwa hiking karibu na Arusha."
        }
      ],

      "Morogoro": [
        {
          name: "Uluguru Mountains",
          type: "Mountain",
          image: "images/mountains/uluguru.jpg",
          description: "Milima yenye hiking, nature walks na waterfalls."
        }
      ],

      "Mbeya": [
        {
          name: "Mbeya Mountains",
          type: "Mountain",
          image: "images/mountains/mbeya.jpg",
          description: "Mandhari ya milima na hiking kusini-magharibi mwa Tanzania."
        }
      ]
    }
  },


  safari: {
    name: "Safari & Wanyamapori",
    icon: "🦁",

    regions: {

      "Arusha": [
        {
          name: "Arusha National Park",
          type: "National Park",
          image: "images/safari/arusha.jpg",
          description: "Wildlife, forest na mountain scenery."
        }
      ],

      "Mara": [
        {
          name: "Serengeti National Park",
          type: "National Park",
          image: "images/safari/serengeti.jpg",
          description: "Moja ya destinations maarufu duniani kwa wildlife safari."
        }
      ],

      "Manyara": [
        {
          name: "Lake Manyara National Park",
          type: "National Park",
          image: "images/safari/manyara.jpg",
          description: "Wildlife, forest na mandhari ya ziwa."
        }
      ],

      "Kilimanjaro": [
        {
          name: "Amboseli View",
          type: "Safari Experience",
          image: "images/safari/kilimanjaro.jpg",
          description: "Mandhari ya Kilimanjaro na safari experiences."
        }
      ],

      "Katavi": [
        {
          name: "Katavi National Park",
          type: "National Park",
          image: "images/safari/katavi.jpg",
          description: "Eneo lenye wildlife na wilderness experiences."
        }
      ],

      "Rukwa": [
        {
          name: "Lake Rukwa",
          type: "Nature",
          image: "images/safari/rukwa.jpg",
          description: "Mandhari ya ziwa na mazingira ya asili."
        }
      ]
    }
  },


  nature: {
    name: "Nature & Adventure",
    icon: "🌿",

    regions: {

      "Morogoro": [
        {
          name: "Udzungwa Mountains",
          type: "Nature & Hiking",
          image: "images/nature/udzungwa.jpg",
          description: "Hiking, misitu na waterfalls."
        }
      ],

      "Tanga": [
        {
          name: "Amani Nature Reserve",
          type: "Forest",
          image: "images/nature/amani.jpg",
          description: "Forest experiences na nature walks."
        }
      ],

      "Iringa": [
        {
          name: "Ruaha Landscape",
          type: "Nature",
          image: "images/nature/iringa.jpg",
          description: "Mandhari ya asili na adventure."
        }
      ],

      "Mbeya": [
        {
          name: "Ngozi Crater Lake",
          type: "Adventure",
          image: "images/nature/ngozi.jpg",
          description: "Adventure na hiking katika eneo la Ngozi."
        }
      ]
    }
  },


  culture: {
    name: "Utamaduni & Historia",
    icon: "🏛️",

    regions: {

      "Dar es Salaam": [
        {
          name: "Makumbusho ya Taifa",
          type: "History & Culture",
          image: "images/culture/museum.jpg",
          description: "Historia na urithi wa Tanzania."
        }
      ],

      "Zanzibar": [
        {
          name: "Stone Town",
          type: "Historical Site",
          image: "images/culture/stone-town.jpg",
          description: "Historia, utamaduni na usanifu wa Zanzibar."
        }
      ],

      "Bagamoyo": [
        {
          name: "Bagamoyo Historical Sites",
          type: "History",
          image: "images/culture/bagamoyo.jpg",
          description: "Maeneo ya kihistoria na utamaduni wa pwani."
        }
      ],

      "Dodoma": [
        {
          name: "Kondoa Rock Art",
          type: "Heritage",
          image: "images/culture/kondoa.jpg",
          description: "Michoro ya kale ya miambani na urithi wa Tanzania."
        }
      ]
    }
  },


  nightlife: {
    name: "Bars, Clubs & Lounges",
    icon: "🍸",

    regions: {

      "Dar es Salaam": [
        {
          name: "Masaki",
          type: "Bars & Lounges",
          image: "images/bars-clubs-lounges/masaki.jpg",
          description: "Eneo lenye restaurants, bars, clubs na lounges."
        }
      ],

      "Arusha": [
        {
          name: "Arusha Nightlife",
          type: "Bars & Clubs",
          image: "images/bars-clubs-lounges/arusha.jpg",
          description: "Maeneo mbalimbali ya burudani ya usiku."
        }
      ],

      "Mwanza": [
        {
          name: "Mwanza Nightlife",
          type: "Bars & Clubs",
          image: "images/bars-clubs-lounges/mwanza.jpg",
          description: "Entertainment, bars, clubs na lounges."
        }
      ],

      "Dodoma": [
        {
          name: "Dodoma Nightlife",
          type: "Bars & Lounges",
          image: "images/bars-clubs-lounges/dodoma.jpg",
          description: "Nightlife experiences mbalimbali Dodoma."
        }
      ],

      "Zanzibar": [
        {
          name: "Zanzibar Nightlife",
          type: "Bars & Lounges",
          image: "images/bars-clubs-lounges/zanzibar.jpg",
          description: "Beach bars na nightlife experiences Zanzibar."
        }
      ]
    }
  },


  restaurants: {
    name: "Chakula & Restaurants",
    icon: "🍽️",

    regions: {

      "Dar es Salaam": [
        {
          name: "Dar es Salaam Dining",
          type: "Restaurants",
          image: "images/restaurants/dar.jpg",
          description: "Dining experiences kutoka local food hadi fine dining."
        }
      ],

      "Zanzibar": [
        {
          name: "Forodhani",
          type: "Local Food",
          image: "images/restaurants/forodhani.jpg",
          description: "Vyakula vya Zanzibar na street food."
        }
      ],

      "Arusha": [
        {
          name: "Arusha Dining",
          type: "Restaurants",
          image: "images/restaurants/arusha.jpg",
          description: "Dining experiences mbalimbali Arusha."
        }
      ]
    }
  },


  luxury: {
    name: "Luxury Experiences",
    icon: "💎",

    regions: {

      "Zanzibar": [
        {
          name: "Luxury Beach Escape",
          type: "Luxury Experience",
          image: "images/luxury/zanzibar.jpg",
          description: "Beach, resorts, private transfers na relaxation."
        }
      ],

      "Arusha": [
        {
          name: "Luxury Safari",
          type: "Luxury Safari",
          image: "images/luxury/safari.jpg",
          description: "Safari ya kifahari yenye private experiences."
        }
      ],

      "Dar es Salaam": [
        {
          name: "Luxury City Experience",
          type: "Luxury",
          image: "images/luxury/dar.jpg",
          description: "Luxury dining, accommodation na city experiences."
        }
      ]
    }
  }

};
