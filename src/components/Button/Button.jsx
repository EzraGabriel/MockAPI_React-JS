import "./Button.css";
function Button({ weight = " ", ...props }) {
  const style = "button " + "button-" + props.class + " " + weight;
  return (
    <button className={style} type="submit" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
