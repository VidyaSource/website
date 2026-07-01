import type {DetailedHTMLProps, HTMLAttributes} from 'react';

// JSX typings for the Tailwind Plus Elements custom elements used in .tsx
// islands, plus the Invoker Commands API attributes (command / commandfor).
type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    popover?: string;
    anchor?: string;
    value?: string;
};

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'el-popover': ElementProps;
            'el-dialog': ElementProps;
            'el-disclosure': ElementProps;
            'el-autocomplete': ElementProps;
            'el-options': ElementProps;
            'el-option': ElementProps;
        }
    }

    interface ButtonHTMLAttributes<T> {
        command?: string;
        commandfor?: string;
    }
}
