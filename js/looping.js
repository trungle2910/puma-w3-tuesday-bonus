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
    weight: "70kg",
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
    weight: "50kg",
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
    weight: "70kg",
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
    weight: "65kg",
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
    weight: "87kg",
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
    weight: "74kg",
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
    weight: "54kg",
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
    weight: "89kg",
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
    weight: "62kg",
  },
  {
    id: 10,
    firstName: "Charles",
    lastName: "Lee",
    age: 26,
    favoriteColors: [
      "red",
      "white",
      "amber",
      "peach",
      "vanilla",
      "chocolate",
      "charcoal gray",
      "Big Apple Red",
      "Bubble Bath",
      "Kiss me on the Tulips",
    ],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Chief Executive Officer",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "250mm",
    weight: "90kg",
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
    weight: "90kg",
  },
  {
    id: 11,
    firstName: "Duy Hung",
    lastName: "Nguyen",
    age: 13,
    favoriteColors: ["black", "yellow", "blue"],
    favoriteSingers: ["Bonnie Tyler"],
    nationality: "Vietnamese",
    gender: "m",
    zodiac: "Scorpio",
    jobTitle: "Student",
    company: "Company of Life",
    friendsCount: 500,
    followers: 300,
    height: "160mm",
    weight: "70kg",
  },
];

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Examples
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Define a function getAmericans() which takes the people array as an argument
// and returns an array of people who are Americans.
// It should look like this[{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getAmericans = (persons) => {
  document.getElementById("getAmericans").innerHTML = persons
    .filter(({ nationality }) => nationality === "USA")
    .map((person) => `<li>${person.firstName}</li>`)
    .join(" ");
};

function onGetAmericans() {
  getAmericans(people);
}

// 2. Define a function getCoderSchoolStaff() which takes the people array as an argument
// and returns an array of people who work at 'CoderSchool'.
// We would want it to look something like this [{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getCoderSchoolStaff = (persons) => {
  document.getElementById("getCoderSchoolStaff").innerHTML = persons
    .filter((person) => person.company === "CoderSchool")
    .map((staff) => `<li>${staff.firstName}</li>`)
    .join(" ");
};

function onGetCoderSchoolStaff() {
  getCoderSchoolStaff(people);
}

// 3. Define a function getMostPopularPerson() which takes the people array as an argument
// and returns an object. The object will have two keys. A person key will have the person as it's value.
// The total key will have the total of followers & friends of the most popular person. The person with the most followers & friends
// is the most popular.
// It should look like this { person: { firstName: 'Loi' }, total: 9000 }

const getMostPopularPerson = (persons) => {
  let mostPopulerInfo = { person: {}, totalPopularity: 0 };

  persons.map((person) => {
    const totalPopularity = person.friendsCount + person.followers;
    if (totalPopularity > mostPopulerInfo.totalPopularity) {
      const newMostPopular = { totalPopularity, person };
      mostPopulerInfo = newMostPopular;
    }
  });
  document.getElementById(
    "getMostPopularPerson"
  ).innerHTML = `${mostPopulerInfo.person.firstName} is the most popular with a score of ${mostPopulerInfo.totalPopularity}`;
};

function onGetMostPopularPerson() {
  getMostPopularPerson(people);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Assignment
// ----------------------------------------------------------------------------------------------------------------------------------------

// 4. Define a function findVietnamese() which will take the people array as an argument and
// return an array. The array will contain persons who have nationality as VN for Vietnamese.
// Make sure the function will account for 'VN' and 'vn'
// It should look like this [{}, {}, {}, ...]
const getVietnamese = (persons) => {
  document.getElementById("getVietnamese").innerHTML = persons
    .filter(
      ({ nationality }) =>
        nationality.toLowerCase() === "vn" ||
        nationality.toLowerCase() === "vietnamese"
    )
    .map((person) => `<li>${person.firstName}</li>`)
    .join(" ");
};

function findVietnamese() {
  getVietnamese(people);
}

// 5. Define a function countGenders() which will take the people array as an argument and
// return a string.
// It should look like this "There are 7 males and 3 females"
const getGenders = (persons) => {
  let males = 0;
  let females = 0;
  persons.forEach((item) => {
    if (item.gender == "f") {
      females++;
    } else {
      males++;
    }
  });
  document.getElementById(
    "getGenders"
  ).innerHTML = `There are ${males} males and ${females} females`;
};
function countGenders() {
  getGenders(people);
}

// 6. Define a function findTallest() which will take the people array as an argument and
// return an string.
// The string should look like "Charles was the tallest at 250mm"
const getTallest = (persons) => {
  let tallest = people.sort((a, b) => (a.height > b.height ? -1 : 1));
  document.getElementById(
    "getTallest"
  ).innerHTML = `${tallest[0].firstName} was the tallest at ${tallest[0].height}`;
};

function findTallest() {
  getTallest(people);
}
// 7. Define a function findAverageHeight() which will take the people array as an argument and
// return an string.
// The string should look like "The average height of our people is 168mm."
const getAverageHeight = (persons) => {
  const averageHeight = persons.reduce(
    (sum, item) => (sum += parseInt(item.height.replace("mm", ""))),
    0
  );
  document.getElementById(
    "getAverageHeight"
  ).innerHTML = `The average height of our people is ${Math.floor(
    averageHeight / persons.length
  )}mm.`;
};
function findAverageHeight() {
  getAverageHeight(people);
}
// 8. Define a function findZodiacs() which will take the people array as an argument and
// return an string. The string should say the users were from these signs
// The string should look like "We have Cancers, Tauruss, ... among our people"
const getZodiacs = (persons) => {
  let zodiacs = ["Cancer"];
  persons.forEach((element) => {
    let current = zodiacs.find(
      (item) => item.toLowerCase() == element.zodiac.toLowerCase()
    );
    if (!current) {
      zodiacs.push(element.zodiac);
    }
  });
  document.getElementById("getZodiacs").innerHTML = `We have ${zodiacs
    .map((item) => `<li>${item}</li>`)
    .join("")}`;
};
function findZodiacs() {
  getZodiacs(people);
}

// 9. Define a function findAverageAge() which will take the people array as an argument and
// return an string. The string will have the average age of the people
// The string should look like "The average age of the people is 21"
const getAverageAge = (person) => {
  document.getElementById(
    "getAverageAge"
  ).innerHTML = `The average age of the people is ${Math.floor(
    person.reduce((sum, item) => (sum += item.age), 0) / people.length
  )}.`;
};
function findAverageAge() {
  getAverageAge(people);
}

// 10. Define a function findStudents() which will take the people array as an argument and
// return an array. The array will contain persons who have jobTitle listed as 'Student'.
// It should look like this [{}, {}, {}]
const getStudents = (persons) => {
  let students = people.filter(
    (item) => item.jobTitle.toLowerCase() == "student"
  );
  document.getElementById("getStudents").innerHTML = students
    .map((name) => `<li>${name.firstName}</li>`)
    .join(" ");
};
function findStudents() {
  getStudents(people);
}

// 11. Define a function findNguyens() which will take the people array as an argument and
// return an array. The array will contain persons whose last names are Nguyen.
// It should look like this [{}, {}]
const getNguyens = (persons) => {
  document.getElementById("getNguyens").innerHTML = persons
    .filter((item) => item.lastName == "Nguyen")
    .map((item) => `<li>${item.firstName} ${item.lastName}</li>`)
    .join("");
};
function findNguyens() {
  getNguyens(people);
}
// 12. Define a function findAdults() which will take the people array as an argument and
// return an array. The array will contain all people who's age is above 18 and above
// It should look like this [{}, {}, {}, ...]
const getAdults = (persons) => {
  document.getElementById("getAdults").innerHTML = persons
    .filter((item) => item.age >= 18)
    .map((item) => `<li>${item.firstName} ${item.lastName}</li>`)
    .join(" ");
};
function findAdults() {
  getAdults(people);
}

// 13. Define a function findFavoriteColors() which will take the people array as an argument and
// return an array. The array will contain UNIQUE colors collected from all persons.
// It should look like this ['red', 'black', 'pink', ...]
const getFavoriteColors = (persons) => {
  let color = [];
  people.forEach((a) => {
    a.favoriteColors.forEach((b) => {
      let current = color.find((item) => item.toLowerCase() == b.toLowerCase());
      if (!current) {
        color.push(b);
      }
    });
  });
  document.getElementById("getFavoriteColors").innerHTML = `${color
    .map((item) => item)
    .join(", ")}`;
};
function findFavoriteColors() {
  getFavoriteColors(people);
}
// 12. Define a function findAdults() which will take the people array as an argument and
// return an array. The array will contain all people who's age is above 18 and above
// It should look like this [{}, {}, {}, ...]

// 13. Define a function findFavoriteColors() which will take the people array as an argument and
// return an array. The array will contain UNIQUE colors collected from all persons.
// It should look like this ['red', 'black', 'pink', ...]

// 14. Define a function findJobTitles() which will take the people array as an argument and
// return an array. The array will contain UNIQUE jobTitles.
// It should look like this ['CEO', 'Instructor', 'Student']

// 15. Define a function findBirthYears() which will take the people array as an argument and
// return an array. The array will contain all years which the people were born in.
// It should look like this ['1997', '1990', '1987', ...]

// 16. Define a function sortOldToYoung() which will take the people array as an argument and
// return an array. The array will contain all persons sorted from oldest to youngest
// It should look like this [{}, {}, {}, ...]

// 17. Define a function splitIntoMinorsAndAdults() which will take the people array as an argument and
// return three arrays. The first array will have two arrays within it.
// The two nested arrays will contain persons. The 0 index nested array will have minors and the 1 index will have adults.
// It should look like this [[{}, {}, {}, ...], [{}, {}, {}, ...]]

// 18. Define a function addFavoriteHerosToPeople() which will take the people array as an argument and
// return an array. The array will contain all persons in the original array where each person has
// a new key(favoriteSuperHeros) with the value of an empty array [].
// It should look like this [{firstName: 'Loi', favoriteSuperHeros: [], ...}]

// 19. Define a function addBirthPlacesToPeople() which will take the people array as an argument and
// return an array. The array will contain all the original persons in the array with an additional
// key(birthPlace) with the value of a new object {}.
// It should look like this [{firstName: 'Loi', birthPlace: {}, ...}]

// 20. Define a function findMostFavoritedColor() which will take the people array as an argument and
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
