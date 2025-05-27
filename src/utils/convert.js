const fs = require('fs');
const { parseDocument } = require('htmlparser2');

const html = fs.readFileSync('./data.html', 'utf-8');
const doc = parseDocument(html);

let output = {};
let sectionIndex = 1;
let lastKey = '';

const walk = (nodes) => {
  for (const node of nodes) {
    if (node.type === 'tag') {
      const text = node.children?.map(c => c.data || '').join('').trim();

      if (node.name === 'h1') {
        output.title = text;
        lastKey = '';
      } else if (node.name === 'p') {
        if (!output.description) {
          output.description = text;
          lastKey = '';
        } else if (lastKey) {
          output[`${lastKey}_body`] = text;
        }
      } else if (node.name === 'h2') {
        const key = `section${sectionIndex}`;
        output[`${key}_title`] = text;
        lastKey = key;
      } else if (node.name === 'ul' && lastKey) {
        const items = node.children
          .filter(n => n.name === 'li')
          .map(li => li.children?.map(c => c.data || '').join('').trim())
          .filter(Boolean);
        output[`${lastKey}_list`] = items;
        sectionIndex++;
        lastKey = '';
      }
    }

    if (node.children?.length) {
      walk(node.children);
    }
  }
};

walk(doc.children);

fs.writeFileSync('./output.json', JSON.stringify(output, null, 2), 'utf-8');
console.log('✅ Converted to output.json');
