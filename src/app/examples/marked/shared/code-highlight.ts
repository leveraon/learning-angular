import { JSDOM } from 'jsdom';
import prism from 'prismjs';

export function highlightCode(code: string, language: string) {
  const dom = new JSDOM();
  const document = dom.window.document;
  const pre = document.createElement('pre');
  const codeElement = document.createElement('code');
  codeElement.textContent = code;
  codeElement.classList.add('language-' + language); // Add language class for Prism.js
  pre.appendChild(codeElement);
  document.body.appendChild(pre);

  // Use Prism.js to highlight the code.
  prism.highlightElement(codeElement);

  // Get the highlighted HTML.
  return pre.innerHTML;
}
