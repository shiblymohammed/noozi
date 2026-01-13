import React, { useState } from 'react';

type FontInfo = {
  key: string;
  name: string;
  family: string; // CSS font-family string
  weights: number[]; // available demo weights
  supportsItalic?: boolean;
  description?: string;
};

const FONTS: FontInfo[] = [
  {
    key: 'poppins',
    name: 'Poppins',
    family: "'Poppins', system-ui, -apple-system, sans-serif",
    weights: [100, 300, 400, 600, 800, 900],
    supportsItalic: true,
    description: 'Versatile geometric sans-serif, great for body and headlines.'
  },
  {
    key: 'paytone',
    name: 'Paytone One',
    family: "'Paytone One', system-ui, -apple-system, sans-serif",
    weights: [400],
    description: 'Bold display font with strong personality for titles.'
  },
  {
    key: 'inter',
    name: 'Inter',
    family: "'Inter', system-ui, -apple-system, sans-serif",
    weights: [100, 300, 400, 600, 800, 900],
    supportsItalic: true,
    description: 'Highly readable UI font, optimized for screens.'
  },
  {
    key: 'charm',
    name: 'Charm',
    family: "'Charm', cursive, system-ui, sans-serif",
    weights: [400, 700],
    description: 'Elegant script for decorative headings and accents.'
  }
];

const DEFAULT_TEXT = 'The quick brown fox jumps over the lazy dog.';

const FontSection: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<FontInfo>(FONTS[0]);
  const [previewText, setPreviewText] = useState<string>(DEFAULT_TEXT);
  const [italic, setItalic] = useState<boolean>(false);
  const [weight, setWeight] = useState<number>(selectedFont.weights[2] ?? selectedFont.weights[0]);

  const onSelectFont = (font: FontInfo) => {
    setSelectedFont(font);
    setItalic(false);
    setWeight(font.weights[2] ?? font.weights[0]);
  };

  return (
    <section className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Font Showcase</h2>
          <p className="mt-3 text-gray-600">Preview our available typefaces and pick what suits your design.</p>
        </div>

        {/* Interactive preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <span className="text-sm text-gray-500">Selected font</span>
              <div className="text-lg font-semibold text-gray-900">{selectedFont.name}</div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {/* Weight selector */}
              <label className="text-sm text-gray-700">Weight:</label>
              <select
                className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              >
                {selectedFont.weights.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>

              {/* Italic toggle */}
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded"
                  checked={italic}
                  disabled={!selectedFont.supportsItalic}
                  onChange={(e) => setItalic(e.target.checked)}
                />
                Italic {selectedFont.supportsItalic ? '' : '(N/A)'}
              </label>
            </div>
          </div>

          <div
            className="rounded-lg p-6 border border-gray-300 bg-gray-50"
            style={{ fontFamily: selectedFont.family, fontWeight: weight as any, fontStyle: italic ? 'italic' : 'normal' }}
          >
            <div className="text-xl md:text-2xl text-gray-900 mb-4">{selectedFont.name} preview</div>
            <input
              type="text"
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900"
              placeholder={DEFAULT_TEXT}
            />

            <div className="mt-4 text-2xl md:text-3xl text-gray-900">
              {previewText || DEFAULT_TEXT}
            </div>
          </div>
        </div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FONTS.map((font) => (
            <div key={font.key} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{font.name}</div>
                  {font.description && (
                    <p className="text-sm text-gray-600 mt-1">{font.description}</p>
                  )}
                </div>
                <button
                  className={`px-3 py-1 rounded-md text-sm font-medium border ${selectedFont.key === font.key ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-emerald-700 border-emerald-600'}`}
                  onClick={() => onSelectFont(font)}
                >
                  {selectedFont.key === font.key ? 'Selected' : 'Select'}
                </button>
              </div>

              <div className="mt-4 space-y-3" style={{ fontFamily: font.family }}>
                <div className="text-xl text-gray-900" style={{ fontWeight: (font.weights.includes(400) ? 400 : font.weights[0]) as any }}>Aa Bb Cc</div>
                {/* Show a couple of weights where applicable */}
                {font.weights.slice(0, 3).map((w) => (
                  <div key={w} className="text-gray-800" style={{ fontWeight: w as any }}>
                    <span className="text-xs text-gray-500 mr-2">{w}</span>
                    The quick brown fox jumps over the lazy dog.
                  </div>
                ))}
                {font.supportsItalic && (
                  <div className="text-gray-800 italic">
                    <span className="text-xs text-gray-500 mr-2">italic</span>
                    The quick brown fox jumps over the lazy dog.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Tip: Use the controls above to compare weights and italics.
        </div>
      </div>
    </section>
  );
};

export default FontSection;