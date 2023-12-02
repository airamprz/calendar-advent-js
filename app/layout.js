'use client';
import React from 'react';
import Snowfall from 'react-snowfall';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Calendario de aDEViento 2023 - Retos de programación</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
      </head>
      <body>
        <Snowfall snowflakeCount={100} driftFactor={0.1} style={{ zIndex: 1000, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />

        {children}
      </body>
    </html>
  );
}
