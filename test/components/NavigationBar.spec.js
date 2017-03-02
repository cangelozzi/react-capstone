import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {Link} from 'react-router';

import NavigationBar from '../../src/components/NavigationBar';

function setup() {
  let props = {};

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<NavigationBar {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('NavigationBar component', () => {

  it('render NavigationBar component', () => {
    const { props } = setup();
    expect(props).to.be.empty;
  });
});
