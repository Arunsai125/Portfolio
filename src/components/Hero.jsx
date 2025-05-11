import './Hero.css';

const links = [
  { href: 'mailto:arunsaiknr@gmail.com', icon: 'https://img.icons8.com/fluency/48/000000/new-post.png', alt: 'Email', title: 'Email' },
  { href: 'tel:+13864568079', icon: 'https://img.icons8.com/fluency/48/000000/phone.png', alt: 'Phone', title: 'Phone' },
  { href: 'https://linkedin.com/in/arunsainarla', icon: 'https://img.icons8.com/fluency/48/000000/linkedin.png', alt: 'LinkedIn', title: 'LinkedIn' },
  { href: 'https://github.com/Arunsai125', icon: 'https://img.icons8.com/fluency/48/000000/github.png', alt: 'GitHub', title: 'GitHub' },
  { href: 'https://leetcode.com/u/ArunSaiNarla/', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png', alt: 'LeetCode', title: 'LeetCode' },
];

export default function Hero() {
  return (
    <section className="hero card">
      <div className="hero-img-wrapper">
        <img src="/dp.jpg" alt="Arun Sai Narla" className="hero-img" />
      </div>
      <div className="hero-icons">
        {links.map(link => (
          <a key={link.title} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" title={link.title}>
            <div className="hero-icon">
              <img src={link.icon} alt={link.alt} />
            </div>
          </a>
        ))}
      </div>
      <h1>Arun Sai Narla</h1>
      <div className="hero-subtitle">
        Software Development Engineer @ Temenos<br/>
        UCF '25 ALUMNI | Ex- Vice President of GSA @ UCF
      </div>
    </section>
  );
} 