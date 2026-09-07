import https from 'https';
import fs from 'fs';

const urls = [
  'https://billrothhospitals.com/masters-in-emergency-medicine/',
  'https://billrothhospitals.com/our-academics/',
  'https://billrothhospitals.com/academics/'
];

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ url, data, status: res.statusCode }));
    }).on('error', err => resolve({ url, data: '', status: 500, err }));
  });
}

async function run() {
  for (const u of urls) {
    console.log('Fetching', u);
    const res = await fetchUrl(u);
    console.log('Status for', u, res.status, 'Length:', res.data.length);
    if (res.data) {
      const filename = u.replace(/https:\/\/billrothhospitals\.com\//, '').replace(/\//g, '_') || 'index';
      fs.writeFileSync(`C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/${filename}.html`, res.data);
    }
  }
}

run();
