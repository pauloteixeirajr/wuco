/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react");

const headComponents = [
  <script
    key="script-1"
    async
    src="https://platform.twitter.com/widgets.js"
    charSet="utf-8"
  />,
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};
