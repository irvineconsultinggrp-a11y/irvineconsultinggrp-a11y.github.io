const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, 'public');

async function optimize(filePath, maxWidth) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const buf = fs.readFileSync(filePath);
  let pipeline = sharp(buf).resize({ width: maxWidth, withoutEnlargement: true });

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality: 80 });
  }

  const out = await pipeline.toBuffer();
  const saved = buf.length - out.length;
  if (saved > 0) {
    fs.writeFileSync(filePath, out);
    console.log(`${path.relative(PUBLIC, filePath)}: ${(buf.length/1024).toFixed(0)}KB -> ${(out.length/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
  } else {
    console.log(`${path.relative(PUBLIC, filePath)}: already optimal`);
  }
}

async function run() {
  const headshots = fs.readdirSync(path.join(PUBLIC, 'headshots')).map(f => path.join(PUBLIC, 'headshots', f));
  const clientlogos = fs.readdirSync(path.join(PUBLIC, 'clientlogo')).map(f => path.join(PUBLIC, 'clientlogo', f));
  const rootFiles = fs.readdirSync(PUBLIC, { withFileTypes: true })
    .filter(d => d.isFile() && /\.(png|jpg|jpeg)$/i.test(d.name))
    .map(d => path.join(PUBLIC, d.name));

  console.log('--- Headshots (max 500px) ---');
  for (const f of headshots) await optimize(f, 500);

  console.log('\n--- Client logos (max 300px) ---');
  for (const f of clientlogos) await optimize(f, 300);

  console.log('\n--- Other images (max 1920px) ---');
  for (const f of rootFiles) await optimize(f, 1920);

  console.log('\nDone!');
}

run().catch(console.error);
