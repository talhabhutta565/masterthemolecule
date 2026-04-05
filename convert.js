const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'src/app/protocol-room-page.html');
const cssDest = path.join(__dirname, 'src/app/protocol-room/styles.css');
const jsDest = path.join(__dirname, 'src/app/protocol-room/page.js');

if (!fs.existsSync(path.dirname(cssDest))) {
  fs.mkdirSync(path.dirname(cssDest), { recursive: true });
}

let content = fs.readFileSync(srcFile, 'utf-8');

// Extract CSS
const cssMatch = content.match(/<style>([\s\S]*?)<\/style>/);
let cssContent = cssMatch ? cssMatch[1] : '';

// Scope some global tags
cssContent = cssContent.replace(/body\s*\{/, '.protocol-room {\n  width: 100%;');
cssContent = cssContent.replace(/section\s*\{/g, '.protocol-room section {');
cssContent = cssContent.replace(/footer\s*\{/g, '.protocol-room footer {');

fs.writeFileSync(cssDest, cssContent);

// Extract HTML inside body, excluding script
const htmlMatch = content.match(/<body>([\s\S]*?)<script>/);
let bodyHtml = htmlMatch ? htmlMatch[1] : '';

// Convert HTML to JSX
let jsx = bodyHtml;

// Remove HTML comments
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

// Make inline styles JSX compliant
jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
  const styles = {};
  styleString.split(';').forEach(rule => {
    if (!rule.trim()) return;
    let [key, value] = rule.split(':');
    if (key && value) {
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      styles[key] = value.trim();
    }
  });
  return `style={${JSON.stringify(styles)}}`;
});

// React properties
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/<br>/g, '<br/>');

// Fix the onclick attributes for FAQ
let faqIndex = 0;
jsx = jsx.replace(/onclick="toggleFaq\(this\)"/g, () => {
  return `onClick={() => toggleFaq(${faqIndex++})}`;
});

jsx = jsx.replace(/<div className="faq-q"(.*?)>(.*?)<\/div>\s*<div className="faq-a">(.*?)<\/div>/g, (match, attrs, question, answer) => {
  const indexMatch = attrs.match(/toggleFaq\((\d+)\)/);
  const index = indexMatch ? indexMatch[1] : 0;
  return `<div className={\`faq-q \${openFaq === ${index} ? 'open' : ''}\`} ${attrs}>${question}</div>
          <div className={\`faq-a \${openFaq === ${index} ? 'open' : ''}\`}>${answer}</div>`;
});


// Add the countdown component variables
jsx = jsx.replace(/<span className="countdown-num" id="hours">.*?<\/span>/, '<span className="countdown-num">{timeLeft.hours}</span>');
jsx = jsx.replace(/<span className="countdown-num" id="mins">.*?<\/span>/, '<span className="countdown-num">{timeLeft.mins}</span>');
jsx = jsx.replace(/<span className="countdown-num" id="secs">.*?<\/span>/, '<span className="countdown-num">{timeLeft.secs}</span>');

// Create the page.js content
const pageContent = `
"use client";

import { useState, useEffect } from "react";
import "./styles.css";

export default function ProtocolRoom() {
  const [timeLeft, setTimeLeft] = useState({ hours: "48", mins: "00", secs: "00" });
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Setting 48 hours from component mount
    const endTime = new Date().getTime() + (48 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: "00", mins: "00", secs: "00" });
        clearInterval(interval);
        return;
      }

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(h).padStart(2, '0'),
        mins: String(m).padStart(2, '0'),
        secs: String(s).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="protocol-room">
      <style jsx global>{\`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
      \`}</style>
      ${jsx}
    </div>
  );
}
`;

fs.writeFileSync(jsDest, pageContent);
console.log("Done generating components!");
