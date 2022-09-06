/**
 *
 * @param contents
 * @param type
 * @returns
 */
function calcSha(contents: string, type: string): number {
  const forge = require("node-forge");
  let sha: any;
  switch (type) {
    case "SHA-1":
      sha = forge.md.sha1.create();
      break;
    case "SHA-256":
      sha = forge.md.sha256.create();
      break;
    case "SHA-384":
      sha = forge.md.sha384.create();
      break;
    case "SHA-512":
      sha = forge.md.sha512.create();
      break;
  }
  sha.update(contents);

  return sha.digest().toHex();
}

export default calcSha;
