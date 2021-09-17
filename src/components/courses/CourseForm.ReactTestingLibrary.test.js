import React from 'react';
import { render } from '@testing-library/react';
import CourseForm from './CourseForm';

// Boilerplate factory function
function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  // Unlike Enzyme, react-testing-lib has no shallow rendering, always mounted rendering, the actual DOM
  return render(<CourseForm {...props} />);
}

it('renders Add Course header', () => {
  const { getByText } = renderCourseForm();
  getByText('Add Course'); // Assertion built in; fails if it can't find it
});

it('labels save button as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText('Save');
});

it('labels save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  // debug();
  getByText('Saving...');
});
