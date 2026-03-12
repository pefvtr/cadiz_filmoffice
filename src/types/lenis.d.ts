import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis__?: InstanceType<typeof Lenis>;
  }
}

export {};
