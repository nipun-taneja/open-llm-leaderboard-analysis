import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default function ZoomDialog({ imageSrc, imageAlt, children }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          {children}

          {isHovering && (
            <div
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '6px 10px',
                borderRadius: 8,
                fontSize: 14,
                pointerEvents: 'none',
                zIndex: 20,
              }}
            >
              🔍 Click to zoom
            </div>
          )}
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
          }}
        />

        <Dialog.Content
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1001,
            maxWidth: '90vw',
            maxHeight: '90vh',
            padding: 12,
            borderRadius: 12,
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <div style={{ position: 'relative', background: 'white', borderRadius: 8, padding: 12 }}>
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
            />

            <Dialog.Close
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                fontSize: 18,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
