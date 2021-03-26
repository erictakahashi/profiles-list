import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';
import Styled from '../Input.styled';

/**
 * Factory function that will create a `Input` shallow wrapper.
 */
const setupShallow = (props?: object) => shallow(<Input {...props} />);

describe('ProfilesList', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('Wrapper', () => {
    it('should render a `Wrapper` component', () => {
      const component = setupShallow();
      const wrapper = component.find(Styled.Wrapper);
      expect(wrapper.length).toBe(1);
    });

    it('should set the `className` according to the component `className` prop', () => {
      const className = 'className';
      const component = setupShallow({ className });
      const wrapper = component.find(Styled.Wrapper);
      const classNameProp = wrapper.prop('className');
      expect(classNameProp).toBe(className);
    });
  });

  describe('Label', () => {
    it('should not render a `Label` component when `label` prop is not provided', () => {
      const component = setupShallow();
      const label = component.find(Styled.Label);
      expect(label.length).toBe(0);
    });

    it('should render a `Label` component when `label` prop is provided', () => {
      const component = setupShallow({ label: 'label' });
      const label = component.find(Styled.Label);
      expect(label.length).toBe(1);
    });
  });

  describe('Input', () => {
    it('should render an `Input` component', () => {
      const component = setupShallow();
      const input = component.find(Styled.Input);
      expect(input.length).toBe(1);
    });

    describe('onChange', () => {
      const value = '1';
      const event = { target: { value } };

      it('should call `setState` when the `onChange` happens', () => {
        const setState = jest.fn();
        const useState = jest.spyOn(React, 'useState');
        useState.mockImplementation((init = '') => [init, setState]);

        const component = setupShallow();
        const input = component.find(Styled.Input);
        const onChange = input.prop('onChange');

        onChange(event);

        expect(setState).toHaveBeenCalled();
        expect(setState).toHaveBeenCalledWith(value);
      });

      it('should call the method provided as the `onChange` prop', () => {
        const setState = jest.fn();
        const useState = jest.spyOn(React, 'useState');
        useState.mockImplementation((init = '') => [init, setState]);

        const handleChange = jest.fn();
        const component = setupShallow({ onChange: handleChange });
        const input = component.find(Styled.Input);
        const onChange = input.prop('onChange');

        onChange(event);

        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith(event);
      });
    });
  });
});
