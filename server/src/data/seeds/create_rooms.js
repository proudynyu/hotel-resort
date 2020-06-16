const Knex = require('knex');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        {
          name: "single economy",
          slug: "single-economy",
          type: "single",
          price: 100,
          size: 200,
          capacity: 1,
          pets: false,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-1.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "single basic",
          slug: "single-basic",
          type: "single",
          price: 150,
          size: 250,
          capacity: 1,
          pets: false,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-2.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "single standard",
          slug: "single-standard",
          type: "single",
          price: 250,
          size: 300,
          capacity: 1,
          pets: true,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-3.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "single deluxe",
          slug: "single-deluxe",
          type: "single",
          price: 300,
          size: 400,
          capacity: 1,
          pets: true,
          breakfast: true,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-4.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "double economy",
          slug: "double-economy",
          type: "double",
          price: 200,
          size: 300,
          capacity: 2,
          pets: false,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-5.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "double basic",
          slug: "double-basic",
          type: "double",
          price: 250,
          size: 350,
          capacity: 2,
          pets: false,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-6.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "double standard",
          slug: "double-standard",
          type: "double",
          price: 300,
          size: 400,
          capacity: 2,
          pets: true,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-7.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "double deluxe",
          slug: "double-deluxe",
          type: "double",
          price: 400,
          size: 500,
          capacity: 2,
          pets: true,
          breakfast: true,
          featured: true,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-8.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "family economy",
          slug: "family-economy",
          type: "family",
          price: 300,
          size: 500,
          capacity: 3,
          pets: false,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-9.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "family basic",
          slug: "family-basic",
          type: "family",
          price: 350,
          size: 550,
          capacity: 4,
          pets: false,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-10.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "family standard",
          slug: "family-standard",
          type: "family",
          price: 400,
          size: 600,
          capacity: 5,
          pets: true,
          breakfast: false,
          featured: false,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-11.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "family deluxe",
          slug: "family-deluxe",
          type: "family",
          price: 500,
          size: 700,
          capacity: 6,
          pets: true,
          breakfast: true,
          featured: true,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-12.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        },
        {
          name: "presidential",
          slug: "presidential-room",
          type: "presidential",
          price: 600,
          size: 1000,
          capacity: 10,
          pets: true,
          breakfast: true,
          featured: true,
          description:
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
          images: JSON.stringify([
            'http://localhost:3333/static/room-13.jpeg',
            'http://localhost:3333/static/details-2.jpeg',
            'http://localhost:3333/static/details-3.jpeg',
            'http://localhost:3333/static/details-4.jpeg',
          ]),
        }
      ]);
    });
};
