

 export function Tabbutton({children,onSelect}){
    return(
        <button className="tab-btn" onClick={onSelect}>{children}</button>
    );
}

// tabbutton.jsx
// export function Tabbutton({ children, onSelect }) {
//   return (
//     <button onClick={onSelect}>{children}</button>
//   );
// }
