import '../styles/Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="/images/ocka.svg" alt="ocka" className="logo" />
      </a>
      <span>
        <a href="/login">
          <button type="button" className="button">
            Login
          </button>
        </a>
        <a href="/create-resume">
          <button type="button" className="button">
            Create a Resume
          </button>
        </a>
      </span>
    </nav>
  );
}
