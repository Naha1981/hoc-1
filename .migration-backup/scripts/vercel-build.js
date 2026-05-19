import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = process.cwd()
const distClient = join(root, 'dist', 'client')
const distServer = join(root, 'dist', 'server')
const outputDir = join(root, '.vercel_build_output')
const staticDir = join(outputDir, 'static')
const funcDir = join(outputDir, 'functions', 'ssr.func')

await rm(outputDir, { recursive: true, force: true })
await mkdir(staticDir, { recursive: true })
await mkdir(funcDir, { recursive: true })

await cp(join(root, 'public'), staticDir, { recursive: true, force: true })
await cp(distClient, staticDir, { recursive: true, force: true })
await cp(distServer, funcDir, { recursive: true, force: true })

await writeFile(
  join(funcDir, 'package.json'),
  JSON.stringify({ type: 'module' }, null, 2) + '\n',
)

await writeFile(
  join(funcDir, 'index.mjs'),
  `import server from './server.js';

function normalizeHeaders(headers) {
  const normalized = new Headers();
  for (const [key, value] of Object.entries(headers || {})) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      value.forEach((item) => normalized.append(key, item));
    } else {
      normalized.append(key, value);
    }
  }
  return normalized;
}

export default async function handler(req, res) {
  const host = req.headers.host ?? 'localhost';
  const protocol = req.headers['x-forwarded-proto'] ?? 'https';
  const url = new URL(req.url ?? '/', protocol + '://' + host);

  const request = new Request(url.toString(), {
    method: req.method,
    headers: normalizeHeaders(req.headers),
    body: ['GET', 'HEAD'].includes(req.method ?? 'GET') ? null : req,
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;

  const headers = {};
  for (const [name, value] of response.headers.entries()) {
    if (headers[name]) {
      if (Array.isArray(headers[name])) {
        headers[name].push(value);
      } else {
        headers[name] = [headers[name], value];
      }
    } else {
      headers[name] = value;
    }
  }

  for (const [name, value] of Object.entries(headers)) {
    res.setHeader(name, value);
  }

  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}
`,
)
