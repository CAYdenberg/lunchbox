//   __  __          _      _                           _
//  |  \/  |__ _ _ _| |____| |_____ __ ___ _    ___ ___| |_ _  _ _ __
//  | |\/| / _` | '_| / / _` / _ \ V  V / ' \  (_-</ -_)  _| || | '_ \
//  |_|  |_\__,_|_| |_\_\__,_\___/\_/\_/|_||_| /__/\___|\__|\_,_| .__/
//                                                              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Button />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { render, RenderOptions } from '../../src/markdown.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Button />` component. */
export type iMarkdown = iComponent<HTMLDivElement> & {
  markdownContent: string;
  renderOptions: RenderOptions;
};

/** Default values of the `<Button />` component's props. */
const defaults: iMarkdown = {
  markdownContent: '',
  renderOptions: {
    allowIframes: true,
    allowMath: true,
    customClasses: {
      code: [styles.code_wrapper],
      codespan: [styles.code],
      link: [styles.link],
      hr: [styles.separator],
    },
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Button />` component. */
export default (props: Partial<iMarkdown>) => {
  const p = apDef<iMarkdown>(defaults, props);

  const classes = part({
    markdown: o([styles.markdown, styles.syntax], { ...p }),
  });

  p.markdownContent = render(p.markdownContent, p.renderOptions);

  delete p.class;
  return { c: classes, ...p };
};
