// Code your solution here
const findMatching = (drivers, string) => {
  return drivers.filter(driver => { 
    return driver.toLowerCase() === string.toLowerCase();
    })
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => 
    driver.charAt(0) === string[0]
  )
}

// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )
//   }

function matchName (drivers, string){
   return drivers.filter(driver => driver.name === string)
}