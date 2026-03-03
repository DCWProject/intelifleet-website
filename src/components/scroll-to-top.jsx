import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Automatically scrolls the window to the top (0, 0) whenever the route path changes.
 * This is essential for single-page applications (SPAs) to mimic standard browser behavior.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Use "instant" to avoid seeing the scroll animation on every page load
        });
    }, [pathname]);

    return null;
}
