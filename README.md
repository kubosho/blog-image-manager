# Blog image manager

Blog image manager for <https://blog.kubosho.com>.

## Setup

### Environment Variables

To develop locally, create a `.env` file by copying `.env.template`:

```bash
cp .env.template .env
```

Then update each environment variable with your AWS credentials and configuration:

```bash
# Examples

## AWS Configuration
AWS_ACCESS_KEY_ID="AKIXXXXXXXXXXXX"
AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXX"

## AWS S3 Configuration
AWS_S3_BUCKET_NAME="example-bucket-name"
AWS_S3_HOST_NAME="s3.amazonaws.com"
AWS_S3_REGION_NAME="ap-northeast-1"

## AWS CloudFront Configuration
AWS_CLOUD_FRONT_HOST_NAME="xxxxxxxxxxxx.cloudfront.net"

## Google OAuth Configuration
AUTH_GOOGLE_ID="000000000000-xxxxxxxxxxxx.apps.googleusercontent.com"
AUTH_GOOGLE_SECRET="GOCSPX-xxxxxxxxxxxx"
AUTH_SECRET="XXXXXXXXXXXX"
```

## Development

Launch development server:

```bash
npm run dev
```

Execute build:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

Run test runner:

```bash
npm run test
```

Launch storybook:

```bash
npm run storybook
```
