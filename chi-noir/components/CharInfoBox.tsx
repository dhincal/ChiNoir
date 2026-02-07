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
}) {
  return (
    <div
      className={`bg-gray-800 bg-opacity-75 rounded-lg p-4 w-full max-w-md ${className}`}
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
      </ul>
    </div>
  );
}
