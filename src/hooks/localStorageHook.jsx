import { useState, useEffect } from "react";

const useLocalStorage = (key, intiValue) => {
  const [storedItem, setStoredItem] = useState(() => {

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : intiValue;
    } catch (error) {
      console.error(`my first error 💥 :  ${error}`);
      return intiValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedItem));
    } catch (error) {
      console.error(error);
    }
  }, [storedItem, key]);

  return [storedItem, setStoredItem]
};

export default useLocalStorage;