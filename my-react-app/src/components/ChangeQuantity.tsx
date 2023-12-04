function ChangeQuantity({ quantity, setQuantity }) {
    const increase = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const signStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    };

    const plusStyle = {
        fontSize: '5vw',
        borderRadius: '100vw 0 0 100vw',
        border: 'none',
        borderRight: '0.25vw solid var(--red100)',
        color: 'var(--white)',
    };

    const minusStyle = {
        fontSize: '5vw',
        borderRadius: '0 100vw 100vw 0',
        border: 'none',
        borderLeft: '0.25vw solid var(--red100)',
        color: 'var(--white)',
    };

    const boldStyle = {
        fontFamily: 'Sansation-bold',
        margin: '0',
        padding: '0',
        transform: 'translate(0, -1.65vw)',
    };

    return (
        <div style={signStyle}>
            <button
                className="heading-2 sign"
                onClick={increase}
                style={plusStyle}
            >
                <p style={boldStyle}>+</p>
            </button>
            <button
                onClick={decrease}
                className="heading-2 sign"
                style={minusStyle}
            >
                <p style={boldStyle}>-</p>
            </button>
        </div>
    );
}

export default ChangeQuantity;
