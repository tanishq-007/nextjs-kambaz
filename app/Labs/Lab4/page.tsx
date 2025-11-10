"use client"
import link from "next/link"
import store from "./store";
import { Provider } from "react-redux";
import ClickEvent from "./Clickevent";
import PassingDataOnEvent from "./PassingDataonEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./ReduxExamples/todos/TodoList";
import TodoItem from "./ReduxExamples/todos/TodoItem";
import TodoForm from "./ReduxExamples/todos/TodoForm";


import Counter
 from "./Counter";
export default function lab4(){
      function sayHello() {
    alert("Hello");
  }

    return(
      <Provider store={store}>
            <div>
                <p>Lab4</p>
                <ClickEvent/>
                <PassingDataOnEvent/>
                <PassingFunctions theFunction={sayHello}/>
                <EventObject/>
                <Counter/>
                <BooleanStateVariables/>
                <StringStateVariables/>
                <DateStateVariable/>
                <ObjectStateVariable/>
                <ArrayStateVariable/>
                <ParentStateComponent/>
                <ReduxExamples/>
                <HelloRedux/>
                <CounterRedux/>
                <AddRedux/>
                <TodoList/>

                
                
                

            </div>
            </Provider>
    );
}