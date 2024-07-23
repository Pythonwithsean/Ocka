import Header from './components/Header';
export default function Home() {
  return (
    <main>
      <Header />
      <img src="/images/blob.svg" alt="Blob" className="blob" />
      <section className="Hero">
        <h1 className=" align-middle font-bold">
          Ocka The Best AI CV Generator
        </h1>
      </section>
    </main>
  );
}
