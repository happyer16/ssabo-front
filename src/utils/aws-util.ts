export function getCloudFrontImageUrl(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  return 'https://d18ht2fhxsp03p.cloudfront.net' + path; // cloudfront 주소
}
