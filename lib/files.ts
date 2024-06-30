export function getImageUrl(fileKey: string) {
  return `${process.env.NEXT_PUBLIC_BUCKET_URL}/${fileKey}`
}
