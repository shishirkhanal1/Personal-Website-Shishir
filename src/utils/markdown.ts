export function renderMarkdown(md: string): string {
  let html = md.trim();

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre class="my-6 p-4 rounded-xl bg-dark-950 border border-white/10 font-mono text-xs sm:text-sm text-cyan overflow-x-auto"><code>${escaped.trim()}</code></pre>`;
  });

  // Blockquotes
  html = html.replace(/^\> (.*?)$/gm, (match, text) => {
    return `<blockquote class="my-6 p-4 sm:p-5 rounded-2xl bg-dark-900 border-l-4 border-cyan text-slate-200 italic font-display text-base sm:text-lg leading-relaxed">${text}</blockquote>`;
  });

  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl sm:text-2xl font-display font-bold text-white mt-8 mb-3 tracking-tight">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl sm:text-3xl font-display font-extrabold text-white mt-12 mb-4 tracking-tight border-b border-white/10 pb-3">$1</h2>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-white/10" />');

  // Unordered Lists
  html = html.replace(/^[-*] (.*?)$/gm, '<li class="flex items-start gap-2.5 text-slate-300 my-1.5"><span class="text-cyan font-mono text-xs mt-1">▸</span><span>$1</span></li>');
  html = html.replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="my-4 space-y-1 pl-1">$1</ul>');
  // Clean duplicate wrapped uls
  html = html.replace(/<\/ul>\s*<ul class="my-4 space-y-1 pl-1">/g, '');

  // Bold & Italics
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-slate-200">$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan hover:underline font-medium inline-flex items-baseline gap-0.5">$1<span class="text-[10px]">↗</span></a>');

  // Paragraphs
  const blocks = html.split(/\n\s*\n/);
  const formattedBlocks = blocks.map((block) => {
    block = block.trim();
    if (!block) return '';
    if (
      block.startsWith('<h2') ||
      block.startsWith('<h3') ||
      block.startsWith('<blockquote') ||
      block.startsWith('<pre') ||
      block.startsWith('<ul') ||
      block.startsWith('<hr')
    ) {
      return block;
    }
    return `<p class="my-4 text-base sm:text-lg text-slate-300 leading-relaxed">${block}</p>`;
  });

  return formattedBlocks.join('\n');
}
