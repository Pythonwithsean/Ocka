export default function Logo() {
  return (
    <nav className="navbar">
      <a href="/">
        <img
          src="/images/ocka.svg"
          alt="ocka"
          className="logo"
          style={{
            width: '100%',
            maxWidth: '90px',
            boxShadow: '-5px 10px 5px rgba(0,0,0,0.2)',
            borderRadius: '100%',
          }}
        />
      </a>
    </nav>
  );
}
