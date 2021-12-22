<div align="center">

# 🟣 `@ricardo-jrm/supernova`

<b>React Module Boilerplate</b>

![build](https://img.shields.io/github/workflow/status/ricardo-jrm/supernova/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardo-jrm/supernova?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardo-jrm/supernova?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardo-jrm/supernova?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardo-jrm/supernova?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Bootstrap</b>

```ts
npx @ricardo-jrm/supernova
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

### <b>Dev Dependencies</b>

- `React`
- `Typescript`
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

### <b>Install</b>

```ts
npm install @ricardo-jrm/supernova

yarn add @ricardo-jrm/supernova
```

<br />

### <b>Usage</b>

```ts
// hook
import { useExampleHook, ExampleHookType } from '@ricardo-jrm/supernova';

// context
import {
  ExampleContext,
  useExampleContext,
  ExampleContextType,
} from '@ricardo-jrm/supernova';

// component
import {
  ExampleComponent,
  ExampleComponentProps,
} from '@ricardo-jrm/supernova';

// provider
import { ExampleProvider, ExampleProviderProps } from '@ricardo-jrm/supernova';
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardo-jrm/supernova/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

Bootstrapped with 🟣[@ricardo-jrm/supernova](https://github.com/ricardo-jrm/supernova)

<br />
