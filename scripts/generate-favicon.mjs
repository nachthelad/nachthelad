/**
 * Convierte public/logo.svg a public/favicon.ico (16x16, 32x32, 48x48)
 * Uso: node scripts/generate-favicon.mjs
 * Deps temporales: npm install --save-dev sharp png-to-ico
 */
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'fs';

const svg = readFileSync('./public/logo.svg');

const pngBuffers = await Promise.all(
  [16, 32, 48].map(size =>
    sharp(svg).resize(size, size).png().toBuffer()
  )
);

const ico = await pngToIco(pngBuffers);
writeFileSync('./public/favicon.ico', ico);

console.log('✓ public/favicon.ico generado (16, 32, 48px)');
