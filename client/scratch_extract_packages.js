import fs from 'fs';

const html = fs.readFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_raw.html', 'utf8');

// Let's inspect sections around each h2
const h2List = [
  'Whole Body Check up',
  'Well Women Health Package in Chennai',
  'Basic Heart Check',
  'Advanced Cardiac Health Check',
  'Complete Heart Check',
  'Advanced Geriatric Health Check (Female)',
  'Advanced Geriatric Health Check (Male)',
  'Diabetic Check (Basic)',
  'Gastro Health Check',
  'Lifestyle Health Screening',
  'Master Health Check Up',
  'Well Women Health Check'
];

const packages = [];

// Split html by h2
const parts = html.split(/<h2[^>]*>/i);
console.log('Parts count:', parts.length);

for (let i = 1; i < parts.length; i++) {
  const part = parts[i];
  const h2End = part.indexOf('</h2>');
  const title = part.substring(0, h2End).replace(/<[^>]+>/g, '').trim();
  const rest = part.substring(h2End + 5);
  
  // Extract all list items <li> or paragraphs <p>
  const listItems = [];
  const liMatches = rest.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  for (const m of liMatches) {
    const text = m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').trim();
    if (text && !text.includes('Billroth') && !text.includes('Menu') && text.length < 150) {
      listItems.push(text);
    }
  }
  
  // Also extract paragraphs
  const paragraphs = [];
  const pMatches = rest.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  for (const m of pMatches) {
    const text = m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').trim();
    if (text && text.length > 10 && text.length < 500) {
      paragraphs.push(text);
    }
  }

  packages.push({
    title,
    listItemsCount: listItems.length,
    listItems: listItems.slice(0, 30),
    paragraphs: paragraphs.slice(0, 5)
  });
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_packages.json', JSON.stringify(packages, null, 2));
console.log('Processed packages count:', packages.length);
