type props = {
  name: string;
  id: string;
  value: string;
  onChange: (e: any) => void;
  checked: boolean;
  text: string;
};

const RadioButton = ({ name, id, value, onChange, checked, text }: props) => {
  return (
    <label htmlFor={id} className="radio-label">
      <input
        className="radio-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-radio" />
      {text}
    </label>
  );
};

export default RadioButton;
