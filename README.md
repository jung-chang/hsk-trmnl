# Traditional Chinese HSK flashcards for TRMNL

This repository contains both halves of the plugin:

- a Cloudflare Worker that keeps the complete 600-entry classic HSK 2.0
  Levels 1–3 vocabulary in its bundle and returns one random word;
- TRMNL Polling templates for full, half-horizontal, half-vertical, and
  quadrant layouts.

Every vocabulary record contains only `traditional`, `pinyin`, `english`, and
`hsk`. No KV, D1, R2, or other database is required.

## API

`GET /word` returns a random word from all three levels:

```json
{
  "traditional": "學習",
  "pinyin": "xué xí",
  "english": "to learn; to study",
  "hsk": 1
}
```

Filter the eligible pool with one or more comma-separated levels:

```text
/word?hsk=1
/word?hsk=2
/word?hsk=3
/word?hsk=1,2,3
```

Missing or blank `hsk` selects all levels. Invalid values return HTTP 400.
Every JSON response sends `Cache-Control`, `CDN-Cache-Control`, and
`Cloudflare-CDN-Cache-Control` no-store directives so each TRMNL polling
refresh reaches the Worker and selects a new random entry.

## Local Worker development

Requirements: a current Node.js release and npm.

```sh
npm install
npm run dev
```

Wrangler prints the local URL (normally `http://localhost:8787`). Test it in a
second terminal:

```sh
curl -i 'http://localhost:8787/word?hsk=1,2,3'
npm test
npm run check
```

No Worker bindings are used. If bindings are added later, run
`npx wrangler types` after changing `wrangler.jsonc`.

## Deploy to Cloudflare

Authenticate once, then deploy:

```sh
npx wrangler login
npm run deploy
```

This project is currently deployed at
`https://hsk-trmnl.kevinjungchang.workers.dev`. Verify the deployed endpoint:

```sh
curl -i 'https://hsk-trmnl.kevinjungchang.workers.dev/word?hsk=1,2,3'
```

The bundled vocabulary is far below the current Worker script-size limit; no
storage product is needed.

## GitHub development flow

This repository is configured to test and deploy both halves of the project
with GitHub Actions. Pull requests run the Worker checks and `trmnlp lint`.
Every successful push to `main` deploys the Worker first and then publishes
the templates to existing TRMNL plugin `483633`.

Add these repository secrets under **Settings → Secrets and variables →
Actions** before running the deployment workflow:

- `TRMNL_API_KEY`: a TRMNL user API key;
- `CLOUDFLARE_API_TOKEN`: a Cloudflare API token with permission to edit
  Workers scripts;
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account that owns `hsk-trmnl`.

The deployment can also be started manually from **Actions → Test and deploy
→ Run workflow**. Never commit any of these credentials.

For local TRMNL development, Docker is the only prerequisite:

```sh
./bin/trmnlp serve
```

Open `http://localhost:4567`; the preview reloads after edits under `src/`.
The wrapper uses a locally installed `trmnlp` executable when available and
otherwise runs the official `trmnl/trmnlp` Docker image. To make a manual
TRMNL deployment, authenticate with `./bin/trmnlp login`, then run:

```sh
./bin/trmnlp push
```

`src/settings.yml` deliberately contains `id: 483633`, ensuring pushes update
the existing plugin instead of creating another one.

## Connect TRMNL Polling

1. `src/settings.yml` already points to the deployed Worker. To restrict the
   plugin, change the query to `?hsk=1`, `?hsk=2`, `?hsk=3`, or another
   supported combination.
2. Push changes to `main` to publish the plugin automatically through GitHub
   Actions. For a manual upload, use `./bin/trmnlp push` after authenticating
   with `./bin/trmnlp login`.
3. In TRMNL, force a refresh once and confirm the merge variables contain
   `traditional`, `pinyin`, `english`, and `hsk`.

`src/settings.yml` uses the Polling strategy and a 15-minute refresh interval.
Change that interval in TRMNL if desired. The four layout files all render the
single component in `src/shared.liquid`, with size-specific typography while
retaining the same visual hierarchy.

## Data integrity

`src/vocabulary.ts` contains 150 HSK 1 entries, 150 HSK 2 entries, and 300 HSK
3 entries. The classic syllabus has repeated Hanzi for distinct readings or
senses; those remain separate flashcards so the total is exactly 600. Tests
also guard representative distinctions such as `還 hái` / `還 huán` and
`隻 zhī` / `只 zhǐ`.

See `THIRD_PARTY_NOTICES.md` for dataset provenance and licenses.
