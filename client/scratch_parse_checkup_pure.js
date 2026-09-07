import fs from 'fs';

const html = fs.readFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_raw.html', 'utf8');

// Strip HTML tags for readable text
function stripHtml(text) {
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8230;/g, '...')
    .replace(/\r\n|\r/g, '\n')
    .replace(/\n\s*\n+/g, '\n')
    .trim();
}

const plainText = stripHtml(html);
fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_clean.txt', plainText);

// Find tables and prices
const prices = [];
const priceMatches = html.matchAll(/(?:Rs\.?|₹)\s*[\d,]+/gi);
for (const match of priceMatches) {
  prices.push(match[0]);
}

console.log('Prices found:', [...new Set(prices)]);

// Find all h1, h2, h3, h4 headings
const headings = [];
const hMatches = html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi);
for (const match of hMatches) {
  headings.push({ tag: match[1], text: stripHtml(match[2]) });
}
console.log('Headings:', headings);

// Find tables in HTML
const tableMatches = html.matchAll(/<table[\s\S]*?<\/table>/gi);
const tables = [];
for (const tMatch of tableMatches) {
  tables.push(tMatch[0]);
}
console.log('Found tables count:', tables.length);

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_tables.json', JSON.stringify(tables, null, 2));
