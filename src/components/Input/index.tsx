interface Props {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: Props) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
