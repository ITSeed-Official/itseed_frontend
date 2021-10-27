// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');


let SENTRY_AUTO_RELEASE = process.env.SENTRY_AUTO_RELEASE === 'true';

const moduleExports = {
  reactStrictMode: true,
  sentry: {
    disableServerWebpackPlugin: !SENTRY_AUTO_RELEASE,
    disableClientWebpackPlugin: !SENTRY_AUTO_RELEASE,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
