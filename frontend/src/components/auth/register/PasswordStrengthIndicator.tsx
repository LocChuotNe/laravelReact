interface PasswordStrengthIndicatorProps {
    strength: number;
}

export default function PasswordStrengthIndicator({ strength }: PasswordStrengthIndicatorProps) {
    return (
        <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
            <div className={`col-span-3 h-full rounded ${strength >= 1 ? 'bg-success' : 'bg-slate-100 dark:bg-darkmode-800'}`}></div>
            <div className={`col-span-3 h-full rounded ${strength >= 2 ? 'bg-success' : 'bg-slate-100 dark:bg-darkmode-800'}`}></div>
            <div className={`col-span-3 h-full rounded ${strength >= 3 ? 'bg-success' : 'bg-slate-100 dark:bg-darkmode-800'}`}></div>
            <div className={`col-span-3 h-full rounded ${strength >= 4 ? 'bg-success' : 'bg-slate-100 dark:bg-darkmode-800'}`}></div>
        </div>
    );
}