import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const Row = ({ slug, title, name }) => {
  return (
    <li>
      <Link to={`/hymns/${slug}`}>
        <div>
          <span className="is-size-4 has-text-black-bis pr-5">{name}</span>
          <span className="is-size-5 has-text-grey-dark">{title}</span>
        </div>
      </Link>
    </li>
  );
};

const Section = ({ title, items }) => {
  return (
    <section className="section">
      <h1 className="title">{title}</h1>
      <ul>
        {items.map((node) => (
          <Row
            key={node.id}
            slug={node.slug}
            name={node.frontmatter.name}
            title={node.frontmatter.title}
          />
        ))}
      </ul>
    </section>
  );
};

const HymnsPage = ({ data }) => {
  data.allMdx.group.sort((a, b) => a.min - b.min);
  data.allMdx.group.map((group) =>
    group.nodes.sort((a, b) => a.frontmatter.name - b.frontmatter.name)
  );

  return (
    <Layout>
      {data.allMdx.group.map((group) => (
        <Section
          key={group.fieldValue}
          title={group.fieldValue}
          items={group.nodes}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query HymnList {
    allMdx {
      group(field: frontmatter___section) {
        fieldValue
        min(field: frontmatter___name)
        nodes {
          id
          slug
          frontmatter {
            name
            title
          }
        }
      }
    }
  }
`;

export default HymnsPage;
