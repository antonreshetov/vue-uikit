if (!process.argv[2]) {
    console.error('Please enter new component name')
    process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const fs = require('fs')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const ComponentName = uppercamelcase(componentname)
const packagePath = path.resolve(__dirname, '../src/package', componentname)
const colors = require('colors')

// Template
const files = [
    {
        filename: `${ComponentName}.vue`,
        content: `<template></template>
<script>
    export default {
        name: 'Vu${ComponentName}',
        
        props: {},
        
        data() {
            return {}
        }
    }
</script>
<style>
</style>`
    }
]

// Package
if (fs.existsSync(packagePath)) {
    console.log(`\nComponent exists, try to give a different name...\n`.red)
} else {
    files.forEach(file => {
        fileSave(path.join(packagePath, file.filename))
            .write(file.content, 'utf8')
            .end('\n')
    })
    console.log(colors.green(`\n${ComponentName} component is created!\n`))
}
