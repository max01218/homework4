import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
            company: '',
            login: '',
            location: '',
        }
    }
    componentDidMount() {
        $.get(this.props.source,(result) => {
            console.log(result);
            const data = result;
            if (data) { 
                this.setState({
                    username: data.name,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                    company: data.company,
                    login: data.login,
                    location: data.location,
                });
            }
        });
    }
    render() {
        return (
            <div>
                <img src={this.state.avatarUrl} alt=""></img><br/>
                <h1>{this.state.username}</h1><br />
                <h3>{this.state.login}</h3><br/>
                <h3>My school:{this.state.company}</h3><br/>
                <h3>My country:{this.state.location}</h3><br />
                <a href={this.state.githubtUrl}>My Github</a><br/>
            </div>
        );
    }
}
ReactDOM.render(
    <UserGithub source="https://api.github.com/users/max01218" />,
    document.getElementById('root')
);


export default UserGithub;