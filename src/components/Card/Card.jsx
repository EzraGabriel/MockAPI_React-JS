import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-title">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
      {props.children}
    </div>
  );
}

export default Card;
