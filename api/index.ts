import { createApp } from "./_lib/app.js";

// Vercel Serverless Function handler
export default async function handler(req: any, res: any) {
    const { app } = await createApp();
    app(req, res);
}
