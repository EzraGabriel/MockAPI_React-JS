import { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../services/courseApi";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchCourses() {
    try {
      const data = await getCourses();
      setCourses(data);
    } finally {
      setLoading(false);
    }
  }
  async function removeCourse(id) {
    await deleteCourse(id);

    setCourses((prev) => prev.filter((course) => course.id !== id));
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    removeCourse,
  };
}
