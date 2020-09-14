import React from 'react';

export default function useState(props) {
  const [state, setStates] = React.useState({});

  const setState = data => setStates(prev => ({ ...prev, ...data }));

  return [state, setState];
}
