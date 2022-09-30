# `Random.js`
Реализуйте генератор случайных чисел, представленный классом `Random`. Интерфейс объекта включает в себя три функции:

- Конструктор. Принимает на вход `seed`, начальное число генератора псевдослучайных чисел.
- `getNext()` — метод, возвращающий новое случайное число.
- `reset()` — метод, сбрасывающий генератор на начальное значение.

Экспортируйте класс по умолчанию.

Примеры
```
const seq = new Random(100);
const result1 = seq.getNext();
const result2 = seq.getNext();
 
result1 !== result2; // true
 
seq.reset();
 
const result21 = seq.getNext();
const result22 = seq.getNext();
 
result1 === result21; // true
result2 === result22; // true
```

Подсказки

Простейший способ реализовать случайные числа — [линейный конгруэнтный метод.](https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D1%83%D1%8D%D0%BD%D1%82%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4)