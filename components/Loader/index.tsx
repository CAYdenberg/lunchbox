//   _                 _
//  | |   ___  __ _ __| |___ _ _
//  | |__/ _ \/ _` / _` / -_) '_|
//  |____\___/\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Loader
 * *Atom*
 *
 * This module contains the render function for the `<Loader />` component.
 *
 * @module
 */
import setup, { iLoader } from './setup.ts';
import IconLoader from '../Icon/IconLoader.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Loader/ >`](/x/lunchbox/components/Loader/setup.ts?s=iLoader)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Loader />` component.
 */
export default function (props: Partial<iLoader>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(props);

  return (
    <div class={c.controller}>
      <div class={c.container}>
        <IconLoader size='md' />
      </div>
      <div class={c.children} hidden>
        {children}
      </div>
    </div>
  );
}
