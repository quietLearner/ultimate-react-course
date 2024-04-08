const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);

// name must be exactly the same as in book, order does NOT matter
const { hasMovieAdaptation, author, pages, genres, title } = book;
title;
author;
pages;
genres;
hasMovieAdaptation;

const primaryGenre = genres[0];
const secondaryGenre = genres[1];

const [a, b, ...others] = genres;
a;
b;
others;

const newGeneres = [...genres, "lol", ...genres];
newGeneres;

//Overwrite, you can put ...book at the end, but it might not make sense. if you want to replace pages by a new value,
const updatedBook = { ...book, pages: 300, movieDate: "2001-12-9" };
updatedBook;

//template literal
const summary = `abc ${1 + 3}`;

summary;

const getYear = (str) => str.split("_")[0];

const year = getYear("1921_1");
year;

console.log(true && false);
console.log(true && "lol");
console.log(false && "lol");

//Nullish coalescing operator
console.log(null || 1);
console.log(undefined ?? 1);

console.log(true ?? 1);
console.log(false ?? 1);

console.log("lol" ?? 1);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
function getTotalReviewCount(book) {
  const goodreads = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const reviewCount = getTotalReviewCount(book);
reviewCount;

//map, filter, reduce
[12, 3, 3, 4, 54].map((e, i) => e * 2);

const books = getBooks();

const titles = books.map((b) => b.title);
titles;

books;

console.log(book);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));
essentialData;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// arr is also mutated.
const arr = [2, 3, 1, 9, 27, 5];

const sorted = arr.sort((a, b) => a - b);
sorted;
arr;

const arr1 = [2, 3, 1, 9, 27, 5];
const sorted1 = arr1.slice().sort((a, b) => a - b);
sorted1;
arr1;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;
