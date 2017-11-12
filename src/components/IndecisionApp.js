import React from 'react';
import Header from './Header'
import Action from './Action'
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from "./OptionModal";

export default class IndecisinoApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option !== optionToRemove;
                })
            }
        })
    };
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(()=> {
            return {
                selectedOption: option
            }
        });
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {
            this.setState(prevState => {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    };
    handleDismissOptionModal = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        });
    }
    componentDidMount() {
        // fetching data
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // saving data
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {}
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOption={this.handleDeleteOption}
                            handleDeleteOptions={this.handleDeleteOptions}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleDismissOptionModal={this.handleDismissOptionModal}
                />
            </div>
        );
    }
};