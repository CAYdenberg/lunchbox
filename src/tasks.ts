//   _____        _
//  |_   _|_ _ __| |__ ___
//    | |/ _` (_-< / /(_-<
//    |_|\__,_/__/_\_\/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains scripts that can can be run with the `deno task` command.
 * @module
 */

// =====================================================================================================
/**
 * This is the CLI entry point for `deno task` commands. It is built to be an anonymous immediately
 * invoked function expression (IIFE) to avoid polluting the namespace.
 */
(async () => {
  const [command, ..._args] = Deno.args;

  switch (command) {
    case 'init-generate': {
      await initGenerate();
      break;
    }

    case 'init-clean': {
      await initClean(
        'init.gen.ts',
        'examples/init/.vscode',
        'examples/init/deno.lock',
        'examples/init/node_modules',
        'examples/init/README.md',
        'examples/init/static/logo.svg',
        'examples/init/static/favicon.ico',
        'examples/init/routes/api',
        'examples/init/components',
        'examples/init/islands',
      );
      break;
    }

    default:
      console.error(
        'Unknown task.',
      );
      Deno.exit(1);
  }
})();

// =====================================================================================================
/**
 * A task that prepares the init code for distribution. For this, it reads a group of files and
 * directories and converts them into a single `init.gen.ts` file, which contains every file
 * converted to a string. This will later be used by the `init.ts` module to generate new projects.
 *
 * ```bash
 * deno task init:generate
 * ```
 */
export async function initGenerate() {
  const encoder = new TextEncoder();
  const out = await Deno.create('src/init.gen.ts');

  /** Converts a file to a constant string and writes it to output. */
  const fileToConstant = async (name: string, value: string) => {
    const content = `\nexport const ${name} = \`\n${
      value
        .replace(/\\/g, '\\\\')
        .replace(/\${/g, '\\${')
        .replace(/`/g, '\\`')
    }\n\`;\n`;
    await out.write(encoder.encode(content));
  };

  /** Converts a directory to a group of constants. */
  const directoryToConstants = async (dir: string) => {
    for await (const entry of Deno.readDir(dir)) {
      const path = `${dir}/${entry.name}`;

      if (entry.name === 'deno.lock') continue;

      if (entry.isDirectory) await directoryToConstants(path);
      else {
        await fileToConstant(
          path.split('.')[0].replace(/[\/]/g, '_').toUpperCase(),
          await Deno.readTextFile(path),
        );
      }
    }
  };

  const INIT_MODULE_COMMENTS = `
/*
|----------------------------------|
| DO NOT MANUALLY CHANGE THIS FILE |
|---------------------------------------------------------------|
| This module is generated by the 'deno task init:generate'     |
| command and contains all the initialization code for a new    |
| project converted to strings easy to access for the 'init.ts' |
| module.                                                       |
|---------------------------------------------------------------|
*/
  `;

  await out.write(encoder.encode(INIT_MODULE_COMMENTS));

  await fileToConstant('SRC_ATOMS', await Deno.readTextFile('src/atoms.tsx'));

  await directoryToConstants('src/molecules');
  await directoryToConstants('examples/init');

  // try {
  //   const res = await fetch('https://fresh.deno.dev/favicon.ico');
  //   const buf = await res.arrayBuffer();
  //   await Deno.writeFile('static/favicon.ico', new Uint8Array(buf));
  // } catch {
  // }
}

// =====================================================================================================
/**
 * This task cleans the `init.gen.ts` file and ignorable files in the `examples/init` directory.
 *
 * ```bash
 * deno task init:clean
 * ```
 */
export async function initClean(...files: string[]) {
  for (const file of files) {
    try {
      await Deno.remove(file, { recursive: true });
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        console.log(`Entity ${file} already removed.`);
      } else {
        console.error(error);
      }
    }
  }
}
