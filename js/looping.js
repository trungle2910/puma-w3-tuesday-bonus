// -----> OVERVIEW
// Our goal with these exercises is to use arrays, objects, and the fundamental building blocks of JS to query our data
// and make new assertions. From a list of people whose attributes we have, what conclusions can be drawn?

// -----> HINTS
// 1. The most important piece of data we will work with is the people array below.
// 2. Take a moment to think about the objects in the array.
// 3. Contemplate how we could sort people based on the data we have about them.
// 4. All functions we write in this exercise will take the people array as it's only argument

const people = [
  {
    id: 1,
    firstName: "Loi",
    lastName: "Tran",
    age: 13,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Mariah Carey", "Justin Bieber", "Britney Spears"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Instructor",
    company: "CoderSchool",
    friendsCount: 5000,
    followers: 4000,
    height: "160mm",
    weight: "70kg"
  },
  {
    id: 2,
    firstName: "Quyen",
    lastName: "Thai",
    age: 23,
    favoriteColors: ["bronze", "white", "green"],
    favoriteSingers: ["Son Tung", "Minh", "Anh", "Taeyoung"],
    nationality: "VN",
    gender: "f",
    zodiac: "Taurus",
    jobTitle: "Student",
    company: "Grab",
    friendsCount: 1500,
    followers: 100,
    height: "160mm",
    weight: "50kg"
  },
  {
    id: 3,
    firstName: "Shawn",
    lastName: "Talvacchia",
    age: 32,
    favoriteColors: ["teal", "white", "torquise"],
    favoriteSingers: ["Romare", "Mount Kimbie", "Nicholas Jaar"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Student",
    company: "Facebook",
    friendsCount: 500,
    followers: 900,
    height: "180mm",
    weight: "70kg"
  },
  {
    id: 4,
    firstName: "Phuong",
    lastName: "Tran",
    age: 27,
    favoriteColors: ["blue", "pink", "green"],
    favoriteSingers: ["Chris Young", "Bruno Mars", "Taylor Swift"],
    nationality: "VN",
    gender: "f",
    zodiac: "Leo",
    jobTitle: "Student",
    company: "Google",
    friendsCount: 900,
    followers: 100,
    height: "155mm",
    weight: "65kg"
  },
  {
    id: 5,
    firstName: "Mai",
    lastName: "Hoang",
    age: 29,
    favoriteColors: ["red", "white", "black"],
    favoriteSingers: ["2pac", "Sia", "Johan Sebastian Von Bach"],
    nationality: "SE",
    gender: "f",
    zodiac: "Pisces",
    jobTitle: "Student",
    company: "Spotify",
    friendsCount: 1500,
    followers: 400,
    height: "140mm",
    weight: "87kg"
  },
  {
    id: 6,
    firstName: "Khuong",
    lastName: "Huynh",
    age: 18,
    favoriteColors: ["red", "green", "blue"],
    favoriteSingers: ["Adele", "Celine Dion", "Tuan Ngoc"],
    nationality: "vn",
    gender: "m",
    zodiac: "aries",
    jobTitle: "Student",
    company: "Amazon",
    friendsCount: 1505,
    followers: 10,
    height: "161mm",
    weight: "74kg"
  },
  {
    id: 7,
    firstName: "Thien",
    lastName: "Hoang",
    age: 28,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Adele", "Nat King Cole", "Westlife"],
    nationality: "VN",
    gender: "m",
    zodiac: "Aries",
    jobTitle: "Student",
    company: "Vingroup",
    friendsCount: 999,
    followers: 540,
    height: "148mm",
    weight: "54kg"
  },
  {
    id: 8,
    firstName: "Hang",
    lastName: "Tran",
    age: 29,
    favoriteColors: ["gray", "navy", "maroon"],
    favoriteSingers: ["Maroon5", "Linkin Park", "Eminem"],
    nationality: "vn",
    gender: "m",
    zodiac: "Sagittarius",
    jobTitle: "Student",
    company: "Go Viet",
    friendsCount: 500,
    followers: 300,
    height: "143mm",
    weight: "89kg"
  },
  {
    id: 9,
    firstName: "Parsa",
    lastName: "Taheri",
    age: 19,
    favoriteColors: ["Green", "Blue", "Yellow"],
    favoriteSingers: ["Shawn Mendes", "Lana Del Rey", "Eminem"],
    nationality: "UK",
    gender: "M",
    zodiac: "capricorn",
    jobTitle: "Student",
    company: "Vodafone",
    friendsCount: 2200,
    followers: 100,
    height: "173mm",
    weight: "62kg"
  },
  {
    id: 10,
    firstName: "Charles",
    lastName: "Lee",
    age: 26,
    favoriteColors: ["red", "white", "amber", "peach", "vanilla", "chocolate", "charcoal gray", "Big Apple Red", "Bubble Bath", "Kiss me on the Tulips"],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Chief Executive Officer",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "169mm",
    weight: "90kg"
  },
  {
    id: 10,
    firstName: "Phil",
    lastName: "Nguyen",
    age: 26,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "T.A.",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "169mm",
    weight: "90kg"
  }
];

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> README
// ----------------------------------------------------------------------------------------------------------------------------------------
// In the commented example below, we use the old javascript syntax to define the function getCoderSchoolStaff().
// Although this works, we should prefer to use the new ES6 syntax.

// -----> ES5(Old Javascript)
// function getCoderSchoolStaff(persons) {
// 		... code ...
// }

// -----> ES6(New Javascript)
// const getCoderSchoolStaff = (persons) => {
// 		... code ...
// }
// What can you see that's different with this definition and line 143?

// -----> TIPS
// I.
// Notice that the 'function' keyword is replaced by const. Also, there is a equal = between the function name and argument(s).
// const getCoderSchoolStaff = (persons) => {

// II.
// Notice also how the parentheses can be left out if the function takes exactly one argument(line 161 & 168 are exactly the same).
// const getCoderSchoolStaff = (persons) => {

// III.
// Lastly, notice how the argument is proceeded by a fat arrow => and then the opening curly brace of the function body
// const getCoderSchoolStaff = (persons) => {

// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Examples
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Define a function getAmericans() which takes the people array as an argument
// and returns an array of people who are Americans.
// It should look like this[{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getAmericans = persons => {
  const americans = [];
  persons.map((person, idx) => {
    // -----> INFO
    // -----> SLOW DOWN LOOP
    // -----> RUN CODE IN CONSOLE AND SEE WHAT CONSOLE OUTPUTS ON EACH ITERATION OF THIS LOOP
    // -----> COMMENT OUT WHEN CONFIDENT YOU UNDERSTAND HOW THIS LOOP WILL BEHAVE ON EACH ITERATION
    (() =>
      setTimeout(() => {
        console.log("%cIndex of people array: ", "color: green", idx);
        console.log(`%cElement: `, "color: green", person);
      }, 3000 * idx))(idx);

    // Code below dictates behavior
    if (person.nationality === "USA") {
      americans.push(person);
    }
  });

  document.getElementById("getAmericans").innerHTML = americans.map(a => `<li>${a.firstName}</li>`).join(" ")
  return americans;
};

function onGetAmericans() {
  getAmericans(people)
}

// Read the code and think about it, then uncomment this line to see what the return value of getAmericans() is.
// console.log('getAmericans', getAmericans(people));

// 2. Define a function getCoderSchoolStaff() which takes the people array as an argument
// and returns an array of people who work at 'CoderSchool'.
// We would want it to look something like this [{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getCoderSchoolStaff = persons => {
  const coderSchoolStaff = [];

  persons.map(person => {
    if (person.company === "CoderSchool") {
      coderSchoolStaff.push(person);
    }
  });
  document.getElementById("getCoderSchoolStaff").innerHTML = coderSchoolStaff.map(css => `<li>${css.firstName}</li>`).join(" ")
  return coderSchoolStaff;
};

function onGetCoderSchoolStaff() {
  getCoderSchoolStaff(people)
}

// Read the code and think about it, then uncomment this line to see what the return value of getCoderSchoolStaff() is.
// console.log(getCoderSchoolStaff(people));

// 3. Define a function getMostPopularPerson() which takes the people array as an argument
// and returns an object. The object will have two keys. A person key will have the person as it's value.
// The total key will have the total of followers & friends of the most popular person. The person with the most followers & friends
// is the most popular.
// It should look like this { person: { firstName: 'Loi' }, total: 9000 }

const getMostPopularPerson = persons => {
  let mostPopulerInfo = { person: {}, totalPopularity: 0 };

  persons.map(person => {
    const totalPopularity = person.friendsCount + person.followers;
    if (totalPopularity > mostPopulerInfo.totalPopularity) {
      const newMostPopular = { totalPopularity, person };
      console.log("newMostPopular", newMostPopular);
      mostPopulerInfo = newMostPopular;
    }
  });
  document.getElementById("getMostPopularPerson").innerHTML = `${mostPopulerInfo.person.firstName} is the most popular with a score of ${mostPopulerInfo.totalPopularity}`
  return mostPopulerInfo;
};

function onGetMostPopularPerson() {
  getMostPopularPerson(people)
}

// What will mostPopularPerson be? Try in your console
// console.log(getMostPopularPerson(people));

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Assignment
// ----------------------------------------------------------------------------------------------------------------------------------------

// ?. Define a function findVietnamese() which will take the people array as an argument and
// return an array. The array will contain persons who have nationality as VN for Vietnamese.
// Make sure the function will account for 'VN' and 'vn'
// It should look like this [{}, {}, {}, ...]

// ?. Define a function countGenders() which will take the people array as an argument and
// return a string.
// It should look like this "There are 7 males and 3 males"

// ?. Define a function findStudents() which will take the people array as an argument and
// return an array. The array will contain persons who have jobTitle listed as 'Student'.
// It should look like this [{}, {}, {}]

// ?. Define a function findNguyens() which will take the people array as an argument and
// return an array. The array will contain persons whose last names are Nguyen.
// It should look like this [{}, {}]

// ?. Define a function findAdults() which will take the people array as an argument and
// return an array. The array will contain all people who's age is above 18 and above
// It should look like this [{}, {}, {}, ...]

// ?. Define a function findFavoriteColors() which will take the people array as an argument and
// return an array. The array will contain UNIQUE colors collected from all persons.
// It should look like this ['red', 'black', 'pink', ...]

// ?. Define a function findJobTitles() which will take the people array as an argument and
// return an array. The array will contain UNIQUE jobTitles.
// It should look like this ['CEO', 'Instructor', 'Student']

// ?. Define a function findBirthYears() which will take the people array as an argument and
// return an array. The array will contain all years which the people were born in.
// It should look like this ['1997', '1990', '1987', ...]

// ?. Define a function sortOldToYoung() which will take the people array as an argument and
// return an array. The array will contain all persons sorted from oldest to youngest
// It should look like this [{}, {}, {}, ...]

// ?. Define a function splitIntoMinorsAndAdults() which will take the people array as an argument and
// return three arrays. The first array will have two arrays within it.
// The two nested arrays will contain persons. The 0 index nested array will have minors and the 1 index will have adults.
// It should look like this [[{}, {}, {}, ...], [{}, {}, {}, ...]]

// ?. Define a function addFavoriteHerosToPeople() which will take the people array as an argument and
// return an array. The array will contain all persons in the original array where each person has
// a new key(favoriteSuperHeros) with the value of an empty array [].
// It should look like this [{firstName: 'Loi', favoriteSuperHeros: [], ...}]

// ?. Define a function addBirthPlacesToPeople() which will take the people array as an argument and
// return an array. The array will contain all the original persons in the array with an additional
// key(birthPlace) with the value of a new object {}.
// It should look like this [{firstName: 'Loi', birthPlace: {}, ...}]

// ?. Define a function findMostFavoritedColor() which will take the people array as an argument and
// return an string. The string will be the color which has the most people that have it in their favoriteColors.
// In the event there are two colors with equal numbers. Return a string that says 'x and y were really popular!'
// It should look like this 'black' or 'black and red were really popular!'

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> LOOKING AHEAD
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. This is how we could implement getAmericans() on one line. 'Descruturing' is important for how this function behaves.
// const getAmericans = persons =>
//   persons.filter(({ nationality }) => nationality === "USA");

// 2. Arguments/Parameters dictate how our function will behave. This is an example of how we could
// use an additional parameter and make our function more flexible.
const getNationality = (persons, soughtNationality) =>
  persons.filter(
    ({ nationality: userNationality }) => soughtNationality === userNationality
  );
