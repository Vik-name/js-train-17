// Завдання 3

/**
 * Функція `extractTextInParentheses` вилучає текст, який знаходиться в круглих дужках, з рядка.
 *
 *  str - Рядок, з якого треба вилучити текст.
 */
function extractTextInParentheses(str) {
  // Створення регулярного виразу з використанням зворотніх посилань для пошуку тексту в круглих дужках /\((.*?)\)/g.
  const regex = /\((.*?)\)/g;
  // Використання методу `matchAll` для отримання всіх збігів регулярного виразу.
  const arrText = [...str.matchAll(regex)];
  // Створення масиву зі знайденими текстами.
  const extrTexts = arrText.map((match) => match[1]);
  // Повернення масиву вилучених текстів.
  return extrTexts;
}

// Перевірка
console.log("Завдання 3 ==============================");

console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Виведе [ 'text', 'parentheses' ]

// Завдання 4

/**
 * Функція `countEmails` знаходить та підраховує кількість email-адрес у рядку.
 *
 *  str - Рядок, в якому потрібно знайти email-адреси.
 */
function countEmails(str) {
  // Створення регулярного виразу для пошуку email-адрес /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.
  const Emails = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  // Використання методу `match` для отримання всіх збігів регулярного виразу.
  const allMatches = str.match(Emails);
  // Підрахунок кількості email-адрес.
  const count = allMatches ? allMatches.length : 0;
  // Повернення кількості email-адрес.
  return count;
}

// Перевірка
console.log("Завдання 4 ==============================");

console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Виведе  3

// Завдання 5
/**
 * Функція `findWordOccurrences` знаходить всі входження заданого слова у рядок з урахуванням ігнорування регістру.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 *  Повертає масив з індексами всіх входжень слова у рядок.
 */
function findWordOccurrences(str, word) {
  // Створення регулярного виразу для пошуку слова з флагами 'g та 'i',
  const regex = new RegExp(word, "ig");
  // Створюємо пустий масив matches, та змінну match без значення
  const matches = [];
  let match = regex.exec(str);

  // За допомогою циклу whild створюємо ітерацію поки рядок містить збіги з регулярним виразом, та змінній match присвоюємо збіги
  while (match) {
    // Додавання індексу поточного входження слова у масив.
    matches.push(match.index);

    // Оновлення lastIndex,присвоєюмо йому значення  match.index + 1, щоб продовжити пошук з наступного символу
    regex.lastIndex = match.index + 1;
    match = regex.exec(str);
    // Повертаємо масив
  }
  return matches;
}
// Перевірка

console.log("Завдання 5 ==============================");

console.log(
  findWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The Fox is quick.",
    "fox"
  )
);
// Виведе  [ 16, 49 ]
