// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const isProd = process.env.NODE_ENV === 'production'
const SENTRY_AUTO_RELEASE = process.env.SENTRY_AUTO_RELEASE === 'true';

const moduleExports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn1.itseed.tw' : '',
  sentry: {
    disableServerWebpackPlugin: !SENTRY_AUTO_RELEASE,
    disableClientWebpackPlugin: !SENTRY_AUTO_RELEASE,
  },
  images: {
    domains: ['www.itseed.tw', 'dev.itseed.tw', 'd1pahwu47gk4xf.cloudfront.net'],
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
