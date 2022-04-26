/*
https://testing-library.com/docs/vue-testing-library/examples/
https://vuejs.org/guide/scaling-up/testing.html#component-testing
*/
// let store;
// let chartList;

// beforeEach(() => {
//   store = dashboard(results, { type: 'SET_HITS' });
//   chartList = graph(store);
// });

test('should equel 4', () => {
  const four = 4;
  expect(four).toBe(4);
});

// test('should build graph list for chart from hits list', () => {
//   expect(chartList[0]).toEqual({
//     hour: '2-13-21 11pm',
//     count: 2,
//   });
//   expect(chartList[1]).toEqual({
//     hour: '2-13-21 10pm',
//     count: 1,
//   });
//   expect(chartList[2]).toEqual({
//     hour: '2-13-21 9pm',
//     count: 6,
//   });
//   expect(chartList[3]).toEqual({
//     hour: '2-13-21 6pm',
//     count: 1,
//   });
// });
