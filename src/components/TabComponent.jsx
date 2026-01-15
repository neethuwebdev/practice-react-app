

export function TabComponent({ children, onClick }) {
    console.log('inside tab component');
    return (<button onClick={onClick}> {children} </button>
    );
}
