import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./SwitchTheme.css";

/**
 * @link https://codesandbox.io/s/bootstrap-dark-theme-in-react-forked-rjhyj3?file=/src/App.js
 */
const SwitchTheme = ({ isDark = false, onClick }) => {
  const [checked, setChecked] = useState(isDark);

  useEffect(() => {
    setChecked(isDark);
  }, [isDark]);

  function handleChange(e) {
    setChecked(e.target.checked);
    onClick && onClick(e.target.checked);
  }

  // Possible but {checked} must be specified in props, otherwise react throws warning: uncontroled input
  // const opts = {};
  // if("dark" === theme && !checked) {
  //   opts.checked = true;
  // }

  return (
    <Form>
      <Form.Check // prettier-ignore
        className="justify-content-md-center"
        type="switch"
        id="theme-switch"
        label={checked ? "Dark mode" : "Light mode"}
        checked={checked}
        onChange={handleChange}
        // {...opts}
      />
    </Form>
  );
};

SwitchTheme.propTypes = {
  /**
   * Use dark theme?
   */
  isDark: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

SwitchTheme.defaultProps = {
  isDark: false,
  onClick: undefined,
};

export default SwitchTheme;
