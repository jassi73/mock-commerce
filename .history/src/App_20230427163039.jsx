import "@atlaskit/css-reset";

import Column from "./Components/Column";
import initialData from "./Components/data-table";

const App = () => {
  return this.state.columnOrder.map((columnId) => {
    const column = this.state.columns[columnId];
    const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

export default App;
