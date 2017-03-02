import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Index from '../../src/components/Index';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<Index {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Index component', () => {

  it('renders the component', () => {

    const {output} = setup();

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('container');
    expect(output.props.children).to.be.an('object');

    let jumbotron = output.props.children;
    expect(jumbotron.type).to.equal('div');
    expect(jumbotron.props.className).to.equal('jumbotron');
    expect(jumbotron.props.children).to.be.an('array');
    // expect(jumbotron.props.children).to.have.length(3);

    let [header, paragraphOne, paragraphTwo] = jumbotron.props.children;

    expect(header.type).to.equal('h1');
    expect(header.props.children).to.be.a('string');

    expect(paragraphOne.type).to.equal('p');
  });

  it('has not props', () => {
    const {props} = setup();

    expect(props).to.be.empty;
  });
});
