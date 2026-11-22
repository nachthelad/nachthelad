/**
 * Regenera los íconos desde app/icon.svg.
 * Dependencias temporales: sharp y png-to-ico.
 */
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { copyFile, writeFile } from 'node:fs/promises';

const source = 'app/icon.svg';
await copyFile(source, 'public/logo.svg');
const frames = await Promise.all([16, 32, 48].map(size =>
  sharp(source, { density: 384 }).resize(size, size).png().toBuffer()
));
await writeFile('public/favicon.ico', await pngToIco(frames));

// Relleno opaco hasta el borde para los recortes de iOS y Android.
for (const size of [180, 192, 512]) {
  const file = size === 180 ? 'app/apple-icon.png' : `public/logo${size}.png`;
  await sharp(source, { density: 3072 }).resize(size, size)
    .flatten({ background: '#1A1612' }).png().toFile(file);
}
