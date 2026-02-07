export default function ActionButton({
  label,
  onClick,
}: Readonly<{
  label: string;
  onClick: () => void;
}>) {
  return (
    <button
      className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-300 cursor-pointer min-w-60 rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
