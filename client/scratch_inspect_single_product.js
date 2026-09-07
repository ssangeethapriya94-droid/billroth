import https from 'https';
import fs from 'fs';

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function checkProduct() {
  const urls = [
    'https://billrothhospitals.com/product/whole-body-check-up/',
    'https://billrothhospitals.com/product/basic-heart-check/',
    'https://billrothhospitals.com/product/master-health-check-up/',
    'https://billrothhospitals.com/product/diabetic-check-basic/',
    'https://billrothhospitals.com/product/gastro-health-check/'
  ];

  for (const url of urls) {
    const html = await fetchPage(url);
    console.log('=== URL:', url, '===');
    
    // Find all <p>, <li>, or description blocks inside main
    const mainMatch = html.match(/<div class="product[\s\S]*?<\/div>\s*<!-- \.summary -->/i) || html.match(/<div class="summary entry-summary">([\s\S]*?)<\/div>/i);
    if (mainMatch) {
      console.log('Summary:', mainMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    } else {
      console.log('No summary match found');
    }

    const tabMatch = html.match(/<div class="woocommerce-Tabs-panel[\s\S]*?<\/div>/i);
    if (tabMatch) {
      console.log('Tab content:', tabMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    } else {
      console.log('No tab match found');
    }
  }
}

checkProduct();
