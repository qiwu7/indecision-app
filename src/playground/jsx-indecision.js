console.log('app.js is running!');

const app = {
    title: 'My Title',
    subtitle: 'My Subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const onResetClick = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    //JSX => javascript XML
    const templete = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>app.subtitle</p>}
            <p>{(app.options && app.options.length > 0) ? 'here is you options' : 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do?</button>
            <button onClick={onResetClick}>Remove</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(templete, appRoot);
}

renderApp();