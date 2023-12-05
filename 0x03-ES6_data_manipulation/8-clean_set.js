export default function cleanSet(set, startString) {
  const suffix = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubString = value.substring(startString.length);

      if (valueSubString && valueSubString !== value) {
        suffix.push(valueSubString);
      }
    }
  }
  return suffix.join('-');
}
