import * as React from "react";
import Layout from "../components/layout";
import Abcjs from "../components/abcjs";

const Sheet = () => {
  return (
    <Layout>
      <Abcjs
        abcNotation={
          "X:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|"
        }
        parserParams={{}}
        engraverParams={{ responsive: "resize" }}
        renderParams={{ viewportHorizontal: true }}
      >
        X:1
        T:Example
        M:4/4
        C:Trad.
        K:G
        |:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|
      </Abcjs>
    </Layout>
  );
};

export default Sheet;