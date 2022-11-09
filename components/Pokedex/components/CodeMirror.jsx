// https://github.com/uiwjs/react-codemirror#markdown-example
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { duotoneDark } from "@uiw/codemirror-themes-all";
import { settings } from "../../../pokedex.config";

export default function ({ children }) {
  return (
    <CodeMirror
      value={children}
      placeholder={settings.codemirror.placeholder}
      theme={duotoneDark}
      basicSetup={settings.codemirror.basicSetup}
      extensions={[
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
        }),
      ]}
    />
  );
}
