const shadows = {
  small: {
    boxShadow:
      '15px 15px 8px rgba(0, 0, 0, 0.01), 8px 8px 7px rgba(0, 0, 0, 0.05), 4px 4px 5px rgba(0, 0, 0, 0.09), 1px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);',
  },
  medium: {
    boxShadow:
      '15px 15px 8px rgba(0, 0, 0, 0.01), 8px 8px 7px rgba(0, 0, 0, 0.05), 4px 4px 5px rgba(0, 0, 0, 0.09), 1px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
  },

  large: {
    boxShadow:
      '15px 15px 8px rgba(0, 0, 0, 0.01), 8px 8px 7px rgba(0, 0, 0, 0.05), 4px 4px 5px rgba(0, 0, 0, 0.09), 1px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
  },

  xlarge: {
    boxShadow:
      '15px 15px 8px rgba(0, 0, 0, 0.01), 8px 8px 7px rgba(0, 0, 0, 0.05), 4px 4px 5px rgba(0, 0, 0, 0.09), 1px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
  },
};

const getShadow = (size: keyof typeof shadows) => shadows[size];

export default getShadow;
