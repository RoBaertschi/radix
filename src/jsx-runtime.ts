import { renderJSX } from "./rendering.ts";
import { JSXChildren, JSXNode, RenderedNode } from "./types.ts";

// deno-lint-ignore no-namespace
namespace JSX {
    export type HTMLAttributes =
        & Record<string, JSXNode | undefined>
        & JSXChildren;
    export type InstrinsicElements = Record<string, HTMLAttributes>;

    export type Element = RenderedNode;
}

export type { JSX };

export const jsx = renderJSX;
export const jsxs = jsx;
export const jsxDEV = jsx;
