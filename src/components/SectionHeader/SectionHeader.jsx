import "./SectionHeader.css";

function SectionHeader(props) {
  let classname = "section-header " + props.class;
  return (
    <div className={classname}>
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}

export default SectionHeader;
