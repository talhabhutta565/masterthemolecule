const fs = require('fs');
let content = fs.readFileSync('src/app/protocol-room/page.js', 'utf8');

const replacements = {
  "Add-On": "Add On",
  "world-class": "world class",
  "Jean-François": "Jean François",
  "60-min": "60 min",
  "30-day": "30 day",
  "One-time": "One time",
  "fellowship-trained": "fellowship trained",
  "longest-standing": "longest standing",
  "Co-Anchor": "Co Anchor",
  "recording-only": "recording only",
  " — ": " "
};

for (const [key, val] of Object.entries(replacements)) {
  content = content.split(key).join(val);
}

fs.writeFileSync('src/app/protocol-room/page.js', content);
console.log("Done replacing dashes.");
