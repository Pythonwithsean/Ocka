import Header from './components/Header';
import './styles/Home.css';
import VideoEmbed from './components/VideoEmbed';
export default async function Home() {
  return (
    <main>
      <Header />
      <img src="/images/blob.svg" alt="Blob" className="blob" />
      <section className="Hero-container">
        <section
          className="Hero"
          style={{
            borderBottom: '5px solid red',
          }}
        >
          <h1
            className=" align-middle font-bold font-mono"
            style={{
              fontSize: '3.5rem',
              lineHeight: '1.3',
              lineClamp: 2,
              textAlign: 'center',
              fontWeight: 800,
              color: 'rgb(0, 0, 0)',
            }}
          >
            The best way to Generate a{' '}
            <span
              style={{
                color: 'rgb(255, 0, 0)',
              }}
            >
              resume
            </span>
            <br />
            with
            <span
              style={{
                color: 'rgb(255, 0, 0)',
              }}
            >
              {' '}
              Ai{' '}
            </span>
            in seconds!
          </h1>
          <br />
          <section
            className="Hero"
            style={{
              marginTop: '10px',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.4',
                lineClamp: 2,
                textAlign: 'center',
                fontWeight: 500,
                color: 'rgb(0, 0, 0)',
              }}
            >
              What is{' '}
              <span
                style={{
                  color: 'red',
                }}
              >
                Ocka?{' '}
              </span>
              Ocka is a resume generator that uses Ai to generate resumes in
              seconds.
            </p>
          </section>
        </section>
        <section className="video-container">
          <VideoEmbed />
        </section>
      </section>
      <section></section>
    </main>
  );
}
