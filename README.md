![example](bionify_example.gif)

Chrome extension to bionify selected text.

This is like https://bionic-reading.com/, but their Chrome extension is not presant to use, so I create this extension. But the algorithm is not as complex as the original one. This extension simply bionifies 60% of word length.

# How to use

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable Developer Mode (probably at the top right corner)
4. Click "Load unpacked" and choose the repository root directory
5. Open any website, highlight the text you want to bionify
6. Right click, choose "bionify", and boom!

# How to customize

Change the implementation of the function `bionifyWord` in `bionify.js` however you like, go back to `chrome://extensions/` and click the reload icon
