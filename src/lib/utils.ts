export function cn(...inputs: (string | number | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(' ')
}
