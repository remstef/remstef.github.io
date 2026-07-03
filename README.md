# itsme-again

https://github.com/nextjs/deploy-github-pages

nextjs app created with

```
pnpm create next-app

Name of the app: app
Would you like to use TypeScript? No / _Yes_
Which linter would you like to use? ESLint / _Biome_ / None
Would you like to use React Compiler? _No_ / Yes
Would you like to use Tailwind CSS? No / _Yes_
Would you like your code inside a `src/` directory? No / _Yes_
Would you like to use App Router? (recommended) No / _Yes_
Would you like to customize the import alias (`@/*` by default)? _No_ / Yes
What import alias would you like configured? @/*
Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? No / _Yes_
```

```
cd app
pnpm install
pnpm approve-builds
pnpm install
```

follow https://daisyui.com/docs/install/nextjs/

```
pnpm install daisyui@latest
pnpm install tailwind-merge
pnpm install react-markdown
pnpm install rehype-raw
pnpm install @tailwindcss/typography
pnpm install next-themes
pnpm install @fortawesome/fontawesome-svg-core \
             @fortawesome/free-solid-svg-icons \
             @fortawesome/free-brands-svg-icons \
             @fortawesome/react-fontawesome
pnpm install academicons
npx serve@latest out
```

```
pnpm run dev --> starts the development server
pnpm run build --> builds static webpage in 'out' directory

```
