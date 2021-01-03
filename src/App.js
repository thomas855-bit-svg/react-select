import React from 'react';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import 'bootstrap/dist/css/bootstrap.css';

const colourOptions = [] //our array of colours

class App extends React.Component {
  render(){
    return (
      <Select
        className="mt-4 col-md-6 col-offset-4"
        components={makeAnimated()}
        isMulti
        options={colourOptions}
        />
    );
  }
}

export default App;