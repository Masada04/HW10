const root = ReactDOM.createRoot(document.querySelector('#root'));

function Counter() {
        return (
            <div className="counter">
                <button class="color0">+</button>
                <h2>{0}</h2>
                <button class="color1">-</button>
                <button class="color2">C</button>
                <button class="color3">X</button>
            </div>
        )
    }
    

function App(){
    return (
        <div className="counter1">
            <h1 className="Sum">Sum = 0</h1>
            <button> Add Counter</button>
            <Counter />
        </div>
    );
}



root.render(<App />)