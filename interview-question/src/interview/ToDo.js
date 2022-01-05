/*
I can say that 1 of 5 coding tests in React will ask you to build a todo app with minimum functionality.
Add todo.
On click on that todo, cross line it.
Display the total number of todos and the left to be done todos.
It may seem trivial and probably it is.
For senior developers.

However, there are a lot of gotchas to take into account.

How do you keep track if a todo is done, line through, or not?

How do you count how many todos were completed to subtract them from the total number of todos?I can say that 1 of 5 coding tests in React will ask you to build a todo app with minimum functionality.
Add todo.
On click on that todo, cross line it.
Display the total number of todos and the left to be done todos.
It may seem trivial and probably it is.
For senior developers.

However, there are a lot of gotchas to take into account.

How do you keep track if a todo is done, line through, or not?

How do you count how many todos were completed to subtract them from the total number of todos?

*/
import './Todo.css';
import { useState } from 'react';

const ToDo = () => {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onChange = e => {
    setItem(e.target.value);
  };
//what the  use of math.random here!!!
  const handleClick = () => {
    if (item.length > 0) {
      setItemList(prevItems => [
        ...prevItems,
        { id: Math.random(), item, isDone: false }
      ]);
      setItem('');
    }
  };

  const handleItemClass = index => {
    setItemList(
      itemList.map(el => {
        if (el === itemList[index]) {
          el.isDone = !el.isDone;
        }
        return el;
      })
    );
  };

  return (
    <>
      <div>
        <input type="text" onChange={onChange} value={item} />
        <button onClick={handleClick}>Add</button>
      </div>
      <p>
        {itemList.filter(el => el.isDone).length} completed from{' '}
        {itemList.length}
      </p>
      <ul>
        {itemList.map((itemCurrent, i) => (
          <li
            key={itemCurrent.id}
            onClick={() => handleItemClass(i)}
            className={itemCurrent.isDone ? 'is-done' : ''}
          >
            {itemCurrent.item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ToDo;