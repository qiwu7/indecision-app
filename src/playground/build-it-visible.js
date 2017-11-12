/*
 * my solution
 */

// let visible = false;

// const onButtonClick = () => {
//     const button = document.getElementById('myButton');
//     const paragraph = document.getElementById('myPara');
//     if (visible) {
//         button.textContent = 'Hide Details';
//         paragraph.style.visibility = 'visible';
//     } else {
//         button.textContent = "Show Details";
//         paragraph.style.visibility = 'hidden';
//     }
//     visible = !visible;
// }

// const render = () => {
//     const templete = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="myButton" onClick={onButtonClick}>Show Details</button>
//             <p id="myPara">this is the detail!</p>
//         </div>
//     );

//     ReactDOM.render(templete, document.getElementById('app'));
// }

// render();

/*
 * Instructor's solution
 */
// let visible = false;

// const onButtonClick = () => {
//     visible = !visible;
//     render();
// }

// const render = () => {
//     const templete = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onButtonClick}>{visible ? "Show Details" : "Hide Details"}</button>
//             {
//                 visible && <p>This is the detail!</p>
//             }
//         </div>
//     );

//     ReactDOM.render(templete, document.getElementById('app'));
// }

// render();

/**
 * solution using class
 */
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility === true ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && <p>This is the detail!</p>
                }
            </div>
        );
        
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));