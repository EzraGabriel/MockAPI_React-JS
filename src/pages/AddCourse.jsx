import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar.jsx";
import Input from "../components/InputField/Input";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

import "./AddCourse.css";
import { useState } from "react";
import { addCourse } from "../services/courseApi";

function AddCourse() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    mentor: "",
    job: "",
    rating: 0,
    totalReview: 0,
    price: 0,
    image: "/src/assets/CoursesImage/Course1.jpg",
    mentorImage: "/src/assets/CoursesImage/3.png",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newCourse = await addCourse(formData);

      console.log("Course berhasil ditambahkan:", newCourse);
    } catch (error) {
      console.error("Gagal menambahkan course:", error);
    }

    navigate("/home");
  }

  const navigate = useNavigate();
  return (
    <>
      <Navbar showMenu={true} />

      <Card
        title="Tambah Kursus"
        subtitle="Yuk, tambah kursusmu di videobelajar."
      >
        <form onSubmit={handleSubmit} className="form">
          <Input
            name="title"
            type="text"
            label="Judul Course"
            required
            value={formData.title}
            onChange={handleChange}
          />
          <Input
            label="Deskripsi"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
          <div className="select-container">
            <label htmlFor="category">Kategori</label>
            <select
              className="selectCategory"
              name="category"
              placeholder="Pilih Kategori"
              required
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Pemasaran">Pemasaran</option>
              <option value="Desain">Desain</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
              <option value="Bisnis">Bisnis</option>
            </select>
          </div>

          <Input
            required
            label="Mentor"
            name="mentor"
            value={formData.mentor}
            onChange={handleChange}
          />

          <Input
            required
            label="Pekerjaan"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />

          <Input
            required
            type="number"
            label="Harga"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <div className="button-Container">
            <Button class="primary">Tambah</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default AddCourse;
