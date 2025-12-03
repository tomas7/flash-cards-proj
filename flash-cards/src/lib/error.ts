// lib/errors.ts
export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unknown error";
}