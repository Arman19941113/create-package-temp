import fs from 'fs-extra'
import { execSync } from 'child_process'
import chalk from 'chalk'

process.on('exit', exitCode => {
  if (exitCode === 1) {
    fs.removeSync('dist')
  }
})

const run = (command) => execSync(command, { stdio: 'inherit' })
const stepLog = (msg) => console.log(chalk.cyan(msg))

await fs.remove('dist')
stepLog('\nBuilding library...\n')
run('vite build --emptyOutDir false')
