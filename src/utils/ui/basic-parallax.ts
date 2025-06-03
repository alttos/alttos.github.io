export default function basicParallax(
  element: HTMLElement,
  speed: number
): void {
  if (!element) {
    return;
  }

  const onScroll = () => {
    const offset = window.scrollY * speed;
    element.style.transform = `translateY(${offset}px)`;
  };

  window.addEventListener('scroll', onScroll);
}
