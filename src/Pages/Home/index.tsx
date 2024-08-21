import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import getContent, { Movie, Type } from "../../Utility/APIHandler";
import Banner from "./Components/Banner";

export default function Home() {
  const [content, setContent] = useState<Array<Movie>>([]);

  useEffect(() => {
    getContent(Type.Trending).then((response) =>
      setContent(response.results.slice(0, 5))
    );
  }, []);

  if (content.length === 0)
    return <div className={Styles.loading}>لطفا صبر کنید</div>;

  return (
    <>
      <main className={Styles.main}>
        <aside className={Styles.aside}>Side</aside>

        <section className={Styles.section}>
          <Banner content={content} />
        </section>
      </main>
    </>
  );
}
