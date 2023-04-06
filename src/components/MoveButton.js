import { useState } from 'react';

export default function MoveableButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseDown(event) {
    event.preventDefault();
    const startX = event.clientX - position.x;
    const startY = event.clientY - position.y;

    function handleMouseMove(event) {
      const x = event.clientX - startX;
      const y = event.clientY - startY;
      setPosition({ x, y });
    }

    function handleMouseUp() {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded transition duration-300 ease-in-out fixed bottom-0 right-0 m-4"
      style={{ top: position.y + 'px', left: position.x + 'px' }}
      onMouseDown={handleMouseDown}
    >
      Move Me
    </button>
  );
}