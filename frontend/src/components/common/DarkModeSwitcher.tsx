interface DarkModeSwitcherProps {
    isDarkMode: boolean;
    onToggle: () => void;
}

export default function DarkModeSwitcher({ isDarkMode, onToggle }: DarkModeSwitcherProps) {
    return (
        <div 
            onClick={onToggle}
            className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10"
        >
            <div className="mr-4 text-slate-600 dark:text-slate-200">Dark Mode</div>
            <div className={`dark-mode-switcher__toggle ${isDarkMode ? 'dark-mode-switcher__toggle--active' : ''} border`}></div>
        </div>
    );
}