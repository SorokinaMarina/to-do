"use client";
import "./TaskList.scss";
import Task from "../Task/Task";
import { ITask } from "../../utils/interface";
import useSWR from "swr";
import { getTasks } from "@/utils/api";

export default function TaskList() {
  // Получаем данные с сервера
  const { data, isLoading, error } = useSWR<ITask[]>("tasks", () => getTasks());

  // Добавляем разметку для загрузки страницы
  if (isLoading) {
    return <div className="tasks-list__loading">isLoading...</div>;
  }

  // Добавляем обработку ошибки
  if (error) {
    return (
      <div className="tasks-list__loading">
        При загрузке данных произошла ошибка. Попробуйте перезагрузить страницу.
      </div>
    );
  }

  // Записываем в массив не выполненные задачи
  const tasks = data && data.filter((item: ITask) => !item.completed);
  // Записываем в массив выполненные задачи
  const completedTasks = data && data.filter((item: ITask) => !!item.completed);

  return (
    <section className="tasks-list">
      <div className="tasks-list__container">
        {tasks && tasks.map((item: ITask) => <Task key={item.id} {...item} />)}
      </div>

      <h2 className="tasks-list__title">Выполненные задачи</h2>

      <div className="tasks-list__container">
        {completedTasks &&
          completedTasks.map((item: ITask) => <Task key={item.id} {...item} />)}
      </div>

      <button className="tasks-list__button" type="button"></button>
    </section>
  );
}
