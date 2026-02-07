export default function CharInfoBox({
  className,
  name,
  description,
  occupancy,
  gunLicense,
  height,
  weight,
  alcoholLevel,
  salary,
  pregnant,
  married,
}: {
  className?: string;
  name: string;
  description: string;
  occupancy: string;
  gunLicense: boolean;
  height: string;
  weight: string;
  alcoholLevel: string;
  salary: string;
  pregnant?: boolean;
  married: boolean;
}) {
  return (
    <div
      className={`tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 p-4 w-full max-w-md ${className}`}
    >
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-300">{description}</p>
      <ul className="mt-4 text-gray-300">
        <li>
          <strong>Occupancy:</strong> {occupancy}
        </li>
        <li>
          <strong>Gun License:</strong> {gunLicense ? "Yes" : "No"}
        </li>
        <li>
          <strong>Height:</strong> {height}
        </li>
        <li>
          <strong>Weight:</strong> {weight}
        </li>
        <li>
          <strong>Alcohol Level:</strong> {alcoholLevel}
        </li>
        <li>
          <strong>Salary:</strong> {salary}
        </li>
        {pregnant !== undefined && (
          <li>
            <strong>Pregnant:</strong> {pregnant ? "Yes" : "No"}
          </li>
        )}
        <li>
          <strong>Married:</strong> {married ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  );
}
