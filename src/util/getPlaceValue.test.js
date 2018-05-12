import  getPlaceValue from './getPlaceValue';



test('Ones place of 123 is 3', ()=> {
  expect(getPlaceValue(123, 1)).toBe(3);
});

test('Tens place of 123 is 2', ()=> {
  expect(getPlaceValue(123, 10)).toBe(2);
});

test('Hundreds place of 123 is 1', ()=> {
  expect(getPlaceValue(123, 100)).toBe(1);
});

test('Thousands place of 123 is 0', ()=> {
  expect(getPlaceValue(123, 1000)).toBe(0);
});