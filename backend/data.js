import bcrypt from 'bcryptjs';

const data = {
  inmuebles: [
    {
      type: 'House',
      business: 'Rent',
      name: 'House 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house1.png',
      imagelg: '/img/inmuebles/houses/house1lg.png',
      country: 'Medellín',
      address: 'Calle 49 # 64 - 19',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '2004',
      price: ['960000'],
    },

    {
      type: 'Apartment',
      business: 'Rent/Sale',
      name: 'House 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Leticia',
      address: 'Calle 69 # 14 - 10 Apto 3408',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '2009',
      price: ['960000', '192000000'],
    },

    {
      type: 'Apartment',
      business: 'Rent',
      name: 'House 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a2.png',
      country: 'Arauca',
      address: 'Carrera 82 # 84 - 92 Apto 109',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '2008',
      price: ['960000'],
    },

    {
      type: 'House',
      business: 'Rent',
      name: 'House 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house2.png',
      country: 'Barranquilla',
      address: 'Calle 63 # 61 - 40',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '1992',
      price: ['960000'],
    },

    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a5.png',
      country: 'Bogotá',
      address: 'Calle 83 # 56 - 16',
      bedrooms: '2',
      bathrooms: '1',
      surface: '42 m3',
      year: '2009',
      price: ['840000', '168000000'],
    },

    {
      type: 'Apartment',
      business: 'Sale',
      name: 'House 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a3.png',
      country: 'Cartagena de Indias',
      address: 'Carrera 74 # 39 - 61 Apto 909',
      bedrooms: '3',
      bathrooms: '1',
      surface: '60 m3',
      year: '2009',
      price: ['240000000'],
    },

    {
      type: 'House',
      business: 'Sale',
      name: 'House 7',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house3.png',
      country: 'Tunja',
      address: 'Carrera 23 # 26 - 56',
      bedrooms: '3',
      bathrooms: '2',
      surface: '66 m3',
      year: '1995',
      price: ['264000000'],
    },

    {
      type: 'House',
      business: 'Rent',
      name: 'House 8',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house4.png',
      country: 'Manizales',
      address: 'Calle 64 # 55 - 20',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '1992',
      price: ['960000'],
    },

    {
      type: 'Apartment',
      business: 'Rent/Sale',
      name: 'House 9',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a4.png',
      country: 'Florencia',
      address: 'Calle 40 # 71 - 21 Apto 2811',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '1995',
      price: ['960000', '192000000'],
    },

    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house5.png',
      country: 'Yopal',
      address: 'Carrera 59 # 75 - 39',
      bedrooms: '4',
      bathrooms: '2',
      surface: '84 m3',
      year: '2016',
      price: ['1680000', '336000000'],
    },

    {
      type: 'House',
      business: 'Rent',
      name: 'House 11',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house6.png',
      country: 'Popayán',
      address: 'Calle 78 # 31 - 39',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '2002',
      price: ['960000'],
    },

    {
      type: 'House',
      business: 'Rent',
      name: 'House 12',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house7.png',
      country: 'Valledupar',
      address: 'Calle 71 # 94 - 30',
      bedrooms: '2',
      bathrooms: '1',
      surface: '42 m3',
      year: '2021',
      price: ['840000'],
    },

    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 13',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house8.png',
      country: 'Quibdó',
      address: 'Carrera 68 # 28 - 20',
      bedrooms: '3',
      bathrooms: '2',
      surface: '66 m3',
      year: '1993',
      price: ['1320000', '264000000'],
    },

    {
      type: 'Apartment',
      business: 'Sale',
      name: 'House 14',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a5.png',
      country: 'Montería',
      address: 'Carrera 35 # 80 - 46 Apto 203',
      bedrooms: '3',
      bathrooms: '1',
      surface: '60 m3',
      year: '2015',
      price: ['240000000'],
    },

    {
      type: 'Apartment',
      business: 'Sale',
      name: 'House 15',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a6.png',
      country: 'Bogotá',
      address: 'Calle 89 # 22 - 26 Apto 2909',
      bedrooms: '3',
      bathrooms: '2',
      surface: '66 m3',
      year: '1994',
      price: ['264000000'],
    },

    {
      type: 'Apartment',
      business: 'Sale',
      name: 'House 16',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house12.png',
      country: 'Inírida',
      address: 'Carrera 60 # 46 - 90 Apto 3507',
      bedrooms: '2',
      bathrooms: '1',
      surface: '42 m3',
      year: '1996',
      price: ['168000000'],
    },

    {
      type: 'Apartment',
      business: 'Rent',
      name: 'House 17',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house11.png',
      country: 'San José del Guaviare',
      address: 'Carrera 62 # 30 - 84 Apto 3507',
      bedrooms: '2',
      bathrooms: '1',
      surface: '42 m3',
      year: '2005',
      price: ['840000'],
    },

    {
      type: 'House',
      business: 'Sale',
      name: 'House 18',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house10.png',
      country: 'Neiva',
      address: 'Calle 98 # 69 - 59',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '2011',
      price: ['192000000'],
    },

    {
      type: 'House',
      business: 'Rent',
      name: 'House 19',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house9.png',
      country: 'Riohacha',
      address: 'Carrera 59 # 98 - 71',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '2012',
      price: ['960000'],
    },

    {
      type: 'House',
      business: 'Sale',
      name: 'House 20',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a9.png',
      country: 'Santa Marta',
      address: 'Calle 55 # 11 - 91',
      bedrooms: '4',
      bathrooms: '2',
      surface: '84 m3',
      year: '2003',
      price: ['336000000'],
    },

    {
      type: 'Apartment',
      business: 'Sale',
      name: 'House 21',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/houses/house12.png',
      country: 'Villavicencio',
      address: 'Calle 21 # 85 - 53 Apto 1905',
      bedrooms: '4',
      bathrooms: '1',
      surface: '78 m3',
      year: '2016',
      price: ['312000000'],
    },

    {
      type: 'Apartment',
      business: 'Rent/Sale',
      name: 'House 22',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Pasto',
      address: 'Carrera 45 # 98 - 55 Apto 411',
      bedrooms: '3',
      bathrooms: '1',
      surface: '60 m3',
      year: '2022',
      price: ['1200000', '240000000'],
    },
    {
      type: 'House',
      business: 'Sale',
      name: 'House 23',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'San José de Cúcuta',
      address: 'Calle 90 # 38 - 99',
      bedrooms: '3',
      bathrooms: '1',
      surface: '60 m3',
      year: '1997',
      price: ['240000000'],
    },
    {
      type: 'Apartment',
      business: 'Rent/Sale',
      name: 'House 24',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Mocoa',
      address: 'Carrera 47 # 36 - 49 Apto 506',
      bedrooms: '1',
      bathrooms: '1',
      surface: '24 m3',
      year: '1995',
      price: ['480000', '96000000'],
    },
    {
      type: 'Apartment',
      business: 'Rent',
      name: 'House 25',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Armenia',
      address: 'Carrera 40 # 86 - 95 Apto 1512',
      bedrooms: '4',
      bathrooms: '1',
      surface: '78 m3',
      year: '2019',
      price: ['1560000'],
    },
    {
      type: 'House',
      business: 'Rent',
      name: 'House 26',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Pereira',
      address: 'Carrera 22 # 48 - 80',
      bedrooms: '2',
      bathrooms: '2',
      surface: '48 m3',
      year: '1997',
      price: ['960000'],
    },
    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 27',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'San Andrés',
      address: 'Calle 82 # 80 - 48',
      bedrooms: '3',
      bathrooms: '1',
      surface: '60 m3',
      year: '2021',
      price: ['1200000', '240000000'],
    },
    {
      type: 'House',
      business: 'Rent',
      name: 'House 28',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Bucaramanga',
      address: 'Carrera 11 # 70 - 10',
      bedrooms: '4',
      bathrooms: '2',
      surface: '84 m3',
      year: '2021',
      price: ['961000'],
    },
    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 29',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Sincelejo',
      address: 'Calle 92 # 28 - 74',
      bedrooms: '3',
      bathrooms: '2',
      surface: '66 m3',
      year: '1997',
      price: ['1320000', '264000000'],
    },
    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 30',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Ibagué',
      address: 'Carrera 65 # 98 - 8',
      bedrooms: '2',
      bathrooms: '1',
      surface: '42 m3',
      year: '2019',
      price: ['840000', '168000000'],
    },
    {
      type: 'House',
      business: 'Rent',
      name: 'House 31',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Cali',
      address: 'Carrera 4 # 24 - 29',
      bedrooms: '2',
      bathrooms: '1',
      surface: '42 m3',
      year: '2014',
      price: ['840000'],
    },
    {
      type: 'Apartment',
      business: 'Rent',
      name: 'House 32',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Mitú',
      address: 'Calle 73 # 4 - 63 Apto 2108',
      bedrooms: '3',
      bathrooms: '1',
      surface: '60 m3',
      year: '2010',
      price: ['1200000'],
    },
    {
      type: 'House',
      business: 'Rent/Sale',
      name: 'House 33',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: '/img/inmuebles/aptos/a1.png',
      country: 'Puerto Carreño',
      address: 'Carrera 16 # 70 - 26',
      bedrooms: '3',
      bathrooms: '2',
      surface: '66 m3',
      year: '2012',
      price: ['1320000', '264000000'],
    },
  ],
  agentes: [
    {
      name: 'Patricia',
      lastname: 'Tullert',
      image: './assets/img/agents/agent1.png',
      email: 'patricia@gmail.com',
      phone: '0123 456 78910',
      country: 'Colombia',
      password: bcrypt.hashSync('pt63737'),
      role: 'agent',
    },

    {
      name: 'Daryl',
      lastname: 'Hawker',
      image: './assets/img/agents/agent2.png',
      email: 'daryl@gmail.com',
      phone: '0123 456 78916',
      country: 'Estados Unidos',
      password: bcrypt.hashSync('hA9393'),
      role: 'agent',
    },

    {
      name: 'Federico',
      lastname: 'Marín',
      image: './assets/img/agents/agent3.png',
      email: 'feder@gmail.com',
      phone: '0123 456 78956',
      country: 'Chile',
      password: bcrypt.hashSync('ldi9jd'),
      role: 'agent',
    },

    {
      name: 'Gregory',
      lastname: 'Musetti',
      image: './assets/img/agents/agent2.png',
      email: 'gregory@gmail.com',
      phone: '0123 456 78916',
      country: 'Italia',
      password: bcrypt.hashSync('hyueu'),
      role: 'agent',
    },

    {
      name: 'Maria',
      lastname: 'Smith',
      image: './assets/img/agents/agent3.png',
      email: 'maria@gmail.com',
      phone: '0738 456 78916',
      country: 'Alemania',
      password: bcrypt.hashSync('nujjejn'),
      role: 'agent',
    },

    {
      name: 'Samuel',
      lastname: 'Pernia',
      image: './assets/img/agents/agent4.png',
      email: 'samp@gmail.com',
      phone: '0391 456 78916',
      country: 'Italia',
      password: bcrypt.hashSync('sdnjei'),
      role: 'agent',
    },

    {
      name: 'Gabriel',
      lastname: 'Aristizabal',
      image: './assets/img/agents/agent5.png',
      email: 'gabrielA@gmail.com',
      phone: '7103 456 78916',
      country: 'Colombia',
      password: bcrypt.hashSync('fhdhan'),
      role: 'agent',
    },

    {
      name: 'Maritza',
      lastname: 'Aristizabal',
      image: './assets/img/agents/agent6.png',
      email: 'maritza@gmail.com',
      phone: '3019 456 78916',
      country: 'México',
      password: bcrypt.hashSync('lkdnej'),
      role: 'agent',
    },
  ],
};

export default data;
