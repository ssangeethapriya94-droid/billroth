import fs from 'fs';

const html = fs.readFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_raw.html', 'utf8');

// Find all product or package links in html
const links = [];
const aMatches = html.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi);
for (const m of aMatches) {
  const href = m[1];
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  if (href.includes('product') || href.includes('health') || href.includes('package') || href.includes('checkup') || href.includes('check-up')) {
    links.push({ href, text });
  }
}

console.log('Relevant links found:', links.length);
console.log('Sample links:', JSON.stringify(links.slice(0, 30), null, 2));

// Also let's search for snippets containing "Whole Body Check" or "Well Women"
const pos = html.indexOf('Whole Body Check');
console.log('Snippet around Whole Body Check:');
console.log(html.substring(Math.max(0, pos - 200), Math.min(html.length, pos + 800)));
