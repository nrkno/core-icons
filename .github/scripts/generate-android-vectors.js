const svg2vectordrawable = require('svg2vectordrawable');

const DEFAULT_TARGET_BRANCH = "generate-android-vectors"

async function app(github, context, exec) {
    let svgCode = '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20"/></svg>';
    svg2vectordrawable(svgCode).then(xmlCode => {
        console.log(xmlCode);
    });
}

module.exports = async (github, context, exec) => {
    return app(github, context, exec)
}
