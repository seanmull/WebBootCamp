const first = [1,2,3];
const second = [4,5,6];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second];
// combined.push('b');
// combined = [];
combined.forEach(ele => console.log(ele));
