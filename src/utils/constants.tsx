export const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const regExpName = /^[a-zA-Zа-яА-Я\s-]+$/;

export const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;

export const optionsInputName = {
  required: "Поле является обязательным для заполнения",
  minLength: {
    value: 2,
    message: "Имя должно содержать не менее 2 символов",
  },
  maxLength: {
    value: 30,
    message: "Имя должно содержать не более 30 символов",
  },
  pattern: {
    value: regExpName,
    message:
      "Имя должно содержать не менее 2 и не более 30 символов латинского или русского алфавита, пробел, дефис",
  },
};

export const optionsInputEmail = {
    required: "Поле является обязательным для заполнения",
    minLength: {
      value: 2,
      message: "E-mail должен содержать не менее 2 символов",
    },
    maxLength: {
      value: 30,
      message: "E-mail должен содержать не более 30 символов",
    },
    pattern: {
      value: regExpEmail,
      message: "Введён некорректный адрес электронной почты",
    },
  }

  export const optionsInputPassword = {
    required: "Поле является обязательным для заполнения",
    minLength: {
      value: 2,
      message: "Пароль должен содержать не менее 2 символов",
    },
    maxLength: {
      value: 30,
      message: "Пароль должен содержать не более 30 символов",
    },
  }
