import { ServeOptions, BuildOptions, Loader } from "esbuild";

type LoaderI = {
  [key: string]: Loader;
};

export const DEV_SERVER_PORT = 3000;
export const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;
export const PUBLIC_PATH = "public";
export const HTML_COMMENTS = /<!--[\s\S]*?-->/g;
export const DEV_LINK_HTML = `<link rel="stylesheet" href="http://localhost:8080/serve/index.css" />`;
export const DEV_SCRIPT_HTML = `<script src="http://localhost:8080/serve/index.js" type="module"></script>`;
export const BUILD_LINK_HTML = `<link rel="stylesheet" href="index.css">`;
export const BUILD_SCRIPT_HTML = `<script src="index.js" type="module"></script>`;

const serveLoader: LoaderI = {
  ".png": "dataurl",
  ".jpg": "dataurl",
  ".webp": "dataurl",
  ".jpeg": "dataurl",
  ".gif": "dataurl",
  ".svg": "dataurl",
};

const buildLoader: LoaderI = {
  ".png": "file",
  ".jpg": "file",
  ".webp": "file",
  ".jpeg": "file",
  ".gif": "file",
  ".svg": "file",
};

export const serveOptions: ServeOptions = {
  servedir: "www",
  host: "127.0.0.1",
  port: 8080,
};

export const transformOptions: BuildOptions = {
  entryPoints: ["src/index.tsx"],
  outdir: "www/serve",
  bundle: true,
  format: "esm",
  inject: ["./react-instance.ts"],
  loader: serveLoader,
};

export const buildOptions: BuildOptions = {
  entryPoints: ["src/index.tsx"],
  outdir: "build",
  bundle: true,
  sourcemap: true,
  minify: true,
  format: "esm",
  inject: ["./react-instance.ts"],
  target: ["es6"],
  loader: buildLoader,
};
