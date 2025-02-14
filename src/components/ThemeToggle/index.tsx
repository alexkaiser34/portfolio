import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import './styles.css';

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.div 
            className="theme-toggle-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <button 
                className={`theme-toggle-button ${theme}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <motion.div 
                    className="slider"
                    animate={{ x: theme === 'dark' ? 0 : 26 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <Moon className="moon-icon" />
                    <Sun className="sun-icon" />
                </motion.div>
            </button>
        </motion.div>
    );
}

export default ThemeToggle; 