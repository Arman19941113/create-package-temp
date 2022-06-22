import fs from 'fs-extra'
import { execSync } from 'child_process'
import chalk from 'chalk'

process.on('exit', exitCode => {
  if (exitCode === 1) {
    fs.removeSync('dist')
    fs.removeSync('dist-ts')
  }
})

const run = (command) => execSync(command, { stdio: 'inherit' })
const stepLog = (msg) => console.log(chalk.cyan(msg))

await fs.remove('dist')
stepLog('Building d.ts file...')
run('vue-tsc --declaration --emitDeclarationOnly --outDir dist-ts')
run('api-extractor run -c api-extractor.json')
run('prettier --write dist/index.d.ts')
stepLog('\nBuilding library...\n')
run('vite build --emptyOutDir false')
await fs.remove('dist-ts')
