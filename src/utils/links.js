export function isConfiguredUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const value = url.trim();
  if (!value || value.includes('ADD_') || value.includes('_HERE')) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
