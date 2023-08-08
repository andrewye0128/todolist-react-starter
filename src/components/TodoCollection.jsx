import TodoItem from './TodoItem';

const TodoCollection = ({ 
  todos, 
  onSave, 
  onDelete, 
  onToggleDone, 
  onChangeMode 
}) => {
  return (
    <div>
      TodoCollection
      {todos.map( todo => {
         return <TodoItem ket={todo.id} todo={todo} />
      })}
    </div>
  );
};

export default TodoCollection;
