import Header from './components/Header';
import { GeistMono } from 'geist/font/mono';
export default function Home() {
  return (
    <main>
      <Header />
      <img src="/images/blob.svg" alt="Blob" className="blob" />
      <section className="Hero">
        <h1
          className=" align-middle font-bold font-mono"
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            margin: '0 auto',
            padding: '0 1rem',
            fontWeight: 800,
            fontFamily: GeistMono.className,
          }}
        >
          Ocka The Best AI CV Generator
        </h1>
      </section>
    </main>
  );
}
