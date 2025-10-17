interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

interface ImageSizes {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

const IMGUR_IMAGES = {
  'fvM4Fdg': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fm=webp',
  '6C1fio4': 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80&fm=webp',
  'yGuMKW6': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'Heep3zw': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'ZHY9jPC': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'j8r7kko': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  '9HYYjWw': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'MSYwxqn': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'RJiytpz': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'Yfg88CG': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'JK828ck': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp',
  'ytB4m1G': 'https://images.unsplash.com/photo-1584622781867-1239b24e49f5?w=800&q=80&fm=webp'
};

export function optimizeImage(url: string, options: ImageOptions = {}) {
  const { width, quality = 80, format = 'webp' } = options;

  // Handle Imgur URLs
  if (url.includes('imgur.com')) {
    const imgurId = url.match(/\/([a-zA-Z0-9]+)\.(jpg|png|gif)/)?.[1];
    if (imgurId && IMGUR_IMAGES[imgurId]) {
      return IMGUR_IMAGES[imgurId];
    }
    
    const baseUrl = url.replace(/\.(jpg|jpeg|png|gif)$/, '');
    return `${baseUrl}.${format}${width ? `?maxwidth=${width}` : ''}${quality ? `&q=${quality}` : ''}`;
  }

  // Handle Unsplash URLs
  if (url.includes('unsplash.com')) {
    const params = new URLSearchParams({
      auto: 'format',
      fit: 'crop',
      q: quality.toString(),
      fm: format,
      ...(width && { w: width.toString() })
    });
    return `${url}?${params.toString()}`;
  }

  return url;
}

export function generateSrcSet(url: string, options: ImageOptions = {}) {
  const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
  const formats = ['webp', 'avif'];
  const { quality = 80 } = options;

  if (url.includes('imgur.com') || url.includes('unsplash.com')) {
    return formats
      .map(format => 
        widths
          .map(w => `${optimizeImage(url, { width: w, quality, format })} ${w}w`)
          .join(', ')
      )
      .join(', ');
  }

  return '';
}

export function generateSizes(options: ImageSizes = {}) {
  const { 
    mobile = '100vw',
    tablet = '50vw',
    desktop = '33vw'
  } = options;

  return `
    (max-width: 640px) ${mobile},
    (max-width: 1024px) ${tablet},
    ${desktop}
  `.trim();
}