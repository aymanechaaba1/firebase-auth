export default function User({ uid, displayName, email, photoURL }) {
  return `
    <div class="hidden" data-uid="${uid}"></div>
    <div class="flex-1">
      <h1 class="text-2xl">Welcome, ${displayName}!</h1>
      <p class="text-gray-600">${email}</p>
    </div>
    <div class="flex items-center gap-5">
    <button
      class="btn-logout bg-red-500 space-x-3 rounded-md py-2 px-5 text-white"
    >
      Sign Out
    </button>
      <img src="${photoURL}" class="w-12 h-12 object-cover rounded-full" alt="" />
    </div>
  `;
}
