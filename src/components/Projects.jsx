import './Projects.css';

export default function Projects() {
  return (
    <section className="projects card">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Node-BB UCF (Open-Source Forum)</h3>
          <p>Collaborative project for building a scalable online forum using NodeBB tailored for UCF discussions.</p>
          <a href="https://github.com/ArunSaiNarla/NodeBB-UCF" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Low Resolution Image Enhancement Using ResNet-GAN</h3>
          <p>Research project that applies deep learning techniques to enhance low-quality images using ResNet-based GAN architectures.</p>
          <a href="https://www.publications.scrs.in/chapter/978-81-955020-5-9/108" target="_blank" rel="noopener noreferrer">Read Publication</a>
        </div>
        <div className="project-item">
          <h3>Noise Removal in ECG Signals Using Fully Convolutional DAE</h3>
          <p>Developed a deep autoencoder model to denoise ECG signals for more accurate medical diagnostics.</p>
          <a href="https://link.springer.com/chapter/10.1007/978-981-19-2126-1_19" target="_blank" rel="noopener noreferrer">Read Publication</a>
        </div>
        <div className="project-item">
          <h3>Hospital Management System</h3>
          <p>A full-stack web application enabling appointment scheduling, doctor availability, and patient record management. Built using Java, Spring Boot, AWS, and integrated front-end.</p>
        </div>
      </div>
    </section>
  );
} 