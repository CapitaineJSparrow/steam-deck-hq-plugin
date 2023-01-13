export const getGamesSettingsFromHTMLMess = (s: string): string[] => {
  return s
    .replace(/<[^>]*>?/gm, '')
    .replace(/\r/g, '@')
    .replace(/\n/g, '@')
    .split('@')
    .filter(el => el.length > 0)
}