import https from 'https';
import fs from 'fs';

const productUrls = [
  { name: 'Whole Body Check up', price: '₹7,200', slug: 'whole-body-check-up', url: 'https://billrothhospitals.com/product/whole-body-check-up/' },
  { name: 'Well Women Health Package in Chennai', price: '₹3,900', slug: 'well-women-health-package-in-chennai', url: 'https://billrothhospitals.com/product/well-women-health-package-in-chennai/' },
  { name: 'Basic Heart Check', price: '₹5,100', slug: 'basic-heart-check', url: 'https://billrothhospitals.com/product/basic-heart-check/' },
  { name: 'Advanced Cardiac Health Check', price: '₹18,600', slug: 'advanced-cardiac-health-check', url: 'https://billrothhospitals.com/product/advanced-cardiac-health-check/' },
  { name: 'Complete Heart Check', price: '₹12,000', slug: 'complete-heart-check', url: 'https://billrothhospitals.com/product/complete-heart-check/' },
  { name: 'Advanced Geriatric Health Check (Female)', price: '₹14,400', slug: 'advanced-geriatric-health-check-female', url: 'https://billrothhospitals.com/product/advanced-geriatric-health-check-female/' },
  { name: 'Advanced Geriatric Health Check (Male)', price: '₹11,400', slug: 'advanced-geriatric-health-check-male', url: 'https://billrothhospitals.com/product/advanced-geriatric-health-check-male/' },
  { name: 'Diabetic Check (Basic)', price: '₹1,800', slug: 'diabetic-check-basic', url: 'https://billrothhospitals.com/product/diabetic-check-basic/' },
  { name: 'Gastro Health Check', price: '₹4,500', slug: 'gastro-health-check', url: 'https://billrothhospitals.com/product/gastro-health-check/' },
  { name: 'Lifestyle Health Screening', price: '₹1,200', slug: 'lifestyle-health-screening', url: 'https://billrothhospitals.com/product/lifestyle-health-screening/' },
  { name: 'Master Health Check Up', price: '₹2,400', slug: 'master-health-check-up', url: 'https://billrothhospitals.com/product/master-health-check-up/' },
  { name: 'Well Women Health Check', price: '₹3,900', slug: 'well-women-health-check', url: 'https://billrothhospitals.com/product/well-women-health-check/' }
];

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => {
      console.error('Error fetching', url, err);
      resolve('');
    });
  });
}

function extractDetails(html, pkg) {
  // Extract description and tab-description / short description
  let descMatch = html.match(/<div\s+class="woocommerce-product-details__short-description">([\s\S]*?)<\/div>/i);
  let shortDesc = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim() : '';

  let tabDescMatch = html.match(/<div\s+class="woocommerce-Tabs-panel\s+woocommerce-Tabs-panel--description[\s\S]*?">([\s\S]*?)<\/div>/i);
  let fullDescHtml = tabDescMatch ? tabDescMatch[1] : '';

  // Extract all <li> items inside product content or description
  const tests = [];
  const liMatches = (fullDescHtml || html).matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  for (const m of liMatches) {
    const text = m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').trim();
    if (text && !text.includes('Billroth') && !text.includes('Menu') && text.length > 2 && text.length < 120 && !text.includes('Road') && !text.includes('Chennai') && !text.includes('044-')) {
      tests.push(text);
    }
  }

  // Extract product image
  let imgMatch = html.match(/<div\s+class="woocommerce-product-gallery__image[^"]*"[^>]*>[\s\S]*?<img\s+[^>]*src="([^"]+)"/i);
  if (!imgMatch) {
    imgMatch = html.match(/<img\s+[^>]*class="[^"]*wp-post-image[^"]*"[^>]*src="([^"]+)"/i);
  }
  let image = imgMatch ? imgMatch[1] : '';

  // Clean description text
  let fullDescText = fullDescHtml.replace(/<[^>]+>/g, '\n').replace(/&nbsp;/g, ' ').replace(/\n\s*\n+/g, '\n').trim();

  return {
    ...pkg,
    image,
    shortDesc,
    fullDescText: fullDescText.substring(0, 1000),
    testsCount: tests.length,
    tests
  };
}

async function run() {
  const results = [];
  for (const item of productUrls) {
    console.log('Fetching', item.name);
    const html = await fetchPage(item.url);
    const details = extractDetails(html, item);
    results.push(details);
  }

  fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/ba1fad5f-e389-4bc7-8034-77a495ab64ed/scratch/all_health_packages_detailed.json', JSON.stringify(results, null, 2));
  console.log('Done! Extracted', results.length, 'detailed packages');
}

run();
