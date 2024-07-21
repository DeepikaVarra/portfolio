import React from 'react';
 // Make sure to place your resume.pdf file in the same folder

const Home = () => {
  return (
    <section id="home">
      <h2>Hello, I'm Deepika!</h2>
      <a href="/Deepika_Resume.pdf" download="Deepika_Resume.pdf">
        <button>Download Resume</button>
      </a>
    </section>
  );
};

export default Home;
