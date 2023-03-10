function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = ~~max;
  return Math.floor(Math.random() * (max - min) + min);
}

function randomArray(size){
  let array = []
  for (num in [...Array(size).keys()]){
    array.push(getRandomInt(0, 100))
  }
  return array.sort()
}

describe('search', () => {
  let array = Array.from(Array(11).keys())
  let index = getRandomInt(0, array.length)
  it(`should return ${index} when ${array}, ${index} is inserted`, () => {
    expect(binarySearch(array, index)).toEqual(index);
  });

  it("should return 10 when an array of 10 is entered", () => {
    expect(binarySearch(array, 10)).toEqual(10);
  });

  let random_array = randomArray(10)
  let random_value = getRandomInt(0, 100)
  it(`should return ${random_array.indexOf(random_value)} when random array of size ${random_array.length} is inserted (value is ${random_value})`, () => {
    expect(binarySearch(random_array, random_value)).toEqual(random_array.indexOf(random_value))
  })
})

describe("compare", () => {
  let array = [...Array(100).keys()]
  let index = getRandomInt(0, array.length)

  it(`binary search should return fewer iterations than linear search`, function() {
    linearSearch(array, index)
    expect(binarySearch(array, index, 0, true) < linear_time).toEqual(true)
  })
})