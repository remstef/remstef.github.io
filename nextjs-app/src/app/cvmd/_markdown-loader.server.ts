import { MODE_DEV } from "@/lib/constants";
import { readdir, readFile } from "fs/promises";
import path from "path";
import MarkdownFile from "./_markdown";

const __filename = new URL(import.meta.url).pathname;
const __filenameNormalized = __filename.replaceAll("\\", "/");
const __dirname = path.dirname(__filenameNormalized);
const __subDirname = path.join(__dirname, "_markdown");

export const staticMarkdown: Array<MarkdownFile> = (
  await Promise.all(
    (
      await readdir(__subDirname)
    ).map(async (fname) => {
      const absfname = path.join(__subDirname, fname);
      const content = await readFile(absfname, { encoding: "utf8" });
      // filename without file suffix
      const key = fname.slice(0, fname.lastIndexOf("."));
      const suffix = fname.slice(fname.lastIndexOf(".") + 1);

      // parse metadata content between BEGIN:METADATAJSON and END:METADATAJSON
      const bmarker = "BEGIN:METADATAJSON";
      const emarker = "END:METADATAJSON";
      const bindex = content.indexOf(bmarker);
      const eindex = content.lastIndexOf(emarker);

      if (MODE_DEV) {
        console.log(fname);
        if (bindex >= 0 && bindex < eindex) {
          console.log(content.slice(bindex + bmarker.length, eindex).trim());
        }
      }

      const metadataobj =
        bindex >= 0 && bindex < eindex
          ? JSON.parse(content.slice(bindex + bmarker.length, eindex).trim())
          : { title: key, pos: -1 };

      return {
        filename: fname,
        key: key,
        filesuffix: suffix,
        dirname: __subDirname,
        content: content,
        metadata: metadataobj,
      };
    }),
  )
).sort((a, b) => a.metadata?.pos - b.metadata?.pos);
