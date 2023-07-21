import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const HighlightedCode = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={a11yDark}>
      <TinaMarkdown content={children} />
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
