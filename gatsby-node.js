exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type Mdx implements Node @dontInfer {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        name: Int!
        section: String!
        title: String
      }
    `
    createTypes(typeDefs);
}