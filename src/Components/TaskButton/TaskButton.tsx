import "./TaskButton.scss";
import { IButtonTask } from "../../utils/interface";
import Image from "next/image";
import Ellipse from "../../img/Ellipse.svg";
import Circle from "../../img/Circle.svg";
import useSWRMutation from "swr/mutation";
import { changeStatusTask } from "@/utils/api";

export default function TaskButton({ completedItem, id }: IButtonTask) {
  const { trigger } = useSWRMutation("tasks", () =>
    changeStatusTask(id, !completedItem),
  );
  return (
    <button className="task-button" type="button" onClick={() => trigger()}>
      <Image
        className="task-button__img"
        src={completedItem ? Circle : Ellipse}
        alt="элипс"
      />
    </button>
  );
}
