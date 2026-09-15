/**
 * Resize and convert public images to WebP at display-appropriate widths.
 * Usage: node compress.js
 *
 * Categories:
 *   - Headshots: max 400px (shown ~128–176px)
 *   - Client logos / logo mark: max 400px
 *   - Client headshots: max 200px (shown ~40px)
 *   - Heroes / carousel / event photos: max 1920px
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, 'public');
const IMAGE_EXT = /\.(png|jpe?g|jfif|webp)$/i;

function toWebpPath(filePath) {
  return filePath.replace(IMAGE_EXT, '.webp');
}

async function optimizeToWebp(filePath, maxWidth, quality = 80) {
  if (!IMAGE_EXT.test(filePath)) return null;
  if (!fs.existsSync(filePath)) {
    console.log(`skip missing: ${path.relative(PUBLIC, filePath)}`);
    return null;
  }

  const buf = fs.readFileSync(filePath);
  const outPath = toWebpPath(filePath);

  // Skip if already a small webp under budget (and we're rewriting same path)
  if (
    path.extname(filePath).toLowerCase() === '.webp' &&
    buf.length < 120 * 1024 &&
    filePath === outPath
  ) {
    console.log(`${path.relative(PUBLIC, filePath)}: already small webp`);
    return outPath;
  }

  const out = await sharp(buf)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toBuffer();

  fs.writeFileSync(outPath, out);

  const relIn = path.relative(PUBLIC, filePath);
  const relOut = path.relative(PUBLIC, outPath);
  console.log(
    `${relIn} -> ${relOut}: ${(buf.length / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`
  );

  // Remove original when we wrote a different path
  if (path.resolve(filePath) !== path.resolve(outPath)) {
    fs.unlinkSync(filePath);
  }

  return outPath;
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .map((f) => path.join(dir, f));
}

async function run() {
  const headshotFiles = [
    ...listImages(path.join(PUBLIC, 'Standardized Headshots v2')),
    ...listImages(path.join(PUBLIC, 'headshots')),
    path.join(PUBLIC, 'edward.png'),
  ].filter((f) => fs.existsSync(f));

  const logoFiles = [
    ...listImages(path.join(PUBLIC, 'clientlogo')),
    path.join(PUBLIC, 'icg-logo-white.png'),
    path.join(PUBLIC, 'icg-logo-dark.png'),
  ].filter((f) => fs.existsSync(f));

  const clientHeadshots = listImages(path.join(PUBLIC, 'clientheadshot'));

  const heroAndContent = [
    'skyline.jpg',
    'icg-team.png',
    "W'26 Girls.jpg",
    "W'26 Group.jpg",
    'Talking.JPG',
    '2.png',
    '3.png',
    '4.png',
    'icg-work-with-us.webp',
    'speaker1.png',
    'workshop-2.png',
    'workshop-3.png',
  ]
    .map((f) => path.join(PUBLIC, f))
    .filter((f) => fs.existsSync(f));

  console.log('--- Headshots (max 400px) ---');
  for (const f of headshotFiles) await optimizeToWebp(f, 400, 78);

  console.log('\n--- Client logos / brand marks (max 400px) ---');
  for (const f of logoFiles) await optimizeToWebp(f, 400, 80);

  console.log('\n--- Client headshots (max 200px) ---');
  for (const f of clientHeadshots) await optimizeToWebp(f, 200, 75);

  console.log('\n--- Heroes / carousel / events (max 1920px) ---');
  for (const f of heroAndContent) await optimizeToWebp(f, 1920, 82);

  console.log('\nDone!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
