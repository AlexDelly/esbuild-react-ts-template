import { promises } from "fs";
import { join } from "path";
import { buildSync } from "esbuild";
import * as CFG from "../esbuild.config";
import { images } from "../public/images";

const { readFile, writeFile, copyFile } = promises;

async function createHTML() {
  images.map((img) =>
    (async () => {
      await copyFile(join(CFG.PUBLIC_PATH, img), join("build", img));
    })()
  );

  const HTMLPublic = await readFile(join(CFG.PUBLIC_PATH, "index.html"), {
    encoding: "utf-8",
  });
  const HTMLBuild = HTMLPublic.replace(
    CFG.HTML_COMMENTS,
    "<!--ESbuild changed-->"
  )
    .replace(CFG.DEV_LINK_HTML, CFG.BUILD_LINK_HTML)
    .replace(CFG.DEV_SCRIPT_HTML, CFG.BUILD_SCRIPT_HTML);

  writeFile(join("build", "index.html"), HTMLBuild, {
    encoding: "utf8",
  });
  console.log("Success");
}

buildSync(CFG.buildOptions);
createHTML();
