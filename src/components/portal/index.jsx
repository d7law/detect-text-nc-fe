import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

class Portal extends React.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  }

  render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement("div");
      if (this.props.className) {
        this.defaultNode.classList.add(this.props.className);
      }
      document.body.appendChild(this.defaultNode);
    }
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || this.defaultNode
    );
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any,
};

export default Portal;
