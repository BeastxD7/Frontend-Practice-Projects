// utils/parseMarkdown.js
import { marked } from 'marked';

export function parseMarkdown(content) {
  return marked.parse(content);
}