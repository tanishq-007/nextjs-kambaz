import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import todos from "./todo.json";
export default function TodoList() {
 return(
   <>
     <h3>Todo List</h3>
     <ListGroup >
       { todos.map((todo,index) => {
           // eslint-disable-next-line react/jsx-key
           return(<TodoItem key={index} todo={todo} />);   })}
     </ListGroup><hr/>  
   </>
);}
