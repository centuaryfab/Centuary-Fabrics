import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { createServer } from "http";
import { registerRoutes } from "./routes";

const app = express();
const httpServer = createServer(app);

(async () => {

  if (process.env.NODE_ENV === "production") {
    const staticPath = path.join(process.cwd(), "dist/public");

    app.use(express.static(staticPath));

    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) return next(err);

    return res.status(status).json({ message });
  });

  const port = parseInt(process.env.PORT || "5000");

  console.log("🚀 Starting server...");

  httpServer.listen(port, () => {
    console.log("✅ SERVER RUNNING ON PORT " + port);
  });

})();