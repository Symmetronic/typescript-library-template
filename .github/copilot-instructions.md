# Copilot instructions for this repository

This repository is a TypeScript library template. Use these instructions to generate code, tests, docs, and edits that match the project's conventions and toolchain.

Quick repo facts (authoritative source of truth):

- Source root: `src/` (entry: `src/index.ts`)
- Tests: Vitest (configured in `vite.config.ts`) — environment: `jsdom`, globals enabled
- Build: `npm run build` runs `tsc -b && vite build` and outputs to `dist/`
- TypeScript: `tsconfig.json` extends `@tsconfig/strictest`, targets ES5, and uses paths `@/*` -> `src/*`
- Formatting: Prettier with `prettier-plugin-organize-imports` (see `prettier.config.mjs`)
- Linting: ESLint with `@typescript-eslint` and `eslint-plugin-import` (see `eslint.config.mjs`)

General rules for completions and edits

- Language: TypeScript. Use ES module syntax for imports/exports. Prefer `export default` for the main module export when the project already uses it.
- Keep changes minimal and localized. Don't modify package metadata (name/version/repository) unless explicitly requested.
- Prefer explicit types on public APIs. Keep helper/internal functions private or non-exported.
- Add a short contract comment (2–4 bullets) above new public functions documenting inputs, outputs, error modes, and success criteria.
- Keep code compatible with the project's transpilation target (modern TypeScript that compiles to ES5 via the build pipeline).

Testing conventions

- Use Vitest style (describe/it or test) and the `expect` API. Follow the pattern in `src/index.test.ts`.
- Provide at least one happy-path test and one edge-case test for new behaviors (e.g., empty inputs, invalid args).
- Keep tests fast and deterministic. Use `jsdom` only for DOM-related code.

Formatting and linting

- Let Prettier handle formatting. Respect the project's organize-imports plugin; imports should be sorted and grouped.
- Follow ESLint rules: avoid unused variables, prefer typed declarations, and keep consistent import styles.

Commit and PR conventions

- Use Conventional Commits for commit messages (feat/fix/docs/chore/refactor/test/build). This repository follows conventional commit patterns.

Documentation

- When adding new public APIs, update `README.md` with a short usage example and a minimal API description.
- Keep examples runnable TypeScript snippets that match the exported API surface.

When to create files

- New source files should go under `src/` and tests alongside them as `src/<name>.test.ts`.
- Add type-only files (e.g., `src/types.ts`) only when necessary and export types sparingly.

Examples of good prompts to follow

- Add a small utility
  "Create `src/isEmpty.ts` exporting a default function `isEmpty(value: unknown): boolean` that returns true for `null`, `undefined`, empty strings, empty arrays, and empty objects (no own enumerable keys). Add a 2–3 line contract comment and two vitest tests in `src/isEmpty.test.ts` (happy path + edge case). Keep imports organized."

- Add tests for an existing function
  "Add/update vitest tests for `src/index.ts` ensuring an empty-input test and a normal input test exist; use describe/it pattern."

What not to do automatically

- Don't change `package.json` metadata like `name` or `version` unless asked.
- Don't add runtime dependencies without explicit justification.

Preferred implementation style (small functions)
// Contract
// - inputs: typed parameters
// - output: typed return value
// - errors: describe when the function throws or returns sentinel values
export default function sum(...values: number[]): number {
return values.reduce((a, b) => a + b, 0);
}

If uncertain, prefer the simpler, well-typed design and add a short comment explaining trade-offs.

Ignored paths for suggestions

- `dist/`, `.cache/`, `coverage/`, `node_modules/`

Last synced with project configuration: ESLint, Prettier, Vitest, Vite, TypeScript strict settings.
