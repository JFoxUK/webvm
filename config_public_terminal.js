// The root filesystem location
export const diskImageUrl = "https://jfoxuk.github.io/webvm/debian_mini.ext2";

// The root filesystem backend type
export const diskImageType = "cloud";

// Print an introduction message about the technology
export const printIntro = true;

// Is a graphical display needed
export const needsDisplay = false;

// Executable full path (Required)
export const cmd = "/bin/bash";

// Arguments, as an array (Required)
export const args = ["--login"];

// Optional extra parameters
export const opts = {
  // Environment variables
  env: [
    "HOME=/game",
    "TERM=xterm",
    "USER=user",
    "SHELL=/bin/bash",
    "EDITOR=vim",
    "LANG=en_US.UTF-8",
    "LC_ALL=C"
  ],
  // Current working directory
  cwd: "/game",
  // User id
  uid: 1000,
  // Group id
  gid: 1000
};
