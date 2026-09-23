// Add a "Copy" button to every code block
document.querySelectorAll("pre").forEach((pre) => {
  const wrap = document.createElement("div");
  wrap.className = "code-block";
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "copy";
  btn.textContent = "Copy";
  btn.setAttribute("aria-label", "Copy code to clipboard");
  wrap.appendChild(btn);

  btn.addEventListener("click", async () => {
    const text = pre.innerText.replace(/\n$/, "");
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copied";
      btn.classList.add("done");
    } catch (err) {
      btn.textContent = "Press Ctrl+C";
    }
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.classList.remove("done");
    }, 1800);
  });
});

// Highlight the current section in the table of contents
const links = [...document.querySelectorAll(".toc a")];
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}
