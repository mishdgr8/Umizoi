const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dzfrrcacc';
const PROD_URL = import.meta.env.VITE_PROD_URL || 'https://umizoi.pages.dev'; // Default to pages.dev if not specified

/**
 * Transforms a local asset path into a Cloudinary Fetch URL
 * @param {string} path - Local path starting with /assets
 * @param {object} options - Optional { width: number, height: number, crop: string }
 * @returns {string} - Cloudinary optimized URL
 */
export const getCloudinaryUrl = (path, options = {}) => {
    if (!path) return '';

    // Return local path if running in dev environment (unless you want to test Cloudinary locally)
    // Note: Localhost URLs don't work with Cloudinary Fetch.
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return path;
    }

    const baseUrl = PROD_URL;
    const fullAssetUrl = `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;

    const {
        width,
        height,
        crop = 'fill',
        quality = 'auto',
        format = 'auto'
    } = options;

    let transformations = `f_${format},q_${quality}`;
    if (width) transformations += `,w_${width}`;
    if (height) transformations += `,h_${height}`;
    if (width || height) transformations += `,c_${crop}`;

    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/${transformations}/${fullAssetUrl}`;
};
