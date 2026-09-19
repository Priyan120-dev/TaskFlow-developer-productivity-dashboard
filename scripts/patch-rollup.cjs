const fs = require('fs');
const path = require('path');

const rollupNativePath = path.join(__dirname, '..', 'node_modules', 'rollup', 'dist', 'native.js');

if (fs.existsSync(rollupNativePath)) {
  let content = fs.readFileSync(rollupNativePath, 'utf8');
  if (!content.includes("@rollup/wasm-node")) {
    content = content.replace(
      /const nativeModule = requireWithFriendlyError\([\s\S]*?\);/,
      `let nativeModule;\ntry {\n\tnativeModule = requireWithFriendlyError(\n\t\texistsSync(path.join(__dirname, localName)) ? localName : \`@rollup/rollup-\${packageBase}\`\n\t);\n} catch (err) {\n\tnativeModule = require('@rollup/wasm-node/dist/native.js');\n}`
    );
    fs.writeFileSync(rollupNativePath, content, 'utf8');
    console.log('[TaskFlow] Rollup patched for WASM fallback successfully.');
  }
}
