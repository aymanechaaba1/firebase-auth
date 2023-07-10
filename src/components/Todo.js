export default function Todo({ id, todo, timestamp }) {
  const date = new Intl.DateTimeFormat(navigator.location, {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  }).format(new Date(timestamp));

  return `
    <div class="todo rounded-lg border py-2 px-5" data-id="${id}">
      <p>${todo}</p>
      <small>${date}</small>
    </div>
  `;
}
