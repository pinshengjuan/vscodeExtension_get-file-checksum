/**
 *
 * @param contents
 * @param type
 * @returns
 */
function calcSha(contents: string, type: string) {
  const forge = require("node-forge");
  switch (type) {
    case "SHA-1":
      var md = forge.md.sha1.create();
      break;
    case "SHA-256":
      var md = forge.md.sha256.create();
      break;
    case "SHA-384":
      var md = forge.md.sha384.create();
      break;
    case "SHA-512":
      var md = forge.md.sha512.create();
      break;
  }
  md.update(contents);

  return md.digest().toHex();
}

export default calcSha;
