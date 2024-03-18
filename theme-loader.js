const html = document.getElementById("$root")
let curr = 0
const key = "theme"
const themes = ["rust-navy", "zf-honey"]
for (let i = 0; i < themes.length; ++i) {
  if (html.classList.contains(themes[i])) {
    curr = i
    break
  }
}
let stored_str = localStorage.getItem(key)

if (stored_str != undefined && Number.parseInt(stored_str) < themes.length) {
  let stored_idx = Number.parseInt(stored_str)

  html?.classList.toggle(themes[curr])
  html?.classList.toggle(themes[stored_idx])
}
