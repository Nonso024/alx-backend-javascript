export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getting and Setting the name attributes
  get name() { return this._name; }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getting and Setting the length attribute
  get length() { return this._length; }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getting and Setting the students attribute
  get students() { return this._students; }

  set students(value) {
    if (value instanceof Array) {
      if (value.every((student) => typeof student === 'string')) {
        this._students = value;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    } else {
      throw new TypeError('Student must be an array strings');
    }
  }
}
