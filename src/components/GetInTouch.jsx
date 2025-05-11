import './GetInTouch.css';

export default function GetInTouch() {
  return (
    <section className="get-in-touch card">
      <h2>Get in Touch</h2>
      <form
        action="https://formspree.io/f/xeoglryy"
        method="POST"
        className="contact-form"
        autoComplete="off"
      >
        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-row">
          <textarea name="message" placeholder="Your Message" required rows={5} />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
} 