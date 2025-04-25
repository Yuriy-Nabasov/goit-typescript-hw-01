//! Завдання 1

//? Типізуйте асинхронну функцію fetchData , яка замість URL-ресурсу та повертає об’єкт з даними.
//? Використовуйте Generics для типізації повернутих даних.

// import axios from "axios";

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url, {
      // url та параметри з 4ої ДЗ по Реакту для перевірки роботи
      params: {
        query: `forest`,
        orientation: `landscape`,
        per_page: 9,
        page: 1,
        client_id: `rc7ikE3GSphGLM5Qt1Omx9WnfsXpe-T9hNq9IIBX2Pg`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface Photo {
  id: number;
  description: string;
}

async function exampleUsage() {
  try {
    const item: Photo = await fetchData<Photo>(
      "https://api.unsplash.com/search/photos"
    );
    console.log(`Дженерики. Завдання 1:`, item), ` `;
  } catch (error) {
    console.error((error as Error).message);
  }
}

exampleUsage();
