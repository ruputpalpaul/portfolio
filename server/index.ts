import { createApp } from "../api/_lib/app";
import { serveStatic } from "./static";

const startServer = async () => {
  const { app, httpServer } = await createApp();

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    // On Vercel, static files are handled by the platform, so we skip serveStatic
    if (!process.env.VERCEL) {
      serveStatic(app);
    }
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // Only listen on port if not running in Vercel (or similar serverless env that imports this file)
  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(
      {
        port,
        host: "0.0.0.0",
      },
      () => {
        console.log(`serving on port ${port}`);
      },
    );
  }
};

// Start the server
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
