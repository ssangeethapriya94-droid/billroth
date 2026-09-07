import fs from 'fs';
import path from 'path';

const srcDir = 'c:/billroth/client/src';
const phoneMatches = [];
const emailMatches = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(jsx?|tsx?|json)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Match tel: links
      const tels = content.matchAll(/tel:([^\s"'>]+)/gi);
      for (const t of tels) {
        phoneMatches.push({ file: path.relative(srcDir, fullPath), type: 'tel:', val: t[1] });
      }

      // Match phone-like digits: (044|\+91|95666|72994)
      const rawPhones = content.matchAll(/(?:\+91[\s-]?)?(?:044[\s-]?)?\d{3,4}[\s-]?\d{4,8}/g);
      for (const rp of rawPhones) {
        const str = rp[0].trim();
        if (str.length >= 8 && !str.includes('2024') && !str.includes('2025') && !str.includes('2026') && !str.includes('1990')) {
          phoneMatches.push({ file: path.relative(srcDir, fullPath), type: 'phone', val: str });
        }
      }

      // Match mailto: links and emails
      const mails = content.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
      for (const m of mails) {
        emailMatches.push({ file: path.relative(srcDir, fullPath), val: m[0] });
      }
    }
  }
}

scanDir(srcDir);

const uniqueTels = [...new Set(phoneMatches.filter(p => p.type === 'tel:').map(p => p.val))];
const uniqueEmails = [...new Set(emailMatches.map(e => e.val))];

console.log('=== UNIQUE TEL LINKS ===');
console.log(JSON.stringify(uniqueTels, null, 2));

console.log('=== UNIQUE EMAILS ===');
console.log(JSON.stringify(uniqueEmails, null, 2));

// Summary of phone occurrences by file
const fileSummary = {};
for (const p of phoneMatches) {
  if (!fileSummary[p.file]) fileSummary[p.file] = new Set();
  fileSummary[p.file].add(p.val);
}
const output = {};
for (const [k, v] of Object.entries(fileSummary)) {
  output[k] = [...v];
}
fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/all_phones_audit.json', JSON.stringify(output, null, 2));
console.log('Audit complete.');
