const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

const schollys = ["High School Class of 2021",
  "2021 High School Juniors ",
  "2021 College Students Only",
  "2021 Grad School Only",
  "2021 Nurses Are Our Future",
  "2021 STEM Is Our Future",
  "2021 Liberal Arts",
  "2021 Future Business Titans",
  "2021 Sunshine State",
  "2021 Golden State",
  "2021 Lonestar State",
  "2021 Empire State",
  "2021 Midwest",
  "2021 New England",
  "2021 Sun Belt",
  "2021 Mid-Atlantic",
  "2021 3.5+ GPA",
  "2021 3.0+ GPA",
  "2021 2.0+ GPA",
  "Scholly Deans List",
  "Scholly Honor Roll",
  "Scholly Winter 2021",
  "Scholly Spring 2021",
  "Scholly Summer 2021",
  "Scholly Fall 2021",
  "2021 Knowledge is Power",
  "2021 Dream It, Wish It, Do It",
  "2021 Build Your Future",
  "2021 Courage to Continue",
  "2021 Keep Moving",
  "Scholly Scholars Club",
  "2021 Future Entrepreneurs",
  "2021 Gray Achievement",
  "Bisike Nnadi",
  "Brandon Manning",
  "Clara Youngblood",
  "Daniel Gonzalez",
  "Dijon Durham",
  "Evan Brophy",
  "Jason Solis",
  "Kyland Young",
  "Laura Kalave",
  "Marc Bowers",
  "Megan Tito",
  "Nick Binuya",
  "Reed MacDonald",
  "Sharon Lavi",
  "Tiffany Hill"]
const moneys = [
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$400",
  "$500",
  "$500",
  "$500",
  "$500",
  "$500",
  "$500",
  "$500",
  "$800",
  "$800",
  "$500",
  "$1,000",
  "$1,000",
  "$1,000",
  "$350",
  "$500",
  "$650",
  "$400",
  "$250",
  "$2,000",
  "$450",
  "$2,500",
  "$750",
  "$500",
  "$500",
  "$600",
  "$600",
  "$750",
  "$600",
  "$500",
  "$500",
  "$600",
  "$500",
  "$600",
  "$500",
  "$500",
  "$750",
  "$750"
]
const requirements = [
  "High School Seniors",
  "High School Juniors",
  "College Students",
  "Graduate Students",
  "Nursing degrees",
  "STEM Majors",
  "Liberal Art Major",
  "Business Majors",
  "Florida",
  "California",
  "Texas",
  "New York",
  "Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, South Dakota, and Wisconsin",
  "Maine, Vermont, New Hampshire, Massachusetts, Connecticut and Rhode Island",
  "Alabama, Arizona, Arkansas, California, Florida, Georgia, Louisiana, Mississippi, Nevada, New Mexico, North Carolina, Oklahoma, South Carolina, Tennessee and Texas",
  "New York, New Jersey, Pennsylvania, Delaware, Maryland, Washington, D.C, Virginia, West Virginia",
  "3.5+ GPA",
  "3.0+ GPA",
  "2.0+ GPA",
  "3.5+ GPA",
  "3.0 + GPA",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
  "All students are eligible",
]

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              alugAlternate
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    schollys.forEach((scholly, index) => {
      console.log(moneys[index], requirements[index])
      console.log(`/scholarships/${toSnakeCase(scholly)}`)
      createPage({
        path: `/scholarships/${toSnakeCase(scholly)}`,
        tags: ["hello", "world"],
        component: path.resolve(
          `src/templates/new-scholarship.js`
        ),
        context: {
          title: scholly,
          money: moneys[index],
          requirements: requirements[index]
        },
      });
      createPage({
        path: `/terms-and-conditions/${toSnakeCase(scholly)}`,
        tags: ["hello", "world"],
        component: path.resolve(
          `src/templates/new-terms.js`
        ),
        context: {
          title: scholly,
        },
      });




    })

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.frontmatter && edge.node.frontmatter.alugAlternate ? `/scholarships/${edge.node.frontmatter.alugAlternate}` : edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      });
      if (edge.node.frontmatter.alugAlternate) {
        createPage({
          path: `/terms/${edge.node.frontmatter.alugAlternate}`,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(`src/templates/terms-conditions.js`),

          context: {
            id,
          },
        });
      }
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
