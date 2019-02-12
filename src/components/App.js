import React from 'react';
 import { element } from 'prop-types';
 import Header from '../shared/components/layout/Header';
 import Content from '../shared/components/layout/Content';
 import Footer from '../shared/components/layout/Footer';
 import './App.css';
 const App = props => (
  <div>
    <Header title ="Virtuality" />
    <Content>
      {props.children}
    </Content>
    <Footer />
  </div>
 );

 App.propTypes = {
 children: element
 };

 export default App;
