import { readdir, readFile } from "fs/promises";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __filenameNormalized = __filename.replaceAll("\\", "/");
const __dirname = path.dirname(__filenameNormalized);
const __subDirname = path.join(__dirname, "_markdown");

export const staticMarkdown = await Promise.all(
  (await readdir(__subDirname)).map(async (fname) => {
    const absfname = path.join(__subDirname, fname);
    const content = await readFile(absfname, { encoding: "utf8" });
    return {
      fname: fname,
      fnamefull: absfname,
      content: content,
    };
  }),
);
