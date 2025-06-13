import React from "react";
import TodoApp from "./Components/TodoApp";
import FormWithValidation from "./components/FormWithValidation";
import SharedStateParent from "./components/SharedStateParent";
import FragmentExample from "./components/FragmentExample";

const App = () => {
  return (
    <div className="container">
      <h1>React Task Showcase</h1>

      <section>
        <h2>1. Todo App</h2>
        <TodoApp />
      </section>

      <section>
        <h2>2. Form with Validation</h2>
        <FormWithValidation />
      </section>

      <section>
        <h2>3. Shared State Between Siblings</h2>
        <SharedStateParent />
      </section>

      <section>
        <h2>4. Fragment Example</h2>
        <FragmentExample />
      </section>
    </div>
  );
};

export default App;
