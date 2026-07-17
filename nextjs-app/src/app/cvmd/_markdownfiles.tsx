import { readdir, readFile } from "fs/promises";
import path from "path";

const filePath = new URL(import.meta.url).pathname;
const fpnormalized = filePath.replaceAll("\\", "/");
const fp3 = fpnormalized.slice(0, fpnormalized.lastIndexOf("/"))
const fp4 = path.join(fp3, "_markdown")

const files = await readdir(fp4);
export async function resolveMD(){
  return await Promise.all(files.map(async fname => {
    const absfname = path.join(fp4, fname)
    const mdcontent = await readFile(absfname, { encoding: "utf8" })
    return {
      fname: fname,
      fnamefull: absfname,
      content: mdcontent
    }}));
}

export const resolved = await resolveMD();