import React from 'react';
import { graphql } from 'gatsby';
import { connect } from 'react-redux';
import { pushNewPage } from '../state/app';

import Meta from '../components/Meta';
import Shell from '../components/Shell';
import SnippetCard from '../components/SnippetCard';

import { capitalize, getRawCodeBlocks as getCodeBlocks } from '../util';

// ===================================================
// Individual snippet category/tag page
// ===================================================
const TagRoute = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const tag = props.pageContext.tag;

  React.useEffect(() => {
    props.dispatch(pushNewPage(capitalize(tag), props.path));
  }, []);

  return (
    <>
      <Meta title={capitalize(tag)} />
      <Shell>
        <h2 className='page-title'>{capitalize(tag)}</h2>
        <p className='light-sub'>Click on a snippet's name to view its code.</p>
        {posts &&
          posts.map(({ node }) => (
            <SnippetCard
              key={`snippet_${node.id}`}
              short
              snippetData={{
                title: node.frontmatter.title,
                html: node.html,
                code: getCodeBlocks(node.rawMarkdownBody).code,
                tags: node.frontmatter.tags.split(',').map(v => v.trim()),
                id: node.fields.slug.slice(1),
              }}
              isDarkMode={props.isDarkMode}
            />
          ))}
      </Shell>
    </>
  );
};

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
    lastPageTitle: state.app.lastPageTitle,
    lastPageUrl: state.app.lastPageUrl,
    searchQuery: state.app.searchQuery,
  }),
  null,
)(TagRoute);

export const tagPageQuery = graphql`
  query TagPage($tagRegex: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { tags: { regex: $tagRegex } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
