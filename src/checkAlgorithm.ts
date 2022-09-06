import calcChecksum from "./algorithm/calcChecksum";
import calcSha from "./algorithm/calcSha";
import calcMd5 from "./algorithm/calcMd5";

/**
 *
 * @param type
 * @returns
 */
function checkAlgorithm(type: string): any {
  let func: any;

  switch (type) {
    case "Checksum-8":
    case "Checksum-16":
    case "Checksum-32":
      func = calcChecksum;
      break;
    case "CRC-16":
    case "CRC-32":
      console.log("these features are under development");
      break;
    case "SHA-1":
    case "SHA-256":
    case "SHA-384":
    case "SHA-512":
      func = calcSha;
      break;
    case "MD-5":
      func = calcMd5;
      break;
    default:
      console.log(`Out of type ${type}`);
  }

  return func;
}

export default checkAlgorithm;
