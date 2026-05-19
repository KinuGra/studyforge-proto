# プロジェクト作成（対話プロンプトは下記の値で答える）

```
npx create-next-app@latest studyforge-proto

✔ Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use React Compiler? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
✔ What import alias would you like configured? … @/\*
✔ Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? … No / Yes

cd studyforge-proto
```

# KaTeX を入れる

pnpm install katex react-katex
pnpm install -D @types/react-katex

# 開発サーバ起動して動作確認

pnpm run dev
