/**
 *
 * @param contents
 * @param type
 * @returns
 */
function calcMd5(contents: string, type: string) {
  const forge = require("node-forge");
  const md = forge.md.md5.create();
  md.update(contents);

  return md.digest().toHex();
}

export default calcMd5;
