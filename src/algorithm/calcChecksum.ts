/**
 * 
 * @param contents 
 * @param type 
 * @returns 
 */
function calcChecksum(contents: string, type: string) {
  let i = 0;
  let result: number = 0;
  var u32Buffer = new Uint32Array(1);
  for (i = 0; i < contents.length; i++) {
    result += contents.charCodeAt(i);
  }

  switch (type) {
    case "8":
      u32Buffer[0] = result & 0xff;
      break;
    case "16":
      u32Buffer[0] = result & 0xffff;
      break;
    case "32":
      u32Buffer[0] = result & 0xfffffffff;
      break;
  }
  console.log("result after bitwise AND: " + u32Buffer[0]);
  return u32Buffer[0];
}

export default calcChecksum;