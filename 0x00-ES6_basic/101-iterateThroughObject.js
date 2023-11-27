export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += employee;
    result += ' | ';
  }
  return result.slice(0, result.length - 3);
}
