type ServiceCardShapeProps = {
  id: string;
  mirrored?: boolean;
};

export function ServiceCardShape({
  id,
  mirrored = false,
}: ServiceCardShapeProps) {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path
            d={
              mirrored
                ? `
        M 0.08 0
        H 0.52

        C 0.66 0
          0.78 0.018
          0.87 0.055

        C 0.96 0.095
          1 0.135
          1 0.19

        V 0.96

        C 1 0.985
          0.97 1
          0.92 1

        H 0.08

        C 0.03 1
          0 0.985
          0 0.96

        V 0.04

        C 0 0.015
          0.03 0
          0.08 0

        Z
      `
                : `
        M 0.48 0
        H 0.92

        C 0.97 0
          1 0.015
          1 0.04

        V 0.96

        C 1 0.985
          0.97 1
          0.92 1

        H 0.08

        C 0.03 1
          0 0.985
          0 0.96

        V 0.19

        C 0 0.135
          0.04 0.095
          0.13 0.055

        C 0.22 0.018
          0.34 0
          0.48 0

        Z
      `
            }
          />
        </clipPath>
      </defs>
    </svg>
  );
}
