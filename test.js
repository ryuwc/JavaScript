function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669


const savedFile = {
  name: 'profile',
  extension: 'jpg',
  size: 29930
}
// const {name, extension, size} = savedFile

function fileSummary({name, extension, size}) {
    console.log(`The file ${name}.${extension} is size of ${size} bytes.`)
}
fileSummary(savedFile);


