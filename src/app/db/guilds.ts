/*
So we're going to do a few things here:
--Calculate profit (or lack thereof)
--Display fullname
--Age display with years based on birthdate
  --Maybe format the date differently
*/

let guilds = [
  {
    id: 1,
    name: "Blacksmiths",
    nickname: "Beamers",
    address: {
      street1: '134 Underrock Lane',
      street2: '',
      city: 'Old London'
    },
    expenses: 10000,
    revenue:  15000,
    members: [
      {
        id: 21,
        firstName: 'Fenrik',
        lastName: 'Thane',
        birthdate: '1972-03-12'
      },
      {
        id: 22,
        firstName: 'Jalak',
        lastName:  'Crellen',
        birthdate: '1983-09-11'
      },
      {
        id: 23,
        firstName: 'Raiken',
        lastName:  'Bellanous',
        birthdate: '1987-11-04'
      },
    ]
  },
  {
    id: 2,
    name: "Assassins",
    nickname: "Sneakers",
    address: {
      street1: '979 Shadow Alley',
      street2: '',
      city: 'Old London'
    },
    expenses: 22000,
    revenue: 18500,
    members: [
      {
        id: 24,
        firstName: 'Roland',
        lastName:  'Cagznice',
        birthdate: '1977-08-04'
      },
      {
        id: 25,
        firstName: 'Jerriack',
        lastName:  'Selfane',
        birthdate: '1979-01-25'
      },
      {
        id: 26,
        firstName: 'Bablet',
        lastName:  'Crosswind',
        birthdate: '1989-07-13'
      },
      {
        id: 27,
        firstName: 'Lanfar',
        lastName:  'Terrios',
        birthdate: '1991-12-25'
      },
    ]
  }
];

export { guilds }
