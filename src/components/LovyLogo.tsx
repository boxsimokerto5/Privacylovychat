import React from 'react';

interface LovyLogoProps {
  className?: string;
  size?: number;
  roundedClass?: string;
}

export const LovyLogo: React.FC<LovyLogoProps> = ({
  className = '',
  size = 40,
  roundedClass = 'rounded-xl',
}) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0 ${roundedClass} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: '#23a26d',
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-[6%]"
      >
        {/* Back chat bubble (white, right-offset with bottom-right tail) */}
        <path
          d="M135 48 C162 48 178 72 178 100 C178 122 165 142 144 150 C146 156 154 167 158 171 C154 171 138 167 125 156 C120 157 114 157 108 156 C128 144 140 123 140 99 C140 80 131 63 116 52 C122 49 128 48 135 48 Z"
          fill="#FFFFFF"
        />

        {/* Front chat bubble (white, main with bottom-left tail) */}
        <path
          d="M96 28 C140 28 170 58 170 99 C170 140 138 168 96 168 C84 168 72 165 62 160 C46 174 25 180 20 180 C26 172 35 156 34 146 C26 133 22 116 22 99 C22 58 55 28 96 28 Z"
          fill="#FFFFFF"
        />

        {/* Green Heart inside front chat bubble */}
        <path
          d="M96 142 C70 120 48 98 48 76 C48 60 60 48 76 48 C85 48 93 53 96 60 C99 53 107 48 116 48 C132 48 144 60 144 76 C144 98 122 120 96 142 Z"
          fill="#23a26d"
        />

        {/* Dynamic double-wave ribbon flowing across the heart */}
        <path
          d="M38 98 C58 84 76 86 96 95 C116 104 136 102 154 88 C142 98 124 102 108 97 C90 91 72 90 52 104 L38 98 Z"
          fill="#FFFFFF"
        />
        <path
          d="M52 106 C70 96 86 96 102 103 C118 110 134 108 146 98 C136 106 122 110 108 106 C92 101 76 101 60 111 L52 106 Z"
          fill="#FFFFFF"
        />

        {/* Small 4-pointed sparkle in bottom-right corner */}
        <path
          d="M178 172 C178 175 174 177 174 177 C174 177 178 179 178 182 C178 179 182 177 182 177 C182 177 178 175 178 172 Z"
          fill="#A4DEC5"
        />
      </svg>
    </div>
  );
};
