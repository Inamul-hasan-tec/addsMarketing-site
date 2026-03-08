import { X } from 'lucide-react';

export default function PolicyModal({ isOpen, title, content, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-[9998]"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <div
        className="fixed top-1/2 left-1/2 z-[9999] w-full max-w-2xl px-4"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-h-[85vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
