import fs from 'fs';

const html = fs.readFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/masters-in-emergency-medicine_.html', 'utf8');

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

const text = stripHtml(html);
fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/mem_clean_text.txt', text);

// Find headings, paragraphs, lists, images
const headings = [];
const hMatches = html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi);
for (const m of hMatches) {
  const t = stripHtml(m[2]);
  if (t && t.length < 200) headings.push({ tag: m[1], text: t });
}

// Find images
const images = [];
const imgMatches = html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi);
for (const m of imgMatches) {
  const src = m[1];
  if (!src.includes('logo') && !src.includes('icon') && !src.includes('svg')) {
    images.push(src);
  }
}

console.log('Headings:', headings);
console.log('Images:', images);
