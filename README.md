# 🤙 LINUX DUNGEON GAME — A Terminal-Based Puzzle Adventure

**Welcome to the Linux Dungeon Game!**  
This is a fantasy-themed, terminal-only, in-browser Linux adventure built on top of [WebVM](https://webvm.io) and powered by CheerpX virtualization.

> 🥉 Solve puzzles using actual Linux commands like `ls`, `cd`, `cat`, `vim`, `grep`, `strings`, and more.  
> 🔐 Each room is locked inside a password-protected `.zip` file. You must find clues, keys, and hidden files to unlock the next room.  
> 👹 Explore a dungeon made of folders, scrolls, and mystery files.

---

## 🔑 Getting Started

1. Visit: `https://jfoxuk.github.io/webvm/`
2. Wait for the virtual machine to boot.
3. When the terminal appears, you'll be greeted with ASCII art and instructions.
4. Start your journey:

   ```bash
   cd room1
   cat note.txt
   ```

5. Unlock each room by finding the secret key within the previous one.

---

## ⚔️ Gameplay Highlights

| Room | Challenge Type                      | Skills Tested                      |
|------|-------------------------------------|------------------------------------|
| 1    | Basic shell commands                | `ls`, `cd`, `cat`                  |
| 2    | Hidden paths and encoded clues      | `find`, `grep`, base64             |
| 3    | Config file editing                 | `vim`, `grep`                      |
| 4    | Cipher decoding                     | `base64`, logic                    |
| 5    | Inspecting binaries                 | `strings`, terminal curiosity      |

---

## 💡 Built With

This game is powered by the incredible work from the creators of WebVM and CheerpX.

---

# 📦 Based on WebVM by Leaning Technologies

[![Deploy](https://github.com/JFoxUK/webvm/actions/workflows/deploy.yml/badge.svg)](https://github.com/JFoxUK/webvm/actions/workflows/deploy.yml)  
[![Issues](https://img.shields.io/github/issues/leaningtech/webvm)](https://github.com/leaningtech/webvm/issues)  
[![Discord](https://img.shields.io/discord/988743885121548329?logo=discord)](https://discord.gg/yWRr2YnD9c)

This project is built on top of [WebVM](https://webvm.io), a serverless, client-side Linux virtual machine powered by [CheerpX](https://cheerpx.io), running fully in the browser.

> WebVM uses an x86-to-WebAssembly JIT compiler, a Linux syscall emulator, and a block-based virtual file system — all in your browser.

---

## 📋 WebVM Developer Resources

- [WebVM: Linux Virtualization in WebAssembly](https://leaningtech.com/webvm-virtual-machine-with-networking-via-tailscale/)
- [Mini.WebVM Deployment Guide](https://mini.webvm.io)
- [CheerpX Docs and Licensing](https://cheerpx.io/docs/)
- [Crafting the Impossible (JSNation Talk)](https://www.youtube.com/watch?v=VqrbVycTXmw)

---

## 🙏 Credits

- **Linux Dungeon Game** by [@JFoxUK](https://github.com/JFoxUK)
- Built on [WebVM](https://github.com/leaningtech/webvm) by [Leaning Technologies](https://leaningtech.com)
- Terminal UI: [xterm.js](https://xtermjs.org/)
- Networking via: [Tailscale](https://tailscale.com)

---

## 📜 License

Linux Dungeon Game is licensed under the **Apache License 2.0**.  
All CheerpX-based technology and WebVM code remains © Leaning Technologies.

> For commercial use or custom hosting of CheerpX, please contact Leaning Technologies: [sales@leaningtech.com](mailto:sales@leaningtech.com)
