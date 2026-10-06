import { vi } from "vitest";
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// <Head> needs the helmet provider that vite-react-ssg sets up at runtime.
// Head tags are checked in the built HTML, not in unit tests.
vi.mock("vite-react-ssg", () => ({ Head: () => null }));
