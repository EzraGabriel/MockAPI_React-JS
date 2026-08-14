import "./Button.css";
function Button({ weight = " ", type = "submit", ...props }) {
  const style = "button " + "button-" + props.class + " " + weight;
  return (
    <button className={style} type={type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
