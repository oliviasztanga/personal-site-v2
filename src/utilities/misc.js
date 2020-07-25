export const openInNewTab = (url) => window.open(url, '_blank')

export const scroll = (section) => {
    document
        .getElementById(section)
        .scrollIntoView({behavior:'smooth'})
}