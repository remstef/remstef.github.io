const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Input folder (unoptimized images)
const inputDir = path.join(__dirname, "../public/raw-images");
// Output folder (optimized images)
const outputDir = path.join(__dirname, "../public/optimized-images");

// Create output folder if it doesn't exist
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Optimize images
async function optimizeImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.basename(file, path.extname(file));

    console.log(`Creating optimized ${file}`);

    // Generate WebP and AVIF formats, 400px and 800px widths
    await Promise.all([
      // OpenGraph and TwitterCard metadata compliants
      sharp(inputPath)
        .resize(320)
        .png()
        .toFile(`${outputDir}/${baseName}-320-opengraph-image.png`),
      sharp(inputPath)
        .resize(320)
        .png()
        .toFile(`${outputDir}/${baseName}-320-twitter-image.png`),
      // webp
      sharp(inputPath)
        .resize(80)
        .webp()
        .toFile(`${outputDir}/${baseName}-80.webp`),
      sharp(inputPath)
        .resize(160)
        .webp()
        .toFile(`${outputDir}/${baseName}-160.webp`),
      sharp(inputPath)
        .resize(320)
        .webp()
        .toFile(`${outputDir}/${baseName}-320.webp`),
      sharp(inputPath)
        .resize(640)
        .webp()
        .toFile(`${outputDir}/${baseName}-640.webp`),
      sharp(inputPath)
        .resize(1280)
        .webp()
        .toFile(`${outputDir}/${baseName}-1280.webp`),
      // avif
      sharp(inputPath)
        .resize(80)
        .avif()
        .toFile(`${outputDir}/${baseName}-80.avif`),
      sharp(inputPath)
        .resize(160)
        .avif()
        .toFile(`${outputDir}/${baseName}-160.avif`),
      sharp(inputPath)
        .resize(320)
        .avif()
        .toFile(`${outputDir}/${baseName}-320.avif`),
      sharp(inputPath)
        .resize(640)
        .avif()
        .toFile(`${outputDir}/${baseName}-640.avif`),
      sharp(inputPath)
        .resize(1280)
        .avif()
        .toFile(`${outputDir}/${baseName}-1280.avif`),
    ]);
  }
}

optimizeImages().catch(console.error);
