import fs from 'fs-extra'
import { execSync } from 'child_process'

process.on('exit', exitCode => {
  if (exitCode === 1) {
    fs.removeSync('dist')
    fs.removeSync('dist-ts')
  }
})

const run = (command) => execSync(command, { stdio: 'inherit' })

await fs.remove('dist')
await run('tsc --project tsconfig.json')
await run('rollup -c rollup.config.mjs')
await run('api-extractor run -c api-extractor.json')
await fs.remove('dist-ts')
