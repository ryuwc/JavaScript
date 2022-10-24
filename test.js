function isAnimal(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return name in animals;
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false