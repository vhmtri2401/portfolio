'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
    src: string;
    alt: string;
    fallbackLetter: string;
}

export function ProjectImage({ src, alt, fallbackLetter }: ProjectImageProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError || !src) {
        return (
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold">
                    {fallbackLetter}
                </div>
            </div>
        );
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const imageSrc = src.startsWith('/') ? `${basePath}${src}` : src;

    return (
        <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setHasError(true)}
        />
    );
}
