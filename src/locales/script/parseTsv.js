"use strict";

const fs = require("fs");

const rawdata = fs.readFileSync("./translation.tsv");
let content = rawdata.toString();
let lines = content.split("\r\n");
let columns = lines[1].split("\t");
lines = lines.splice(3);

for (let i = 1; i < columns.length; i++) {
  const lang = columns[i];
  const data = {};
  
  // lines.forEach(line => {
  //   // console.log(line)
  //   const cols = line.split("\t");
  //   // console.log(cols[0])
  //   const [namespace, props] = cols[0].split(':')
  //   // console.log(namespace, props)
  //   const val = props.split(".");
  //   // console.log(val)
  //   // console.log(namespace, props)
  //   if (!(namespace in data)) {
  //     data[namespace] = {}
  //   }
    
  //   // if (val.length > 2) {
  //   //   if (!data[namespace][val[0]]) {
  //   //     data[val[0]] = {}
  //   //   }
  //   //   if (!data[val[0]][val[1]]) {
  //   //     data[val[0]][val[1]] = {}
  //   //   }
  //   //   data[val[0]][val[1]][val[2]] = cols[i]
  //   // } else 
  //   if (val.length > 1) {
  //     if (!data[namespace][val[0]]) {
  //       data[val[0]] = {};
  //     }
  //     // console.log(cols[i])
  //     data[val[0]][val[1]] = cols[i];
  //   } else {
  //     data[val[0]] = cols[i];
  //   }
  // });
  lines.forEach(line => {
    const lineArr = line.split('\t')
    const [namespace, ids] = lineArr[0].split(':')

    const idsArr = ids.split('.')

    if (!(namespace in data)) data[namespace] = {}

    if (idsArr.length > 1) {
      if (!(idsArr[0] in data[namespace])) data[namespace][idsArr[0]] = {}
      data[namespace][idsArr[0]][idsArr[1]] = lineArr[i]
    } else {
      data[namespace][idsArr[0]] = lineArr[i]
    }
  })
  // console.log(data)
  // console.log(data)
  for (let ns in data) {
    fs.writeFileSync(
      `../langs/${lang}/${ns}.json`,
      // "../langs/" + lang + "/.json",
      JSON.stringify(data[ns], null, 2)
    );
  }
  // fs.writeFileSync(
  //   "../" + lang + ".json",
  //   JSON.stringify(data, null, 2)
  // );
}
// fs.copyFile(
//   "../backend/public/assets/lang/en.json",
//   "./src/resources/lang/en.json",
//   err => {
//     if (err) throw err;
//   }
// );
