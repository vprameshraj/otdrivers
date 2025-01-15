const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

if (!fs.existsSync(buildDir)) {
  console.error('Build directory not found. Please run "npm run build" first.');
  process.exit(1);
}

const manifest = {
  manifestVersion: "1.0",
  bundles: [],
  routes: []
};

// Helper to collect files recursively
const collectFiles = (dir) => {
  const files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...collectFiles(fullPath));
    } else {
      files.push(path.relative(buildDir, fullPath).replace(/\\/g, '/'));
    }
  });
  return files;
};

// Collect static files
const staticFiles = collectFiles(path.join(buildDir, 'static'));
manifest.bundles.push({
  name: "main",
  files: ["index.html", ...staticFiles]
});

// Define routes
manifest.routes.push(
  { source: "/", destination: "/index.html" },
  { source: "/static/*", destination: "/static/" }
);

// Write deploy-manifest.json
const manifestPath = path.join(buildDir, 'deploy-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`deploy-manifest.json created successfully at ${manifestPath}`);
