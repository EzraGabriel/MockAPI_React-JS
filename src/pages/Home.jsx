import Navbar from "../components/Navbar/Navbar.jsx";
import Button from "../components/Button/Button";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import CourseTabs from "../components/CourseTabs/CourseTabs.jsx";
import CourseCard from "../components/CourseCard/CourseCard.jsx";
import Footer from "../components/Footer/Footer.jsx";

import "./Home.css";
import { useState } from "react";
import { courses } from "../data/courses";

function Home() {
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);
  return (
    <>
      <Navbar showProfile showMenu />
      <section className="hero">
        <div className="home-header-container">
          <h1>
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <div className="button-container">
            <Button class="hero" weight="medium">
              Temukan Video Course untuk Dipelajari!
            </Button>
          </div>
        </div>
      </section>
      <section className="content">
        <SectionHeader
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
          class="home"
        />
        <CourseTabs
          categories={categories}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="course-list">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-header">
            <p className="newsletter-info">NEWSLETTER</p>
            <div className="newsletter-title">
              <h1>Mau Belajar Lebih Banyak?</h1>
              <h2>
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </h2>
            </div>
          </div>
          <div className="newsletter-form">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Masukkan Emailmu"
            />
            <Button class="newsletter">Subscribe</Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
