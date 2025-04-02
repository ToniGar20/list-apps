# NextJS List App

📁 **Project Structure**

```
nextjs/
├── app/                     # Entry point (Next.js 13+)
│   ├── page.tsx             # Server Component importing <Card />
│   └── globals.css          # Global styles
├── components/              # Rehusable components
│   ├── Button
│   ├── List
│   |   └── ListItem
│   ├── Modal
│   └── Card
├── eslint.config.mjs        # Eslint
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project and scripts configuration
```

▶️ **How to Run the App**

1. Move to `/nextjs` folder
2. Install dependencies:

```
npm install
```

3. Launch the local dev server:

```
npm run dev
```

4. Open your browser at http://localhost:3000