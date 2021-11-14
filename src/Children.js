function Children({ count, children, setCount }) {
    return (
        <div>
            <h1>{count}</h1>
            {children}
            <button onClick={() => setCount(0)} onMouseEnter={() => console.log('mouse enter!')}>
                reset
            </button>
        </div>
    );
}

export default Children;