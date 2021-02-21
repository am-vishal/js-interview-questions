const person = ({
  name :"Vishal",
  age: 23,
  location:{
  city:"Bengaluru",
  state:"Karnatka",
  },
  links:{
    social:{
      linkedIn:'amvishal',
      facebook:'amvishal09',
    },
    web:{
      github:"am-vishal",
      codepen:"am_vishal",
    },
    portfolio:{
      link:"amvishal.tech",
    },
  },
  hasJob: false,
})


// Step:2
const name = person.name;
const age = person.age;
const city = person.city;
const links = person.links;
console.log(name, age, city,links.web.codepen)

// Step:3
const {name, age, city, hasJob, links} = person;
console.log(name, age, hasJob, links.portfolio.link)
