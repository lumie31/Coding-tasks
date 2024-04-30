// https://www.codewars.com/kata/5aaa1aa8fd577723a3000049/train/javascript
/*
  The eccentric candy-maker, Billy Bonka, is building a new candy factory to produce his new 4-flavor sugar pops. 
  The candy is made by placing a piece of candy base onto a conveyer belt which transports the candy through four separate processing stations in sequential order. 
  Each station adds another layer of flavor.

  Due to an error in the factory blueprints, the four stations have been constructed in incorrect locations. 
  It's too costly to disassemble the stations, so you've been called in.

  Arrange the directional path of the conveyer belt so that it passes through each of the stations in 
  sequential order while also traveling the shortest distance possible.
*/

function fourPass(stations) {

  const coords = stations.map((pos) => [Math.floor(pos / 10), pos % 10]);
  // console.log(coords)
  
  // function to get path between two points
  function getPath(start, end) {
    let path = [];
    let [x1, y1] = start;
    let [x2, y2] = end;
    
    // vertical movement to destination
    while (x1 !== x2) {
      path.push(x1 * 10 + y1);
      if (x1 < x2) {
        x1 += 1;
      } else {
        x1 -= 1;
      } 
    }
    
    // horizontal movement to destination
    while (y1 !== y2) {
      path.push(x1 * 10 + y1);
      if (y1 < y2) {
        y1 += 1;
      } else {
        y1 -= 1;
      } 
    }

    // Add the destination point
    path.push(x1 * 10 + y1);
    return path;
  }

  // Generate full path
  let fullPath = [];
  for (let i = 0; i < coords.length - 1; i++) {
    const segment = getPath(coords[i], coords[i + 1]);
    if (i === 0) {
        fullPath = fullPath.concat(segment);
    } else {
        fullPath = fullPath.concat(segment.slice(1));
    }
}

  // Check for overlaps
  const seen = new Set();
  for (let pos of fullPath) {
    if (seen.has(pos)) return null; // if overlap found
    seen.add(pos);
  }

  return fullPath;
 // console.log(fullPath)
}

