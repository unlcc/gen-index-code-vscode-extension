import { writeFile } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

export async function genFile(dir: string) {
    const tsContent = 
    "import { Vue, Component } from 'vue-property-decorator'\n" + 
    "@Component({\n" +
    "  components: {},\n" +
    "  props: {},\n" +
    "  mixins: [],\n" +
    "})\n" +
    "export default class className extends Vue {\n" +
    "  created() {}\n" +
    "\n" +
    "  mounted() {}\n" +
    "}\n";

    const vueContent = 
    `<template>\n` +
    `  <div class="template-page">\n` +
    `    template-page\n` +
    ` </div>\n` +
    `</template>\n` +
    `\n` +
    `<script src="./index.ts"></script>\n` +
    `<style lang="sass" scoped src='./index.scss'></style>\n`


    await promisify(writeFile)(join(dir, 'index.ts'), tsContent);
    await promisify(writeFile)(join(dir, 'index.vue'), vueContent);
    await promisify(writeFile)(join(dir, 'index.scss'), ".template-page{}");
}
