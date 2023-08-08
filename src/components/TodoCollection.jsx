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
      {todos.map( todo => {
         return <TodoItem ket={todo.id} todo={todo} onToggleDone={(id) => onToggleDone?.(id)} />
      })}
    </div>
  );
};

export default TodoCollection;
