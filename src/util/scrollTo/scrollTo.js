export function scrollToElement(targetElement, duration, offset) {
  if (!targetElement) return;
  console.log("a targetElement", targetElement.offsetHeight);
  console.log("b targetElement", targetElement.offsetTop);

  const targetPosition = targetElement.offsetTop - offset;
  console.log("targetPosition", targetPosition);
  const startPosition = document.documentElement.scrollTop;
  const distance = targetPosition - startPosition;
  let startTime;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const scrollY = easeInOutCubic(progress, startPosition, distance, duration);
    window.scrollTo(0, scrollY);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
