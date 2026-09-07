import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_raw.html', 'utf8');
const $ = cheerio.load(html);

console.log('Title:', $('title').text());

// Look for headings, package names, prices, tables, accordion items
const headings = [];
$('h1, h2, h3, h4, h5, h6').each((i, el) => {
  headings.push({ tag: el.tagName, text: $(el).text().trim() });
});
console.log('Headings:', JSON.stringify(headings.slice(0, 30), null, 2));

// Look for package elements or tables
const tables = [];
$('table').each((i, el) => {
  tables.push({
    index: i,
    headers: $(el).find('th').map((_, th) => $(th).text().trim()).get(),
    rowsCount: $(el).find('tr').length,
    sampleRows: $(el).find('tr').slice(0, 5).map((_, tr) => $(tr).text().trim().replace(/\s+/g, ' ')).get()
  });
});
console.log('Tables found:', JSON.stringify(tables, null, 2));

// Look for text blocks or elementor widgets
const elementorWidgets = [];
$('[class*="elementor-widget"]').each((i, el) => {
  const widgetType = $(el).attr('data-widget_type');
  const text = $(el).text().trim().replace(/\s+/g, ' ');
  if (text.length > 20 && text.length < 500) {
    elementorWidgets.push({ widgetType, text: text.substring(0, 150) });
  }
});
console.log('Sample widgets count:', elementorWidgets.length);
fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_widgets.json', JSON.stringify(elementorWidgets, null, 2));

// Dump full text to txt
fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_full_text.txt', $('body').text().replace(/\n\s*\n/g, '\n').trim());
