const fs = require('fs-extra')
const colors = require('colors')

const htaccess = `RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule . index.html [L]`

fs
  .copy('./docs', './dist/docs')
  .then(() => {
    fs.copy('./CHANGELOG.md', './dist/CHANGELOG.md')
  })
  .then(() => {
    fs
      .writeFile('./dist/.htaccess', htaccess)
      .then(() => console.log(colors.green('\nFiles copy success')))
      .catch(err => console.error(err))
  })
  .catch(err => console.error(err))
