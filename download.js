import { execSync, spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const token = execSync('gcloud auth print-access-token', { encoding: 'utf8' }).trim();

const routes = [
  { screenId: "d123688fd8394480b9cd886941d79a8e", route: "/" },
  { screenId: "97644a7b4e1e4c8aaf4a7c17dfee54d5", route: "/about" },
  { screenId: "201f1dc98b854080bbc4074db2b9e1e9", route: "/page3" },
  { screenId: "086e5285e94042ef8697d74f3407e2b9", route: "/page4" },
  { screenId: "171743d5c02b4c43bb87e482fb45ad60", route: "/page5" }
];

const env = {
  ...process.env,
  STITCH_ACCESS_TOKEN: token,
  STITCH_PROJECT_ID: "backlinks-104a2",
  GOOGLE_CLOUD_PROJECT: "backlinks-104a2"
};

const cliPath = path.join(__dirname, 'node_modules', '@_davideast', 'stitch-mcp', 'dist', 'cli.js');

const args = [
  cliPath,
  'site',
  '-p',
  '13396325736537532974',
  '-r',
  JSON.stringify(routes),
  '-o',
  __dirname
];

const assetsDir = path.join(__dirname, 'public', 'assets');
if (fs.existsSync(assetsDir)) {
  console.log('Cleaning up existing assets directory to avoid unlinking errors...');
  fs.rmSync(assetsDir, { recursive: true, force: true });
}

console.log('Fetching screens from Stitch...');
const result = spawnSync('node', args, { env, encoding: 'utf8', stdio: 'inherit' });
if (result.error) {
  console.error('Error running script:', result.error);
} else {
  console.log('\nSuccess! Overwrote my-stitch-site with your correct canvas screens.');
}
