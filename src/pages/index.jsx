import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <section class="hero is-small is-primary has-text-centered">
        <div class="hero-body">
          <p class="title">Сборник песен Церкви Ингрии</p>
        </div>
        <div class="hero-foot">
          <nav class="tabs is-centered">
              <ul>
                <li>
                  <Link to="/hymns/">Оглавление</Link>
                </li>
                <li>
                  <Link to="/playbook/">Свой плейлист</Link>
                </li>
              </ul>
          </nav>
        </div>
      </section>
      <section class="hero is-small is-warning has-text-centered">
        <div class="hero-body">
          <p class="subtitle">Находится в разработке</p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
