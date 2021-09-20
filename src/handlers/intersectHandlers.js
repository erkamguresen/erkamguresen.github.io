export function handleIntersect(entries, observer) {
  console.log('handleIntersect', entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.body.classList.add('text-danger');
    } else {
      document.body.classList.remove('text-danger');
    }
  });
}
