import React from 'react';


class HighContrastButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick = () => {
    this.setState( prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));

    if(this.state.isToggleOn){
      document.body.setAttribute('class','high-contrast');
    } else {
      document.body.setAttribute('class','');
    }
  }

  render(){
    // eslint-disable-next-line
    return <button role="button" className="button" onClick={this.toggleClick}>
      High Contrast
      {this.state.isToggleOn ? ' OFF' : ' ON'}
    </button>;
  }
}

export default HighContrastButton;
