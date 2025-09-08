
import  calculate  from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handlesButtonsPress, handlesClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handlesButtonsPress)
})

document.getElementById("clear").addEventListener("click", handlesClearButton)

document.getElementById('input').addEventListener("keydown", handleTyping)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click" , copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)