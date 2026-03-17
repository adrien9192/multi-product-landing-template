export function withBase(path, base = import.meta.env.BASE_URL) {
  if (!path.startsWith('/')) return path
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  return `${normalizedBase}${path}`
}
