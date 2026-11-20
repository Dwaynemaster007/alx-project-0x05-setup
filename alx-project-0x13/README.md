# Image Generation App (ALX Project 0x13)

Type a prompt and get an AI-generated image. The app keeps a gallery of everything you've generated this session; click an image to show it again.

- `pages/index.tsx`: the prompt form, current image and gallery
- `hooks/useFetchData.ts`: a generic hook for POST requests (loading, error, results)
- `pages/api/generate-image.ts`: a server-side API route that calls the [chatgpt-42 text-to-image API on RapidAPI](https://rapidapi.com/rphrp1985/api/chatgpt-42), so your key never reaches the browser

## Run it

```bash
npm install
cp .env.example .env.local   # then add your RapidAPI key as GPT_API_KEY
npm run dev                  # http://localhost:3000
```

Without a key the app still runs and shows a clear error when you generate. On Vercel, add `GPT_API_KEY` under Project Settings → Environment Variables.
