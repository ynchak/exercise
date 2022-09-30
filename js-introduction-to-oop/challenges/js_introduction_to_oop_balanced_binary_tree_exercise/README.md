Особенность структуры двоичного дерева даёт хороший прирост к эффективности при поиске нужного значения. Для этого нужно, чтобы двоичное дерево было сбалансированным. То есть необходимо построить дерево так, чтобы общее количество узлов в левом и правом поддеревьях было примерно одинаковым для любого узла дерева.

# `Node.js`
Реализуйте метод `isBalanced()`, который проверяет дерево на сбалансированность. Он возвращает `true`, если количество узлов в левом и правом поддеревьях каждого узла отличается не более, чем на 2. В ином случае метод должен вернуть `false`.

Сбалансированное дерево

![Сбалансированное двоичное дерево поиска](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjgyNjVjZjQyZDUwZjEwNDA2NjZhNWM0ZWQyYmU2NjM0LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=32551343d13c4b02f184a5f19fdd7a385895732a1e24d2e3d28e5d4a8c7c6d70)

Несбалансированное дерево

![Несбалансированное двоичное дерево поиска](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6ImQ1Y2E3NzYzNTgxMTNjMDM0OWJhMWJkMWJjNDI4NGY2LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=63ea83d74527c2c46dc9ab6ef45910accc5cc1a1a7e96e2c48ec2203567e81a5)

В узле `5` количество узлов в левом поддереве равно 4, а в правом — 1. Разница составляет 3. Это больше, чем максимально допустимая разница по условию задачи (2).

Примеры
```
const tree1 = new Node(4,
  new Node(3,
    new Node(2)));
 
tree1.isBalanced(); // true
 
const tree2 = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));
 
tree2.isBalanced(); // false
```