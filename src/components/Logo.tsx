export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Инженер по автоматизации" role="img">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#EEBBC3" fillOpacity="0.2"/>
        <path d="M14 6L20 10V18L14 22L8 18V10L14 6Z" stroke="#EEBBC3" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="3" fill="#EEBBC3"/>
        <path d="M14 6V11M14 17V22M8 10L12.5 12.5M15.5 15.5L20 18M8 18L12.5 15.5M15.5 12.5L20 10" stroke="#EEBBC3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span className="text-lg font-bold text-foreground">АвтоИнженер</span>
    </div>
  )
}
