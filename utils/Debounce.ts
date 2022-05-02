export default function Debounce<Params extends any[]>(
  fn: (...args: Params) => any,
  ms: number
): (...args: Params) => void {
  console.log('debounce', fn, ms);
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
