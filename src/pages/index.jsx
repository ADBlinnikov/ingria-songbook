import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="has-text-centered">
        <div className="title">Сборник песен Церкви Ингрии</div>
        <div className="block">
          <div>Пока здесь можно:</div>
          <ul className="block">
            <li>
              <Link to="/hymns/">Выбрать гимны по оглавлению</Link>
            </li>
            <li>
              <Link to="/playbook/">Составить список гимнов</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
