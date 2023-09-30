import { css } from 'resin';

export const transition = {
  interaction: {
    outline: css`
      outline: 0;
      transition: outline 0.1s ease-in-out;

      &:focus,
      &:hover {
        outline: 2px solid var(--clr-txt-base);
        outline-offset: 2px;
        border-radius: var(--s-quarter);
      }
    `,
  },
};

export const inputStyles = {
  part: {
    input: css`
      border-radius: var(--s-quarter);
      border: 0;
      outline: 0;
      background-color: var(--clr-bg-personality);

      &:hover,
      &:focus,
      &:focus-visible,
      &:focus-within {
        background-color: var(--clr-bg-personality-30);
      }
    `,
    bgError: css`
      background-color: var(--clr-bg-error);
      
      &:hover,
      &:focus,
      &:focus-visible,
      &:focus-within {
        background-color: var(--clr-bg-error-50);
      }
      `,
    container: css`
      max-width: 24rem;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &.lbx-input_maxwidth {
        max-width: 100%;
      }
    `,
    required: css`
      padding-left: var(--s-quarter);
    `,
    error: css`
      position: relative;
      bottom: var(--s-eighth);
      color: var(--clr-txt-error);
    `,
    label: css`
      display: flex;
    `,
  },
  kind: {
    box: css`
      .lbx-input,
      .lbx-textarea,
      .lbx-select {
        position: relative;
        right: var(--s-half);
        bottom: 1px;
        box-sizing: border-box;
        font: var(--txt-paragraph) var(--font-base);
      }

      .lbx-input,
      .lbx-textarea {
        padding: 1px var(--s-half);
    
        &::placeholder {
          color: var(--clr-txt-base);
          opacity: 0.75;
        }
      }
    
      .lbx-select {
        padding: 0 var(--s-half);
        height: var(--s-one-and-half);
        @include appearance-none;
    
        &:disabled {
          opacity: 1;
        }
      }

      .lbx-input-label {
        flex-direction: column;
      }
    `,
    date: css`
      .lbx-input {
        padding: 0 var(--s-half);
        align-items: center;
        height: 26px;
        -webkit-text-fill-color: var(--clr-txt-base);
        position: relative;
        right: var(--s-half);
        bottom: 1px;
        box-sizing: border-box;
        font: var(--txt-paragraph) var(--font-base);
      
        &::-webkit-datetime-edit {
          font: var(--txt-paragraph) var(--font-base);
          padding: 0;
          height: 21px;
        }
      }
      
      .lbx-input-label {
        flex-direction: column;
      }
    `,
    bool: css`
      padding: var(--s-eighth) var(--s-three-eights);
      border-radius: var(--s-quarter);
    
      &:hover {
        background-color: var(--clr-bg-panel-35);
      }

      &:has(.lbx-input[type=checkbox]:focus) {
        background-color: var(--clr-bg-panel-50);
      }

      .lbx-input {
        width: var(--s-single);
        height: var(--s-single);
        margin-right: var(--s-half);
        display: grid;
        place-content: center;
    
        &[type='radio'] {
          border-radius: 50%;
        }
    
        &:checked::before {
          content: '●';
        }
      }
    
      .lbx-input-label {
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        width: max-content;
      }
    `,
    button: css`
      padding-bottom: var(--s-single);

      .lbx-input {
        padding: var(--s-quarter) var(--s-five-eights);
        border-radius: var(--s-quarter);
        cursor: pointer;
    
        &[type='image'] {
          height: var(--s-one-and-half);
        }
      }
    
      .lbx-input-label {
        flex-direction: column;
        width: max-content;
      }
    `,
  },
};

export const globalStyles = {
  cssReset: css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font: inherit;
    }

    html {
      color-scheme: dark light;
    }

    body {
      min-height: 100vh;
      background-color: var(--clr-bg-panel);
    }

    img,
    picture,
    svg,
    video {
      display: block;
      max-width: 100%;
    }

    input {
      all: unset;
    }

    button {
      border: none;
    }
  `,
  fonts: css`
    :root {
      --txt-small: 0.64rem / 1.5rem;
      --txt-paragraph: 1rem / 1.5rem;
      --txt-subheading: 1.5625rem / 3rem;
      --txt-heading: 2.44140625rem / 3rem;
      --txt-title: 3.0517578125rem / 4.5rem;
      --txt-display: 3.8146972656rem / 4.5rem;

      --font-mono: 'Fira Code', ui-monospace, monospace;
      --font-base: 'Figtree', sans-serif;
      --font-heading: 'Libre Caslon Text', serif;
    }

    .txt-small { 
      font: var(--txt-small) var(--font-base);
    }
    .txt-paragraph {
      font: var(--txt-paragraph) var(--font-base);
    }
    .txt-subheading {
      font: var(--txt-subheading) var(--font-base);
    }
    .txt-heading {
      font: var(--txt-heading) var(--font-heading);
    }
    .txt-title {
      font: var(--txt-title) var(--font-heading);
    }
    .txt-display {
      font: var(--txt-display) var(--font-heading);
    }
  `,
  sizes: css`
    :root {
      --s-eighth: 0.125rem;
      --s-quarter: 0.25rem;
      --s-three-eights: 0.375rem;
      --s-third: 0.3333333333rem;
      --s-half: 0.5rem;
      --s-five-eights: 0.625rem;
      --s-two-thirds: 0.6666666666rem;
      --s-three-quarters: 0.75rem;
      --s-seven-eights: 0.875rem;
      --s-single: 1rem;
      --s-one-and-half: 1.5rem;
      --s-double: 2rem;
      --s-triple: 3rem;
      --s-quadruple: 4rem;
      --s-fifteen: 15rem;
    }
  `,
};

export const themeStyles = {
  newspaper: css`
    :root {
      --clr-personality: #089969;
      --clr-bg-page: #3d3640;
      --clr-bg-panel: #241f26;
      --clr-txt-base: #eee6f2;
      --clr-txt-error: #fa96c8;
      --clr-bg-error: #573c4d;
      --clr-txt-personality: #7dc0af;
      --clr-bg-personality: #344747;
      --clr-bg-error-50: #fa96c880;
      --clr-bg-panel-50: #241f2680;
      --clr-bg-panel-35: #241f2659;
      --clr-bg-panel-15: #241f2626;
      --clr-bg-personality-60: #08996999;
      --clr-bg-personality-45: #08996973;
      --clr-bg-personality-30: #0899694d;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --clr-bg-page: #eee6f2;
        --clr-bg-panel: #ffffff;
        --clr-txt-base: #3d3640;
        --clr-txt-error: #66050d;
        --clr-bg-error: #dbc4c5;
        --clr-txt-personality: #2b584e;
        --clr-bg-personality: #c8d9db;
        --clr-bg-error-50: #66050d80;
        --clr-bg-panel-50: #ffffff80;
        --clr-bg-panel-35: #ffffff59;
        --clr-bg-panel-15: #ffffff26;
        --clr-bg-personality-60: #08996999;
        --clr-bg-personality-45: #08996973;
        --clr-bg-personality-30: #0899694d;
      }
    }
  `,
};
