<div align="center">

# 🟣 `@ricardojrmcom/supernova`

<b>React Module Boilerplate</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/supernova/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/supernova?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/supernova?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/supernova?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/supernova?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Bootstrap</b>

```tsx
npx @ricardojrmcom/supernova
```

Boilerplate `React` project bootstrapped with all necessary configs and workflows

<br />

### <b>Workflows</b>

Quality Assurance

- Will lint code and run tests
- Runs on `pull_request` sync and `push` to `main`

Release

- Will create a GitHub release with auto generated versioning and changelog
- Will publish the package to the public NPM registry
- Runs on `push` to `main` and after the QA job

Publish to GitHub (Public)

- Will publish the package to the public GitHub registry
- Runs on `workflow_dispatch`

<br />

---

<br />

### <b>Install</b>

```tsx
npm install @ricardojrmcom/supernova

yarn add @ricardojrmcom/supernova
```

<br />

### <b>Usage</b>

```tsx
// component
import {
  ExampleComponent,
  ExampleComponentProps,
} from '@ricardojrmcom/supernova';

// hook
import { useExampleHook, ExampleHookType } from '@ricardojrmcom/supernova';

// context
import {
  ExampleContext,
  useExampleContext,
  ExampleContextType,
} from '@ricardojrmcom/supernova';

// provider
import {
  ExampleProvider,
  ExampleProviderProps,
} from '@ricardojrmcom/supernova';
```

<br />

### <b>Scripts</b>

```tsx
// install deps
yarn install

// run build
yarn build

// run lint
yarn lint

// run unit tests
yarn test

// run storybook
yarn sb
```

<br />

### <b>Project</b>

- [Project Page](https://l1b3r.notion.site/supernova-382adadc317c4ec189b6643bcdfffc09)
- [Source Code](https://github.com/ricardojrmcom/supernova)
- [Releases Page](https://github.com/ricardojrmcom/supernova/releases)

<br />

### <b>Project Dependencies</b>

- <b>TS Package Boilerplate: [🟪 @ricardojrmcom/nova](https://github.com/ricardojrmcom/nova)</b>
- <b>React Module Boilerplate: [🟣 @ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)</b>

<br />

### <b>Dev Dependencies</b>

- `Yarn`
- `Typescript`
- `React`
- `Prettier`
- `ESLint`
- `Commit Lint`
- `Lint Staged`
- `Husky`
- `Jest`
- `React Testing Library`
- `Storybook`
- `Webpack`
- `Semantic Release`

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/supernova/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
