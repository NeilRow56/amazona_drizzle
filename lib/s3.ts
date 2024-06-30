import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string,
  },
})

export async function getSignedUrlForS3Object(key: string, type: string) {
  return await getSignedUrl(
    s3Client,
    new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      ContentType: type,
    }),
    { expiresIn: 3600 }
  )
}
