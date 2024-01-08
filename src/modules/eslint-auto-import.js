import { basename, resolve } from 'pathe';
import { useLogger, addTemplate, defineNuxtModule } from '@nuxt/kit';

/**
 * Generated file must be specified as `extends` in the eslint config.
 *
 * File: .eslintrc
 * {
 *   "extends": [
 *     "./.nuxt/.eslint.globals.json"
 *   ]
 * }
 */

export default defineNuxtModule({
  defaults: {
    filename: '.eslint.globals.json',
    global: [
      '$fetch',
      'useCloneDeep',
      'defineNuxtConfig',
      'definePageMeta',
      'defineI18nConfig'
    ]
  },
  setup(moduleOptions, nuxt) {
    const logger = useLogger('eslint-auto-import');

    const padding = ' '.repeat(4);
    const autoImports = {
      global: moduleOptions.global
    };

    nuxt.hook('imports:context', async context => {
      const imports = await context.getImports();
      imports.forEach(autoImport => {
        const list = autoImports[autoImport.from] || [];
        const name = autoImport.as
          ? autoImport.as?.toString()
          : autoImport.name.toString();
        autoImports[autoImport.from] = list.concat([name]);
      });
    });

    nuxt.hook('imports:extend', composableImport => {
      autoImports.composables = composableImport.map(autoImport => {
        if (autoImport.as) return autoImport?.as?.toString();
        return autoImport.name.toString();
      });
    });

    nuxt.hook('modules:done', () => {
      const filename = moduleOptions.filename;
      const outDir = basename(nuxt.options.buildDir);
      const fullPath = resolve(outDir, filename);

      const getContents = () => {
        let contents = '';
        contents += '{\n';
        contents += '  "globals": {';
        for (const autoImport in autoImports) {
          autoImports[String(autoImport)].forEach(imp => {
            contents += '\n' + `${padding}"${imp}": "readonly",`;
          });
        }
        contents = `${contents.slice(0, -1)}\n`;
        contents += '  }\n';
        contents += '}\n';

        return contents;
      };

      addTemplate({
        filename,
        getContents,
        write: true
      });

      logger.info(`Generate eslint global imports at \`${fullPath}\``);
    });
  }
});
