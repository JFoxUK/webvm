const color = "\x1b[1;35m";
const normal = "\x1b[0m";
export const introMessage = [
    "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| WebVM is a virtual Linux environment running in the browser via WebAssembly |",
	"|                                                                             |",
	"| WebVM is powered by the CheerpX virtualization engine, which enables safe,  |",
	"| sandboxed client-side execution of x86 binaries, fully client-side          |",
	"|                                                                             |",
	"| CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based  |",
	"| file system, and a Linux syscall emulator                                   |",
	"|                                                                             |",
	"| [News] Integrating Claude Computer Use in WebVM!                            |",
	"|                                                                             |",
	"| " + underline + "https://labs.leaningtech.com/blog/webvm-claude" + normal + "                              |",
	"|                                                                             |",
	"| [7 - 14 April] WebVM Hackathon II is live! Join to win 500£!                |",
	"|                                                                             |",
	"| " + underline + "https://cheerpx.io/hackathon" + normal + "                                                |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
    "",
    "",
    "                                  __,='`````'=/__",
    "                                  '//  (o) \\(o) \\ `",
    "                                  //|    ,_)   (`\\   _,-,",
    "                                 ,-~~~\\ `'===' /-,   '-`_,-",
    "                                /      `----'    `\\  \\```` \\__",
    "                               ,-`                  ,  \\ ,.-\\  \\",
    "                              /     ,              \\,-`\\`_,-`\\,..--'",
    "                             ,`   ,/,              ,>   )    \\--`````\\",
    "                             (     `\\---'` `-,-'`_,<    \\    \\_,.--'`",
    "                              `.     `--. _,-'`_,-`  |    \\",
    "                               [`-.___  <`_,-'`------(    /",
    "                               (`` _,-\\  \\ --`````````|--`",
    "                                >-`_,-`\\,-` ,        |",
    "                               <`_,'    ,  /\\        /",
    "                                `  \\/\\,-/ `/  \\/`\\_/V\\_/",
    "                                  ( ._. )    ( .__. )",
    "                                  |     |    |     |",
    "                                   \\,---_|    |_---./",
    "                                   ooOO(_)    (_)OOoo",
    "",
    color + "              WELCOME TO THE LINUX DUNGEON GAME" + normal,
    "",
    "",
    color + + underline + "          TAKE A LOOK IN YOUR HOME DIR" + normal,
    color + + underline + "EACH ROOM REQUIRES YOU TO USE LINUX COMMANDS TO FIND A KEY" + normal,
    color + + underline + "TRY STARTING WITH ls - GOOD LUCK ON YOUR ADVENTURE" + normal,
];
export const errorMessage = [
    color + "CheerpX could not start" + normal,
    "",
    "Check the DevTools console for more information",
    "",
    "CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
    "",
    "Give it a try from a desktop version / another browser!",
    "",
    "CheerpX internal error message is:",
    ""
];
export const unexpectedErrorMessage = [
    color + "WebVM encountered an unexpected error" + normal,
    "",
    "Check the DevTools console for further information",
    "",
    "Please consider reporting a bug!",
    "",
    "CheerpX internal error message is:",
    ""
];