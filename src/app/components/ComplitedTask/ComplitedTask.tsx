import "./ComplitedTask.scss";
import Circle from "../../img/Circle.svg";
import Image from "next/image";

export default function ComplitedTask() {
  return (
    <section className="complited-task">
      <div className="complited-task__container">
        <button className="complited-task__button" type="button">
          <Image className="complited-task__img" src={Circle} alt="элипс" />
        </button>
        <p className="complited-task__text">Выполненная задача</p>
      </div>
    </section>
  );
}
