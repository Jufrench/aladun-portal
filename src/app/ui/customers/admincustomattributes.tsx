'use client'

import { useState } from 'react';

export default function AdminCustomAttributes() {
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowAdmin(!showAdmin)}>Show Admin Controls</button>
      {showAdmin &&
        <div>
        <div>Admin Section</div>
        <label></label>
        <input />
        </div>
      }
    </div>
  )
}