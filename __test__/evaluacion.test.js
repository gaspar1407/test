const {
  determinarPosNegCero,
  elegirBebida,
  elegirFruta,
  multiplicarValores,
  manejarObjeto,
  potenciaNumeros
} = require('../index');

describe('Actividad N°1: determinarPosNegCero', () => {
  test('Número positivo', () => {
    expect(determinarPosNegCero(5)).toBe('Positivo');
  });

  test('Número negativo', () => {
    expect(determinarPosNegCero(-3)).toBe('Negativo');
  });

  test('Número cero', () => {
    expect(determinarPosNegCero(0)).toBe('Cero');
  });
});

describe('Actividad N°2: elegirBebida', () => {
  test('Elegir agua', () => {
    expect(elegirBebida('agua')).toBe('Has elegido agua.');
  });

  test('Elegir jugo', () => {
    expect(elegirBebida('jugo')).toBe('Has elegido jugo.');
  });

  test('Elegir refresco', () => {
    expect(elegirBebida('refresco')).toBe('Has elegido refresco.');
  });

  test('Opción no válida', () => {
    expect(elegirBebida('té')).toBe('Opción no válida.');
  });
});

describe('Actividad N°3: elegirFruta', () => {
  test('Elegir manzana', () => {
    expect(elegirFruta('manzana')).toBe('Has elegido una manzana.');
  });

  test('Elegir pera', () => {
    expect(elegirFruta('pera')).toBe('Has elegido una pera.');
  });

  test('Elegir naranja', () => {
    expect(elegirFruta('naranja')).toBe('Has elegido una naranja.');
  });
});

describe('Actividad N°4: multiplicarValores', () => {
  test('Multiplicar valores en arrays multidimensionales', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const resultado = multiplicarValores(array);
    expect(resultado).toEqual([[2, 4, 6], [8, 10, 12], [14, 16, 18]]);
  });
});

describe('Actividad N°5: manejarObjeto', () => {
  test('Modificar propiedades de un objeto', () => {
    const persona = {
      nombre: "Seba",
      edad: 27,
      profesion: "Full-Stack"
    }
    const personaModificada = manejarObjeto(persona);
    expect(personaModificada).toEqual({
      nombre: 'Seba',
      edad: 29,
      ciudad: 'Madrid'
    });
    expect(personaModificada.profesion).toBeUndefined();
  });
});

describe('Actividad N°6: potenciaNumeros', () => {
  test('Declaración de función', () => {
    expect(typeof potenciaNumeros).toBe('function');
  });

  test('2 elevado a la 3 es igual a 8', () => {
    expect(potenciaNumeros(2, 3)).toBe(8);
  });

  test('3 elevado a la 4 es igual a 81', () => {
    expect(potenciaNumeros(3, 4)).toBe(81);
  });

  test('5 elevado a la 0 es igual a 1', () => {
    expect(potenciaNumeros(5, 0)).toBe(1);
  });
});
