import https from 'https';
import fs from 'fs';

const url = 'https://billrothhospitals.com/health-checkup/';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/health_checkup_raw.html', data);
    console.log('Saved health checkup html. Length:', data.length);
  });
}).on('error', err => {
  console.error('Error fetching health checkup:', err);
});
