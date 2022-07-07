import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Verse from "./verse";
import Navbar from "./navbar";
import Author from "./author";
import Abcjs from "./abcjs";
import CollapsableCard from "./collapsablecard";
import Verses from "./verses";
import Tabs from "./tabs";

const shortcodes = { Author, Verse, Verses, Abcjs, CollapsableCard, Tabs };

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <Navbar />
      <main className="container">{children}</main>
    </MDXProvider>
  );
};

export default Layout;
