import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './styles.css';

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [slideDistance, setSlideDistance] = useState(28);

    useEffect(() => {
        const updateSlideDistance = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setSlideDistance(20);
            } else if (width <= 768) {
                setSlideDistance(24);
            } else {
                setSlideDistance(28);
            }
        };

        // Initial calculation
        updateSlideDistance();

        // Add event listener
        window.addEventListener('resize', updateSlideDistance);

        // Cleanup
        return () => window.removeEventListener('resize', updateSlideDistance);
    }, []);

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
                    animate={{ x: theme === 'dark' ? 0 : slideDistance }}
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