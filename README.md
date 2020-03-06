# LabelSync

### Usage

1. Edit labels inside `labelsync.ts`
2. `yarn make` (or just rely on the husky pre-commit script)
3. Commit and push on `master` branch

### Development

- We wrap `label-sync` library for easier label management
- Changing our label system (e.g. new label category or change color of an existing category) can be done in `lib/builders.ts`.

### How it works

- We have [LabelSync Manager](https://label-sync.com/) [GitHub App](https://github.com/apps/labelsync-manager) built by [@maticzav](https://github.com/maticzav) [installed on our GitHub org](https://github.com/organizations/prisma-labs/settings/installations/7137275).
- It monitors this specially named repo and applies all changes detected to `labelsync.yml` on `master` branch.
