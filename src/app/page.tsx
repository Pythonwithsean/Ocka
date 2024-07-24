import Header from './components/Header';
import './styles/Home.css';
export default function Home() {
  return (
    <main>
      <Header />
      <img src="/images/blob.svg" alt="Blob" className="blob" />
      <section className="Hero">
        <h1
          className=" align-middle font-bold font-mono"
          style={{
            fontSize: '4rem',
            textAlign: 'left',
            padding: '0 1rem',
            fontWeight: 800,
            color: 'red',
          }}
        >
          Ocka!
        </h1>
        <h2></h2>
        <br />
      </section>
    </main>
  );
}
