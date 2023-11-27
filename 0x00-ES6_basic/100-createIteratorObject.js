export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const staff = [];
      const departments = Object.keys(report.allEmployees);
      let counter = -1;

      for (const department of departments) {
        for (const employee of report.allEmployees[department]) {
          staff.push(employee);
        }
      }

      return {
        next() {
          if (counter === staff.length - 1) {
            return { done: true, value: undefined };
          }

          counter += 1;
          return { done: false, value: staff[counter] };
        },
      };
    },
  };
}
