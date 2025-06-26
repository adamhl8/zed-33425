// The following ESLint errors don't show up in Zed >v0.192.5

// ESLint Errors: @typescript-eslint/no-unused-vars
for (const key of Object.keys(process.env)) {
  // ESLint Errors: no-await-in-loop, promise/avoid-new, no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
