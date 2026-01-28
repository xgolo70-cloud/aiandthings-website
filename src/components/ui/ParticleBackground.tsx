'use client';

import React, { useEffect, useRef } from 'react';

class Bit {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: 'rect' | 'cross' | 'dot';
  color: string;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.15;
    this.vy = (Math.random() - 0.5) * 0.15;
    this.size = Math.random() * 2 + 1;
    this.type = Math.random() > 0.8 ? 'cross' : Math.random() > 0.6 ? 'rect' : 'dot';
    this.color = Math.random() > 0.9 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.1)';
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = this.width;
    if (this.x > this.width) this.x = 0;
    if (this.y < 0) this.y = this.height;
    if (this.y > this.height) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.lineWidth = 0.5;

    if (this.type === 'cross') {
      ctx.beginPath();
      ctx.moveTo(this.x - 3, this.y);
      ctx.lineTo(this.x + 3, this.y);
      ctx.moveTo(this.x, this.y - 3);
      ctx.lineTo(this.x, this.y + 3);
      ctx.stroke();
    } else if (this.type === 'rect') {
      ctx.strokeRect(this.x - 1, this.y - 1, 3, 3);
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const bits: Bit[] = [];
    const bitCount = 40;

    for (let i = 0; i < bitCount; i++) {
        bits.push(new Bit(width, height));
    }

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        
        bits.forEach((bit) => {
            bit.update();
            bit.draw(ctx);
        });
        requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        bits.forEach(b => { b.width = width; b.height = height; });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
}
