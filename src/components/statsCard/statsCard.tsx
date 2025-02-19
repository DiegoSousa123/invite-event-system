interface StatsCardProps extends React.ComponentProps<"div"> {}
export function StatsCard(props: StatsCardProps) {
  return (
    <div
      className="relative flex flex-col items-center bg-gray-700 border border-gray-600 rounded-xl px-4 py-7 gap-1"
      {...props}
    ></div>
  );
}

interface StatsDataProps extends React.ComponentProps<"span"> {}

export function StatsData(props: StatsDataProps) {
  return (
    <span
      className="text-gray-200 font-heading text-2xl font-semibold leading-none"
      {...props}
    ></span>
  );
}

interface StatsDescriptionProps extends React.ComponentProps<"span"> {}

export function StatsDescription(props: StatsDescriptionProps) {
  return (
    <span
      className="text-gray-200 text-sm leading-none text-center"
      {...props}
    ></span>
  );
}
