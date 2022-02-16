// @ts-check

// Recommended
class TypeOfGender {
  static male = "male";
  static female = "female";
  static nonBinary = "nonBinary";
}

// No use
const typeOfGender = {
  male: "male",
  female: "female",
  nonBinary: "nonBinary",
};

/**
 * @type {{
 * name: string,
 * age: number,
 * gender: TypeOfGender // No use -> gender: typeOfGender
 * }}
 */
const person = {
  name: "Manuel",
  age: 22,
  // TypeScript no reconoce los tipos
  // gender: typeOfGender.male
  //
  // Recommended
  gender: TypeOfGender.male,
};
