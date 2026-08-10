type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/nelgro-logo.png"
      alt="NELGRO"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
