export default function User({ displayName, email, photoURL, uid }) {
  return `
    <div class="hidden" data-uid="${uid}"></div>
    <div class="flex-1">
      <h1 class="text-2xl">Welcome, ${displayName}!</h1>
      <p class="text-gray-600">${email}</p>
    </div>
    <div class="flex items-center gap-5">
      <img src="${photoURL}" class="w-12 h-12 object-cover rounded-full" alt="" />
    </div>
  `;
}