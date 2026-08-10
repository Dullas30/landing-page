type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  const classes = ["block h-7 w-auto max-w-[7.5rem] object-contain", className]
    .filter(Boolean)
    .join(" ");

  return (
    <img src="/nelgro-logo.png" alt="NELGRO" className={classes} loading="eager" decoding="async" />
  );
}
