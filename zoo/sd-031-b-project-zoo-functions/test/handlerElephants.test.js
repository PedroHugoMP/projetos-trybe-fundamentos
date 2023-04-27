const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Esperado 4 quando prametro for "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Esperado algum nome do array', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Esperado 10.5 quando parametro for averageage', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Esperado NW quando parametro location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Esperado 5 quando parametro popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Esperado nome dentre array quando parametro availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Esperado null quando parametro vazio', () => {
    expect(handlerElephants(' ')).toEqual(null);
  });
  it('Esperado undefined quando parametro undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });
  it('Esperado frase quando parametro number', () => {
    expect(handlerElephants(5)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
