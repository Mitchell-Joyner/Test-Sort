const Sort = require('./sort.js');

let biglist = [];
for(let x=0;x<10000000;x++){
  biglist[x]=Math.random();
}
//run the sorts()
let sorted = Sort.merge(biglist);
