const initialResources = [
  {
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework for rapid UI development.",
    category: "Styling",
    url: "https://tailwindcss.com",
  },
  {
    title: "MDN Web Docs",
    desc: "Comprehensive resources for standard web technologies.",
    category: "Reference",
    url: "https://developer.mozilla.org",
  },
  {
    title: "Can I use...",
    desc: "Browser support tables for modern HTML5, CSS3, and JavaScript APIs.",
    category: "Compatibility",
    url: "https://caniuse.com",
  },
];

function renderResources(items) {
  const container = document.getElementById("resource-list");
  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/60 transition-all";
    card.innerHTML = `
      <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 mb-3 border border-indigo-900">
        ${item.category}
      </span>
      <h3 class="text-lg font-semibold text-white">${item.title}</h3>
      <p class="text-sm text-slate-400 mt-2 mb-4 leading-relaxed">${item.desc}</p>
      <a href="${item.url}" target="_blank" rel="noreferrer" class="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300">
        Open Resource &rarr;
      </a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderResources(initialResources);
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = initialResources.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.desc.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
  renderResources(filtered);
});
