const ThemeOptions = {
  base: 'vs',
  inherit: true,
  rules: [
    { background: 'EDF9FA' },
    { token: 'comment', foreground: '#23C175', fontStyle: 'bold', font: 'Roboto Mono' },
    { token: 'keyword', foreground: '#CF75FF' },
    { token: 'identifier', foreground: '#38C9FF' },
    { token: 'string', foreground: '#ffffffcc' },
    { token: 'delimiter.parenthesis', foreground: '#ffffffcc' },
    { token: 'delimiter.bracket', foreground: '#ffffffcc' },
    { token: 'delimiter', foreground: '#ffffffcc' },
    { token: 'type.identifier', foreground: '#ffffffcc' }
  ],
  colors: {
    'editor.foreground': '#000000',
    'editor.background': '#08223E',
    'editorCursor.foreground': '#8B0000',
    'editor.lineHighlightBackground': '#0000FF20',
    'editorLineNumber.foreground': '#595A6C',
    'editorLineNumber.activeForeground': '#FFF',
    'editor.selectionBackground': '#88000030',
    'editorLineNumber.background': '#061B32'
  }
};

const extensions: Record<string, string> = {
  ts: 'typescript',
  js: 'javascript',
  cpp: 'cpp',
  c: 'c',
  py: 'python'
};

const languages: Record<string, string> = {
  typescript: 'ts',
  javascript: 'js',
  cpp: 'cpp',
  c: 'c',
  python: 'py'
};

export { ThemeOptions, extensions, languages };
