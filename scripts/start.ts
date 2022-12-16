import { createServer } from "http";
import { promises } from "fs";
import { join } from "path";
import { serve } from "esbuild";
import * as CFG from "../esbuild.config";
import open from "open";

const { readFile } = promises;

const startServer = () => {
  createServer(async (...args) => {
    const res = args[1];
    try {
      const publicHTML = await readFile(join(CFG.PUBLIC_PATH, "index.html"), {
        encoding: "utf-8",
      });
      res.end(publicHTML);
    } catch (error) {
      console.log(error);
    }
  }).listen(CFG.DEV_SERVER_PORT, () => {
    console.log(`Dev server at ${CFG.DEV_SERVER_URL}`);
  });
};

(async () => {
  const server = await serve(CFG.serveOptions, CFG.transformOptions);
  const { host: HOST, port: PORT } = server;

  console.log("Location:");
  console.table({ HOST, PORT });

  startServer();
  await open(CFG.DEV_SERVER_URL);
})();
