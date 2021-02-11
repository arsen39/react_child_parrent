import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
  };

  deleteUser = () => {
    const {deleteUsers} = this.props;
    deleteUsers (this.props.id);
  }

  render() {
    const { name } = this.props;
    const { isGreeting } = this.state;
    if (!isGreeting) {
      return <h1>ПОКА {name}</h1>;
    }

    return (
      <>
        <h1>
          {isGreeting ? 'Hello' : 'Goodbye'}, {name}
        </h1>
        <button onClick={this.switchState}>Switch</button>
        <button onClick={this.deleteUser}>X</button>
      </>
    );
  }
}

export default Aloha;
