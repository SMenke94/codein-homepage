enum Breakpoints {
  xxs = 0,
  xs = 360,
  s = 576,
  m = 768,
  l = 992,
  xl = 1200,
  xxl = 1500
}

export const cssMinBreakpoint = (breakpoint: Breakpoints): string => `@media(min-width: ${breakpoint.valueOf()}px)`;
export const cssMaxBreakpoint = (breakpoint: Breakpoints): string => `@media(max-width: ${breakpoint.valueOf()}px)`;
export default Breakpoints;