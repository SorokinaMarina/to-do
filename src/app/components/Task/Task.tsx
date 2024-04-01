import "./Task.scss";
import Ellipse from "../../img/Ellipse.svg";
import Image from "next/image";

export default function Task() {
  return (
    <section className="task">
      <div className="task__container">
        <div className="task__container-element">
          <button className="task__button" type="button">
            <Image className="task__img" src={Ellipse} alt="элипс" />
          </button>
          <p className="task__text">Задача</p>
        </div>
        <button className="task__button" type="button">
          x
        </button>
      </div>
    </section>
  );
}
