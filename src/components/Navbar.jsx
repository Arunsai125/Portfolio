import './Navbar.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'get-in-touch', label: 'Get in Touch' },
];

export default function Navbar() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar">
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <button onClick={() => handleClick(section.id)}>{section.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 