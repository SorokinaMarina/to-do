export interface BurgerProps {
  clickBurger: () => void;
}

export interface ProfileProps {
  setBurgerClicked: () => void;
  burgerClicked: boolean;
}

export interface FormRegisterProps {
  title: string;
  name: string;
  buttonText: string;
  text: string;
  link: string;
  href: string;
  children: JSX.Element;
}
