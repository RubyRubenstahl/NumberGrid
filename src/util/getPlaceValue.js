export default (num, place) => {
  if(num === undefined || num === null) return null;

  const digits = num.toString().split('');
  const placeIndex = digits.length- 1 - Math.log10(place);
  if( placeIndex<0) return 0;
  const placeValue = parseInt(digits[placeIndex]);
  return placeValue;
};