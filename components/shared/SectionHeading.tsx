type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-[60px] rounded-full bg-primary-light ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle ? (
        <p
          className={`mt-4 text-lg italic ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
