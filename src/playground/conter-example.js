class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        //fetch
        const count = parseInt(localStorage.getItem('count'), 10);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //save
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        //async call
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// default value;
// Counter.defaultProps = {
//     count : 0
// };

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));


// JSX solution:
//
// let count = 0;
// const addOne = () => {
//     count++;
//     renderConterApp();
// }
// const minusOne = () => {
//     count--;
//     renderConterApp();
// }
// const reset = () => {
//     count = 0;
//     renderConterApp();
// }

// const appRoot = document.getElementById('app');

// const renderConterApp = () => {
//     const templeteTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templeteTwo, appRoot);
// }

// renderConterApp();

