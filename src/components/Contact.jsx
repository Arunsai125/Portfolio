import './Contact.css';

export default function Contact() {
  return (
    <section className="contact card">
      <h2>Contact</h2>
      <div className="contact-list">
        <a href="mailto:arunsaiknr@gmail.com" title="Email">
          <img src="https://img.icons8.com/fluency/48/000000/new-post.png" alt="Email" />
        </a>
        <a href="tel:+13864568079" title="Phone">
          <img src="https://img.icons8.com/fluency/48/000000/phone.png" alt="Phone" />
        </a>
        <a href="https://www.linkedin.com/in/arun-sai-narla-54a976348/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ArunSaiNarla" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/ArunSaiNarla/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{background: '#fff', borderRadius: '8px'}} width="40" height="40" />
        </a>
      </div>
      <div className="contact-info">
        <p>Email: <a href="mailto:arunsaiknr@gmail.com">arunsaiknr@gmail.com</a></p>
        <p>Phone: <a href="tel:+13864568079">+1 (386)-456-8079</a></p>
      </div>
    </section>
  );
} 