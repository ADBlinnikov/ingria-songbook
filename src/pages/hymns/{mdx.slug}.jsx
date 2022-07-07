import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/layout";

const Pagination = ({ index, songs }) => {
  return (
    <nav className="pagination is-centered" role="navigation">
      <Link
        to={`/hymns/${songs[index-1]}#${index-1}`}
        state={{ songs: songs }}
        className="pagination-previous"
        disabled={index === 0}
      >
        Previous
      </Link>
      <Link
        to={`/hymns/${songs[index+1]}#${index+1}`}
        state={{ songs: songs }}
        className="pagination-next"
        disabled={index === songs.length - 1}
      >
        Next page
      </Link>
      <ul className="pagination-list">
        {songs.map((song, idx) => (
          <li key={idx}>
            <Link
              to={`/hymns/${song}#${idx}`}
              state={{ songs: songs }}
              className={`pagination-link ${idx === index ? "is-current" : ""}`}
            >
              {song}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HymnPage = ({ data, location }) => {
  const { hash, state = {} } = location;

  return (
    <Layout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {state !== null && state.hasOwnProperty("songs") ? (
        <Pagination index={parseInt(hash.substring(1))} songs={state.songs} />
      ): null}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
export default HymnPage;
