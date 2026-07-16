const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap';

const variants = {
  primary: 'bg-ember text-white hover:bg-ember-dark hover:-translate-y-px shadow-sm hover:shadow-md',
  secondary: 'border border-line text-ink hover:border-stone-soft bg-white/60 hover:bg-white',
  ghost: 'text-stone hover:text-ink',
};

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const Component = as;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
