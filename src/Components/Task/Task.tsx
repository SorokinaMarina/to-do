import "./Task.scss";
import { ITask } from "@/utils/interface";
import TaskButton from "../TaskButton/TaskButton";
import TaskButtonExit from "../TaskButtonExit/TaskButtonExit";

export default function Task(item: ITask) {
  const { task } = item;

  return (
    <section className="task">
      <div className="task__container">
        <div className="task__container-element">
          <TaskButton
            completedItem={item.completed}
            id={item.id}
            completed={true}
          />
          <p className="task__text">{task}</p>
        </div>
        <TaskButtonExit id={item.id} completed={false} />
      </div>
    </section>
  );
}
