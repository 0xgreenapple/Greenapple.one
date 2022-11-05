const fs = require('fs');

function getLinksData() {
    let filedata = fs.readFileSync("./data/links/links.json")
    let parsedata = JSON.parse(filedata)
    return parsedata.links;
}
export default getLinksData;