import calcChecksum from "./Algorithm/calcChecksum";

function checkAlgorithm(type: string) {
  let func: any | undefined;

  switch (type) {
    case "8":
    case "16":
    case "32":
      func = calcChecksum;
      break;
    case "CRC-16":
    case "CRC-32":
    case "SHA-1":
    case "MD-5":
      console.log("these features are under development");
      break;
    default:
      console.log(`Out of type ${type}`);
  }

  return func;
}

export default checkAlgorithm;
