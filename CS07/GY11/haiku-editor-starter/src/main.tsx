// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

import { store } from "./state/store";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

store.subscribe(() => console.log(store.getState()));
store.dispatch({
  type: "CHANGE_EDITOR",
  payload: "valami",
});
