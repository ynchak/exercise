# `tree.js`
Реализуйте и экспортируйте функцию `compressImages()`, которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их. Под сжиманием понимается уменьшение свойства `size` в метаданных в два раза. Функция должна вернуть новую директорию со сжатыми картинками и всеми остальными данными, которые были внутри этой директории.

Картинками считаются все файлы заканчивающиеся на `.jpg`.

Примеры
```
const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);
 
const newTree = compressImages(tree);
// То же самое, что и tree, но во всех картинках размер уменьшен в два раза
```

Подсказка, если нужно установи lodash
```sh
npm i ladash -D
```
после добавь в файле `tree.js` строку
```js
import _ from 'lodash';
```