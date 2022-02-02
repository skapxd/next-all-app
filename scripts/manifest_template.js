// @ts-check
exports.ManifestTemplate = function manifestTemplate (manifestJsonContent = []) {
    return `
{
    "name": "All App",
    "short_name": "All App",
    "theme_color": "#252833",
    "background_color": "#004740",
    "display": "fullscreen",
    "orientation": "portrait",
    "scope": "/",
    "start_url": "/",
    "icons": ${JSON.stringify(manifestJsonContent)},
    "splash_pages": null
}`
}