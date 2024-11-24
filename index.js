// Задание 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала шли не купленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let productArr = [];

let tomatoes = {
  name: "tomatoes",
  count: 10,
  isSold: false,
};

let apples = {
  name: "apples",
  count: 1,
  isSold: false,
};

let oranges = {
  name: "oranges",
  count: 3,
  isSold: false,
};

let peaches = {
  name: "peaches",
  count: 0,
  isSold: true,
};

const addProduct = (productArr, product) => {
  if (productArr.includes(product)) {
    if (product.count == 0) {
      product.isSold == false;
    }
    product.count += 1;
  } else {
    productArr.push(product);
  }
};

const sellProduct = (productArr, product) => {
  if (productArr.includes(product)) {
    if (product.count == 0) {
      return;
    }
    product.count -= 1;
    if (product.count == 0) {
      product.isSold = true;
    }
  }
};

const showAllProducts = (productArr) => {
  sortedArr = [...productArr].sort((a, b) => b.isSold - a.isSold);
  sortedArr.forEach((product) => {
    console.log(
      `name: ${product.name}\ncount: ${product.count}\n${
        product.isSold == true ? "sold" : "in stock"
      }`
    );
  });
};
addProduct(productArr, tomatoes);
addProduct(productArr, apples);
addProduct(productArr, oranges);
addProduct(productArr, peaches);
sellProduct(productArr, apples);

showAllProducts(productArr);

// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

let billArr = [
  {
    name: "chocolate",
    count: 3,
    price: 3.5,
  },

  {
    name: "bottle of milk",
    count: 1,
    price: 5,
  },

  {
    name: "bread",
    count: 2,
    price: 0.6,
  },

  {
    name: "bag of chips",
    count: 3,
    price: 4,
  },

  {
    name: "4 rolls of toilet paper",
    count: 3,
    price: 2,
  },
];

const showBill = (billArr) => {
  billArr.forEach((product) => {
    console.log(`
name: ${product.name}
count: ${product.count}
price: ${product.price}`);
  });
};

const billTotalPrice = (billArr) => {
  return billArr.reduce((previousValue, product) => {
    return previousValue + product.price * product.count;
  }, 0);
};

const priciestProduct = (billArr) => {
  return [...billArr]
    .sort((a, b) => b.price - a.price)
    .find((product) => product);
};

const billAvgPrice = (billArr) => {
  return (
    billArr.reduce(
      (previousValue, product) => (previousValue += product.price),
      0
    ) / billArr.length
  );
};

showBill(billArr);
console.log("total price", billTotalPrice(billArr));
console.log("priciestProduct", priciestProduct(billArr));
console.log("Avg price", billAvgPrice(billArr));

// Задание 3
//  Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух
//  свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст,
//  и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

const stylesArr = [
  {
    styleName: "color",
    styleProperty: "red",
  },
  {
    styleName: "background-color",
    styleProperty: "lightGray",
  },
  {
    styleName: "font-family",
    styleProperty: "verdana",
  },
  {
    styleName: "font-size",
    styleProperty: "50px",
  },
  {
    styleName: "text-align",
    styleProperty: "center",
  },
];

const writeTextWithStyles = (text, stylesArr) => {
  let styles = stylesArr.reduce((previousValue, style) => {
    return (previousValue += `${style.styleName}:${style.styleProperty};`);
  }, `style="`);
  styles += `"`;
  document.write(`<p ${styles}>${text}</p>`);
  document.close;
};

writeTextWithStyles("some text!", stylesArr);

//  Задание 4
//  Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета,
//  для которого она предназначена. Написать несколько функций для работы с ним.
//  1. Вывод на экран всех аудиторий.
//  2. Вывод на экран аудиторий для указанного факультета.
//  3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.
//  4. Функция сортировки аудиторий по количеству мест.
//  5. Функция сортировки аудиторий по названию (по алфа- виту).

const auditoriumArr = [
  {
    name: "1# Lecture hall",
    seatsCount: 10,
    facultyName: "Political science",
  },
  {
    name: "2# Lecture hall",
    seatsCount: 15,
    facultyName: "Political science",
  },
  {
    name: "3# Lecture hall",
    seatsCount: 20,
    facultyName: "Political science",
  },
  {
    name: "4# Lecture hall",
    seatsCount: 10,
    facultyName: "Political science",
  },
  {
    name: "1# Lecture hall",
    seatsCount: 20,
    facultyName: "Humanities",
  },
  {
    name: "2# Lecture hall",
    seatsCount: 10,
    facultyName: "Humanities",
  },
  {
    name: "3# Lecture hall",
    seatsCount: 15,
    facultyName: "Humanities",
  },
  {
    name: "4# Lecture hall",
    seatsCount: 20,
    facultyName: "Humanities",
  },
];

const showAllHalls = (auditoriumArr) => {
  auditoriumArr.forEach((auditorium) => {
    console.log(
      `name: ${auditorium.name}
number of seats: ${auditorium.seatsCount}
faculty: ${auditorium.facultyName}`
    );
  });
};

// showAllHalls(auditoriumArr);

const showFacultyAllHalls = (auditoriumArr, facultyName) => {
  auditoriumArr.forEach((auditorium) => {
    if (auditorium.facultyName == facultyName) {
      console.log(
        `name: ${auditorium.name}
number of seats: ${auditorium.seatsCount}
faculty: ${auditorium.facultyName}`
      );
    }
  });
};

// showFacultyAllHalls(auditoriumArr, "Faculty of Humanities");

const group1 = {
  studentsCount: 15,
  faculty: "Political science",
};

const showGroupHalls = (auditoriumArr, group) => {
  auditoriumArr.forEach((auditorium) => {
    if (
      auditorium.facultyName == group.faculty &&
      auditorium.seatsCount >= group.studentsCount
    ) {
      console.log(
        `name: ${auditorium.name}
number of seats: ${auditorium.seatsCount}
faculty: ${auditorium.facultyName}`
      );
    }
  });
};

// showGroupHalls(auditoriumArr, group1);

const sortAuditBySeats = (auditoriumArr) => {
  return [...auditoriumArr].sort((a, b) => b.seatsCount - a.seatsCount);
};

// console.log(sortAuditBySeats(auditoriumArr));

const sortAuditByFaculty = (auditoriumArr) => {
  return [...auditoriumArr].sort((a, b) =>
    a.facultyName.localeCompare(b.facultyName)
  );
};

console.log(sortAuditByFaculty(auditoriumArr));
