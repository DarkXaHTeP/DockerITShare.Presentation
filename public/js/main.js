Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'zoom',
    dependencies: [
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
    ]
});
