import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { createServer } from "http";
import { registerRoutes } from "./routes";

const app = express();
const httpServer = createServer(app);

(async () => {

  if (process.env.NODE_ENV === "production") {
    const staticPath = path.join(process.cwd(), "dist/public");

    // ✅ Serve static files
    app.use(express.static(staticPath));

    // ✅ API routes
    await registerRoutes(httpServer, app);

    // ✅ FINAL FIX (NO wildcard, NO regex)
    app.use((_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });

  } else {
    // ✅ Dev mode
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);

    await registerRoutes(httpServer, app);
  }

  // ✅ Error handler
  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) return next(err);

    return res.status(status).json({ message });
  });

  const port = parseInt(process.env.PORT || "10000");

  console.log("🚀 Starting server...");

  httpServer.listen(port, "0.0.0.0", () => {
    console.log("✅ SERVER RUNNING ON PORT " + port);
  });

})();