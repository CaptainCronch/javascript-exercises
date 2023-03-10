describe('insert', () => {
  it('should return [1, 2, 3, 4, 5] when [5, 4, 3, 2, 1] is inserted', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it('should return generated reversed array of 100', () => {
    let array = Array.from(Array(100).keys())
    expect(bubbleSort(array.slice().reverse())).toEqual(array);
  })
});