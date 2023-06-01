const fs = require("fs")
const path = require("path")

const svg2vectordrawable = require('svg2vectordrawable/src/svg-file-to-vectordrawable-file')

const CORE_ICON_DIRECTORIES = [
    "lib/expressive",
    "lib/icon",
    "lib/logo",
    "lib/preview"
]
const ANDROID_DRAWABLE_FOLDER = "android/icons/src/main/res/drawable"

const svg2vectordrawableOptions = {
    floatPrecision: 4,
    strict: false,
    fillBlack: false,
    xmlTag: false
}

async function app(github, context, exec) {
    convertSvgToXml()
}

function convertSvgToXml() {
    for (const directory of CORE_ICON_DIRECTORIES) {
        const files = fs.readdirSync(directory)

        for (const file of files) {
            const xmlFileName = file.replace(".svg", ".xml").replaceAll("-", "_").toLowerCase()
            if (!/^([a-z0-9\_])+\.xml$/.test(xmlFileName)) {
                console.error(`Invalid file name: "${file}"! (output xml name: "${xmlFileName})`)
            }

            const svgFile = path.join(directory, file)
            const xmlFile = path.join(ANDROID_DRAWABLE_FOLDER, xmlFileName)

            svg2vectordrawable.convertFile(svgFile, xmlFile, svg2vectordrawableOptions)
        }
    }
}

module.exports = async (github, context, exec) => {
    return app(github, context, exec)
}

// If script is called directly https://stackoverflow.com/a/6398335
if (require.main === module) {
    convertSvgToXml()
}
