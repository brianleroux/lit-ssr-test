# problems

- lit-labs/ssr is marked as unstable and likely to break by the lit project
- lit-labs/ssr is 22mb on disk making it unsuitable for ephemeral rendering environments like AWS Lambda
- only emits DSD style DOM which means client JS is required to polyfill firefox
- emits meaningful comments into the DOM
