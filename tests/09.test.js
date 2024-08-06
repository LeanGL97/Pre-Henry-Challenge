const filtrar = require('../09.js');

var personas = [
  {
    nombre: 'Emi',
    edad: 21,
    hobbies: ['correr', 'dormir', 'nadar'],
    amigos: [
      { 
        nombre: 'Martin',
      },{
        nombre: 'Leo',
      }
    ],
  }, {
    nombre: 'Franco',
    edad: 22,
    hobbies: ['futbol', 'golf'],
    amigos: [
      {
        nombre: 'Emi',
      }, {
        nombre: 'Jimmy',
      }, {
        nombre: 'Matias',
      }
    ],
  },
  {
    nombre: 'Martin',
    edad: 35,
    hobbies: ['Cancha', 'emprender'],
    amigos: [
      {
        nombre: 'Toni',
      }, {
        nombre: 'Leo',
      }, {
        nombre: 'Manu',
      }
    ],
  },
];

describe('Filter', function() {
  it('should filter', function() {
    const resultado = filtrar(personas, p => p.edad <= 22);
    expect(resultado.length).toBe(2);
  });

  it('should filter ok', function() {
    const resultado = filtrar(personas, p => p.edad > 50);
    expect(resultado.length).toBe(0);
  });
});