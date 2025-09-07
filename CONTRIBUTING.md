# Contributing

Thanks for considering contributing to this library. This document explains how to report issues, propose changes and get your contribution merged quickly.

## How to file a good issue

When opening an issue, please include:

- A short, descriptive title.
- A clear description of the problem or feature request.
- Steps to reproduce (for bugs).
- The expected vs actual behavior.
- Relevant environment details (Node.js version, OS) when applicable.
- A minimal reproduction (repository or code snippet) if possible.

Use labels and templates if provided by the repository.

## How to propose a change (Pull Request)

1. Fork the repository and create a topic branch from `main`.
2. Run the tests and linters locally (see the Development setup section).
3. Make small, focused commits with clear messages. Prefer one logical change per PR.
4. Push your branch and open a pull request describing the change, why it’s needed, and any relevant details.
5. Link any related issues using `#<issue-number>` and reference them in the PR description.

If your PR changes public API, update `README.md` and add or update tests.

## Tests and quality checks

- Add tests for new features and bug fixes. Tests should be fast and deterministic.
- Use the existing test framework.
- The repository uses a pre-commit hook to run checks before commits.

## Commit messages

Follow Conventional Commits (https://www.conventionalcommits.org/):

- feat: a new feature
- fix: a bug fix
- docs: documentation only changes
- test: adding or updating tests
- chore: changes to the build process or auxiliary tools

Write concise commit titles and, when needed, a body describing the reasoning.

## Review & merge process

- CI should pass for the PR.
- Maintain small PR size for easier review.
- After reviews and approvals, a maintainer will merge. Rebase or squash according to the repository preference.

## Adding new public APIs

1. Add/extend tests covering the new API surface.
2. Update documentation (`README.md`) with examples and public API notes.
3. Ensure types are exported and the build emits the correct bundles.

## Security issues

For security-sensitive bugs, follow the guidelines in [`SECURITY.md`](SECURITY.md).

## Thank you

Thanks for helping improve this project. Small, focused contributions are welcome.
