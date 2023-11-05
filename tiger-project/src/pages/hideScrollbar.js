// Function to hide the scrollbar on the body element
export function hideScrollbar() {
    document.body.style.overflow = 'hidden';
}

// Function to restore the scrollbar on the body element
export function restoreScrollbar() {
    document.body.style.overflow = 'auto';
}