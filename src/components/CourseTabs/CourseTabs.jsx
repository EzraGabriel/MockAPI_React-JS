import "./CourseTabs.css";

function CourseTabs({ categories, activeTab, onTabChange }) {
  return (
    <div className="course-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`course-tab ${activeTab === category ? "active" : ""}`}
          onClick={() => onTabChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CourseTabs;
