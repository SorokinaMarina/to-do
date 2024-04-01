import "./Input.scss";
import Enter from "../../img/Enter.svg";
import Image from "next/image";

export default function Input() {
  return (
    <section className="input">
      <label className="input__label" htmlFor="input">
        <input
          className="input__field"
          type="text"
          id="input"
          placeholder="Добавить задачу"
        />
        <button className="input__button">
          <Image className="input__img" src={Enter} alt="Enter" />
        </button>
      </label>
    </section>
  );
}
