import React, { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, FileArchive, Terminal, Sparkles } from 'lucide-react';

interface DownloadCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadCodeModal: React.FC<DownloadCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const downloadFilename = 'rowshanara-portfolio-source-code.zip';
  const directDownloadUrl = `${window.location.origin}/portfolio-code.zip`;

  const handleBlobDownload = async () => {
    try {
      setDownloading(true);
      const res = await fetch('/portfolio-code.zip');
      if (!res.ok) throw new Error('Fetch failed');
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = blobUrl;
      tempLink.download = downloadFilename;
      document.body.appendChild(tempLink);
      tempLink.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(tempLink);
      }, 500);
    } catch (e) {
      console.log('Blob download fallback:', e);
      // Fallback: open in new tab
      window.open('/portfolio-code.zip', '_blank');
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directDownloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-zinc-900 rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 px-6 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-50 dark:bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <FileArchive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                Download Source Code
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Complete React + TypeScript + Tailwind CSS Project
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          {/* File details card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-900 dark:bg-zinc-700 text-white flex items-center justify-center text-xs font-bold">
                ZIP
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  rowshanara-portfolio-source-code.zip
                </p>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400">
                  Size: 11 MB · Includes vercel.json & all assets
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              Vercel Ready
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3">
            {/* Direct Instant Download */}
            <button
              onClick={handleBlobDownload}
              disabled={downloading}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
            >
              {downloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Preparing Download...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download ZIP (Browser Direct)</span>
                </>
              )}
            </button>

            {/* Open in New Tab (Bypasses iframe download restriction) */}
            <a
              href="/portfolio-code.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Open Download in New Tab</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Copy Direct Link */}
            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Direct Link Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Direct Download URL</span>
                </>
              )}
            </button>
          </div>

          {/* Explanation if download is blocked by iframe */}
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300">
            <p className="font-semibold mb-1">
              💡 ব্রাউজার আইফ্রেমের কারণে ডাউনলোড না হলে:
            </p>
            <p className="text-[11px] leading-relaxed text-amber-700 dark:text-amber-400">
              ওপরের <strong>"Open Download in New Tab"</strong> বাটনে ক্লিক করুন অথবা <strong>"Copy Direct Download URL"</strong> কপি করে আপনার ব্রাউজারের অ্যাড্রেস বারে পেস্ট করলেই সাথে সাথে ফাইলটি ডাউনলোড হয়ে যাবে।
            </p>
          </div>

          {/* How to run locally instructions */}
          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
            <p className="font-semibold text-slate-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>How to run on your computer:</span>
            </p>
            <div className="bg-slate-900 text-emerald-400 font-mono text-[11px] p-3 rounded-xl space-y-1">
              <p># 1. Unzip the file, open terminal inside folder</p>
              <p>npm install</p>
              <p># 2. Start local server</p>
              <p>npm run dev</p>
              <p># 3. Deploy to Vercel (optional)</p>
              <p>vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
