export const selectTags: (tags: string[], max?: number) => string[] = (tags, max) => {
    const total = max ?? 3
    const selectedTags = new Set()
    if (tags.length <= total) {
        return tags
    }
    do {
        selectedTags.add(tags[Math.floor(Math.random() * (tags.length))])
    } while (selectedTags.size < total)
    // @ts-ignore
    return [...selectedTags]
}