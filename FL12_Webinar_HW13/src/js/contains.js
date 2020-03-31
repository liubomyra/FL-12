export const contains = (selector, text) => {
  const elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element) {
    return RegExp(text).test(element.textContent);
  });
};
