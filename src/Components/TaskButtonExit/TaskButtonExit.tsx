import "./TaskButtonExit.scss";
import { IButtonTask } from "../../utils/interface";
import useSWRMutation from "swr/mutation";
import { deleteTask } from "@/utils/api";

export default function TaskButton({ id }: IButtonTask) {
  const { trigger } = useSWRMutation("tasks", () => deleteTask(id));
  return (
    <button
      className="task-button-exit"
      type="button"
      onClick={() => trigger()}
    >
      &times;
    </button>
  );
}
