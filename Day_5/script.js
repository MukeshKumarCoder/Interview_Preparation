// problem solving

// 1. **Check if two strings are anagrams of each other**
//     - **Sample Input:** `"listen"` and `"silent"`
//     - **Expected Output:** `true`

const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return;

  const str1value = str1.split("").sort().join("");
  const str2value = str2.split("").sort().join("");

  return str1value === str2value;
};

// console.log(anagrams("listen", "silent"));

// 2. **Flatten a nested array (1 level deep)**
//     - **Sample Input:** `[1, [2, 3], 4, [5, 6]]`
//     - **Expected Output:** `[1, 2, 3, 4, 5, 6]`

const flattenArray = (arr) => {
  return arr.reduce((acc, val) => acc.concat(val), []);
};

// console.log(flattenArray([1, [2, 3], 4, [5, 6]]));

// 3. **Find the longest word in a given sentence**
//     - **Sample Input:** `"The quick brown fox jumps"`
//     - **Expected Output:** `"jumps"`

const longestWord = (sentence) => {
  const words = sentence.trim().split(/\s+/);
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
};

// console.log(longestWord("The quick brown fox jumps"));

// 4. **Capitalize the first letter of every word in a sentence**
//     - **Sample Input:** `"hello world"`
//     - **Expected Output:** `"Hello World"`

const capitalizeWord = (input) => {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// console.log(capitalizeWord("hello world"));

// 5. **Return common elements from two arrays**
//     - **Sample Input:** `[1, 2, 3, 4]` and `[3, 4, 5, 6]`
//     - **Expected Output:** `[3, 4]`

const findCommonElement = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

// console.log(findCommonElement([1, 2, 3, 4], [3, 4, 5, 6]));

//  Array Manipulation (HOFs)
// js
// CopyEdit

const numbers = [3, 6, 9, 12, 15, 18];

// Use filter to return numbers divisible by 3 but not by 6.
const result = numbers.filter((num) => num % 3 === 0 && num % 6 !== 0);

// console.log(result)

// Use map to convert numbers into objects like { value: 3, isEven: false }.

const convertedNumber = numbers.map((num) => ({
  value: num,
  isEven: num % 2 === 0,
}));

// console.log(convertedNumber)

// Use reduce to find the product of all numbers.

const productOfAll = numbers.reduce((acc, val) => acc * val, 0);

// console.log(productOfAll)

// Chain filter, map, and reduce to double odd numbers and find their sum.

const chaining = numbers
  .filter((num) => num % 2 !== 0)
  .map((num) => num * 2)
  .reduce((acc, val) => acc + val, 0);

// console.log(chaining);

// Use every to check if all numbers are greater than 2.

const greaterThanTwo = numbers.every((num) => num > 2);

// console.log(greaterThanTwo)

// 🔹 Handling Arrays of Objects

const products = [
  { id: 1, name: "Pen", price: 10, category: "Stationery" },
  { id: 2, name: "Notebook", price: 50, category: "Stationery" },
  { id: 3, name: "Shirt", price: 500, category: "Clothing" },
  { id: 4, name: "Jeans", price: 1000, category: "Clothing" },
  { id: 5, name: "Mug", price: 150, category: "Kitchenware" },
];

// Find all products in the "Clothing" category.

const clothingCategory = products.filter(
  (product) => product.category === "Clothing"
);
// console.log(clothingCategory);

// Sort products by price in descending order.

const sortByPrice = products.sort((a, b) => b.price - a.price);
// console.log(sortByPrice);

// Return a list of product names with price less than 200.

const priceLessThan200 = products.filter(
  (product) => product.price < 200 && product.name
);
// console.log(priceLessThan200)

// Check if any product belongs to category "Electronics".

const productBelongsTo = products.some(
  (product) => product.category === "Electronics"
);
// console.log(productBelongsTo);

// Calculate the total price of all items in the "Stationery" category.

const totalPrice = products
  .filter((product) => product.category === "Stationery")
  .reduce((acc, val) => acc + val.price, 0);
// console.log(totalPrice)

// Group products by category into an object with dynamic keys.

const groupedByCategory = products.reduce((acc, product) => {
  const { category } = product;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});

// console.log(groupedByCategory);

// Write a debounce function and apply it to an input’s keyup event for live searching.

const debounceFunction = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const searchInput = document.querySelector("#searchInput");
const searchInputValue = document.querySelector("#value");

function handleSearch(event) {
  const query = event.target.value;
  searchInputValue.innerHTML = query;
  //   console.log("Searching for:", query);
}

const debouncedSearch = debounceFunction(handleSearch, 300);

searchInput.addEventListener("keyup", debouncedSearch);

// Create a tab-switcher UI in vanilla JS that shows and hides content sections.

const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetedTab = tab.getAttribute("data-tab");

    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    document
      .querySelector(`.tab-content[data-tab="${targetedTab}"]`)
      .classList.add("active");
  });
});

// Traverse a list of items via JS and add a CSS class to every even-indexed element.

const listItems = document.querySelectorAll("#myList li");

listItems.forEach((item, index) => {
  if (index % 2 === 0) {
    item.classList.add("even-item");
  }
});

// Implement a “Back to Top” button that appears after scrolling down 200px.
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Build an ES module exporting utility functions, then import and use them in another script.

import { multi } from "./utils";

// console.log(add(5, 6))
console.log(multi(5, 6));
