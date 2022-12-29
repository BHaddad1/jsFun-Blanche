const { kitties } = require("./datasets/kitties");
const { puppers } = require("./datasets/puppers");
const { mods } = require("./datasets/mods");
const { cakes } = require("./datasets/cakes");
const { classrooms } = require("./datasets/classrooms");
const { breweries } = require("./datasets/breweries");
const { nationalParks } = require("./datasets/nationalParks");
const { weather } = require("./datasets/weather");
const { boardGames } = require("./datasets/boardGames");
const { instructors, cohorts } = require("./datasets/turing");
const { bosses, sidekicks } = require("./datasets/bosses");
const { constellations, stars } = require("./datasets/astronomy");
const { weapons, characters } = require("./datasets/ultima");
const { dinosaurs, humans, movies } = require("./datasets/dinosaurs");

const { books } = require("./datasets/books");

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(array) {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    // look at the color and it has to equal orange (filter)
    // will return an array of objects
    // return an array of just two names, using map

    const onlyOrange = array
      .filter((animal) => animal.color === "orange")
      .map((animal) => {
        return animal.name;
      });
    return onlyOrange;
    // Annotation:
    // Write your annotation here as a comment
    // MUST RETURN INSIDE OF A FCN!
  },

  sortByAge(array) {
    // Sort the kitties by their age
    const descendingAge = array.sort((a, b) => {
      return b.age - a.age;
    });
    return descendingAge;
    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(array) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const agePlusTwo = array.map((cat) => {
      cat.age += 2;
      return cat;
    });
    return agePlusTwo;
  },
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    // check if a member is in the members array;
    // use forEach to iterate over the members array;
    // if the member is in the array, add club key value to the object's key
    // which should be their first name

    const members = clubs.reduce((finalObj, club) => {
      club.members.forEach((member) => {
        if (!finalObj[member]) {
          finalObj[member] = [];
        }
        finalObj[member].push(club.club);
      });
      return finalObj;
    }, {});
    return members;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    const modObject = mods.reduce((acc, cur) => {
      acc = [
        ...acc,
        {
          mod: cur.mod,
          studentsPerInstructor: cur.students / cur.instructors,
        },
      ];
      return acc;
    }, []);
    // return modObject;

    const modObjects = mods.map((mod) => {
      return {
        mod: mod.mod,
        studentsPerInstructor: mod.students / mod.instructors,
      };
    });
    return modObjects;
    // Annotation:
    // Write your annotation here as a comment
    // acc goes OUTSIDE the object brackets, inside the ARRAY brackets!!
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    const cakeStock = cakes.map((cake) => {
      return { flavor: cake.cakeFlavor, inStock: cake.inStock };
    });

    return cakeStock;
    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    const isInStock = cakes.filter((cake) => {
      return cake.inStock;
    });
    return isInStock;
    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    const totalInStock = cakes.reduce((acc, cur) => {
      return (acc += cur.inStock);
    }, 0);
    return totalInStock;
    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    const toppings = cakes
      .reduce((acc, cur) => {
        acc.push(cur.toppings);
        return acc.flat();
      }, [])
      .filter((topping, index, array) => {
        return array.indexOf(topping) === index;
      });

    return toppings;

    const toppingsArr = cakes.reduce((acc, cur) => {
      acc.push(
        cur.toppings.filter((topping, index, array) => {
          return array.indexOf(topping) === index;
        })
      );
      return acc.flat();
    }, []);
    // return toppingsArr;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    // gather all the elements from the toppings array into one array? or iterate through the arrays and keep track of how many times the string appears in all of the arrays
    // count how many times it appears in the array and store that value
    // create a new object with each of the elements, duplicates removed
    // make those elements keeys, and the count the value

    const groceriesRedo = cakes.reduce((acc, cur) => {
      cur.toppings.forEach((topping) => {
        if (!acc[topping]) {
          acc[topping] = 0;
        }
        acc[topping] = acc[topping] + 1;
      });
      return acc;
    }, {});

    return groceriesRedo;
    const groceries = cakes
      .reduce((acc, cur) => {
        acc.push(cur.toppings);
        return acc.flat();
      }, [])
      .reduce((acc, cur) => {
        if (cur in acc) {
          acc[cur] = acc[cur] + 1;
        } else {
          acc[cur] = 1;
        }
        return acc;
      }, {});

    // return groceries;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    const classroomObjects = classrooms.filter((classroom) => {
      return classroom.program === "FE";
    });
    return classroomObjects;
    // Annotation:
    // Write your annotation here as a comment
    // READ THE DIRECTIONS AND DONT OVERCOMPLICATE
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    const allCapacity1 = classrooms.reduce(
      (acc, cur) => {
        if (cur.program === "FE") {
          acc.feCapacity += cur.capacity;
        } else if (cur.program === "BE") {
          acc.beCapacity += cur.capacity;
        }
        return acc;
      },
      { feCapacity: 0, beCapacity: 0 }
    );
    return allCapacity1;
    // filter fe and be
    // add the total capacity of FE and BE
    // map a new object with those sums.
    const allCapacity = classrooms.reduce((acc, cur) => {
      if (cur.program === "FE") {
        let sum = acc["feCapacity"] || 0;
        sum += cur.capacity;
        acc["feCapacity"] = sum;
        return acc;
      } else if (cur.program === "BE") {
        let sum2 = acc["beCapacity"] || 0;
        sum2 += cur.capacity;
        acc["beCapacity"] = sum2;
        return acc;
      }
    }, {});
    // return allCapacity;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    const sortedClassrooms = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return sortedClassrooms;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(array) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:
    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const noViolence = array
      .filter((book) => {
        if (
          !book.genre.includes("True Crime") &&
          !book.genre.includes("Horror")
        ) {
          return book.title;
        }
      })
      .reduce((acc, cur) => {
        acc.push(cur.title);
        return acc;
      }, []);
    return noViolence;
    // Annotation:
    // Write your annotation here as a comment
  },
  getNewBooks(array) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:
    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    // filter by year
    // reduce it into an object whos title is the key,  valye is the title, year key and the year it was oublished as the value
    const newerBooks = array
      .filter((book) => {
        return book.published > 1989;
      })
      .reduce((acc, book) => {
        acc.push({ title: book.title, year: book.published });
        return acc;
      }, []);
    return newerBooks;
    // Annotation:
    // Can be even simplier when defining an object! Look at this!
    // acc.push if it's an array
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data.
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return
    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    const newerBooks = books
      .filter((book) => {
        return book.published > year;
      })
      .reduce((acc, book) => {
        acc.push({ title: book.title, year: book.published });
        return acc;
      }, []);
    return newerBooks;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
    // locate the high temp
    // locate the low temp
    // divide the two
    // fixed to one decimal place
    // return an array of the same length
    const averageWeather = weather.reduce((acc, cur) => {
      acc = [...acc, (cur.temperature.high + cur.temperature.low) / 2];
      return acc;
    }, []);
    return averageWeather;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
    const sunnyCities = weather
      .filter((city) => {
        return city.type.includes("sunny");
      })
      .map((city) => {
        return `${city.location} is ${city.type}.`;
      });

    return sunnyCities;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    const highestHumidity = weather.reduce((highest, cur) => {
      if (highest.humidity > cur.humidity) {
        return highest;
      }
      return cur;
    });

    return highestHumidity;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    // make an object
    // sort the parks that have been visited and have not been visited into separate arrays

    const sortedParks = nationalParks.reduce((acc, cur) => {
      // access the correct key
      // push those values into the array
      // if array doesn't exist on first it, || []
      const parkNamesArray1 = acc["parksToVisit"] || [];
      const parkNamesArray2 = acc["parksVisited"] || [];
      if (!cur.visited) {
        parkNamesArray1.push(cur.name);
        return { ...acc, ["parksToVisit"]: parkNamesArray1 };
      } else if (cur.visited) {
        parkNamesArray2.push(cur.name);
        return { ...acc, ["parksVisited"]: parkNamesArray2 };
      }
      return acc;
    }, {});
    // return sortedParks;

    // ||

    const sortedParks2 = nationalParks.reduce(
      (acc, cur) => {
        // if (!acc["parksToVisit"]) {
        //   console.log("test");
        //   acc["parksToVisit"] = [];
        // }
        if (!cur.visited) {
          acc["parksToVisit"].push(cur.name);
        } else if (cur.visited) {
          acc["parksVisited"].push(cur.name);
        }
        return acc;
      },
      { parksToVisit: [], parksVisited: [] }
    );
    return sortedParks2;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
    const parksByState = nationalParks.map((park) => {
      return { [park.location]: park.name };
    });
    return parksByState;
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // isolate the activities
    // push them into an array of a new length
    // remove duplicates

    const parkActivities = nationalParks
      .reduce((acc, cur) => {
        if (cur.activities) {
          acc = [...acc, cur.activities];
        }
        return acc.flat();
      }, [])
      .filter((activity, index, array) => {
        return array.indexOf(activity) === index;
      });
    return parkActivities;

    // const newParkActivities = nationalParks.reduce((acc, cur) => {
    //   let curFlat = cur.activities.flat()
    //   if (!acc.includes(cur.activities)) {
    //     return (acc = [...acc, cur.activities]);
    //   }
    //   return acc.flat();
    // }, []);
    // return newParkActivities;

    // Annotation:
    // Write your annotation here as a comment
    //remove duplicates from an array useing filter! Include only elements whose indexes match their indexOf values.
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    const beerCount = breweries.reduce((acc, cur) => {
      acc += cur.beers.length;
      return acc;
    }, 0);
    return beerCount;
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]
    const breweryCount = breweries.reduce((acc, cur) => {
      acc = [...acc, { name: cur.name, beerCount: cur.beers.length }];
      return acc;
    }, []);
    return breweryCount;
    // Annotation:
    // Write your annotation here as a comment
    // be careful with syntax!
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5
    const singleBreweryCount = breweries.find((elem) => {
      return elem.name === breweryName;
    });
    return singleBreweryCount.beers.length;
    // Annotation:
    // Write your annotation here as a comment
    // reduce did not work!
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // locate the abv
    // compare abv
    // return the highest one
    let allBeers = breweries.reduce((acc, cur) => {
      acc = [...acc, cur.beers];
      return acc.flat();
    }, []);
    const allBeersReduced = allBeers.reduce((acc, cur) => {
      if (acc.abv > cur.abv) {
        return acc;
      }
      return cur;
    }, {});

    return allBeersReduced;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type.
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]
    const gameNames = boardGames[type].reduce((acc, cur) => {
      acc.push(cur.name);
      return acc;
    }, []);
    return gameNames;
    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified
    // type, sorted alphabetically.
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]
    const gamesSorted = boardGames[type].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    //  console.log(gamesSorted);
    const gamesListed = gamesSorted.reduce((acc, cur) => {
      acc.push(cur.name);
      return acc;
    }, []);
    return gamesListed;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },
    const filteredGames = boardGames[type].sort((a, b) => {
      return b.rating - a.rating;
    });
    return filteredGames[0];
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.
    const average = boardGames[type].reduce((acc, cur) => {
      acc += cur.rating;
      return acc;
    }, 0);
    return average / boardGames[type].length;
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    const totalRating = boardGames[type].reduce((acc, cur) => {
      acc += cur.rating / cur.maxPlayers;
      return acc;
    }, 0);
    // ???????
    return totalRating / maximumPlayers;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const teacherArr = instructors.reduce((acc, cur) => {
      let students = cohorts.find((cohort) => cohort.module === cur.module);
      acc.push({
        name: cur.name,
        studentCount: students.studentCount,
      });
      return acc;
    }, []);
    return teacherArr;
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    const cohortObj = cohorts.reduce((acc, cur) => {
      let modules = instructors.filter((instructor) => {
        return instructor.module === cur.module;
      });
      if (!acc[`cohort${cur.cohort}`]) {
        acc[`cohort${cur.cohort}`];
      }
      acc[`cohort${cur.cohort}`] = cur.studentCount / modules.length;
      return acc;
    }, {});
    return cohortObj;
    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    const instructorObj = instructors.reduce((acc, cur) => {
      if (!acc[cur.name]) {
        acc[cur.name] = [];
      } else if (cohorts.forEach(cohort => {
        cohort.curriculum.filter(curic => {
          return curic === cur.teaches.forEach(topic => {
            topic
          })
        })
      })) {
        acc[cur.name].push(
          cohorts.forEach((cohort) => {
            cohort.module;
          })
        );
      }
      return acc;
    }, {});
    return instructorObj;
    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    const curicObject = cohorts.reduce((acc, cur) => {
      if (!acc[cur.curriculum.forEach(curic => {curic})]) {
        acc[cur.curriculum.forEach(curic => {curic})]
      }
      return acc;
    }, {})
    return curicObject;
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {
    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
