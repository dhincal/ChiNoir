export default function ActionButton({
  label,
  onClick,
}: Readonly<{
  label: string;
  onClick: () => void;
}>) {
  return (
    <button
      className="cursor-pointer mb-5 px-8 py-3 w-64 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
