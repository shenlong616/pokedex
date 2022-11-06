// https://github.com/uiwjs/react-codemirror#markdown-example
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { githubDark } from "@uiw/codemirror-theme-github";

export default function ({ children }) {
  return (
    <CodeMirror
      value={children}
      placeholder="Nứng loz hay j mà xóa hết nội dung của ng ta!?"
      theme={githubDark}
      autoFocus
      extensions={[
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
        }),
      ]}
    />
  );
}
