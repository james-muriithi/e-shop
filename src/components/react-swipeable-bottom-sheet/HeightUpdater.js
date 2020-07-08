import React, { Component } from "react"
import PropTypes from "prop-types"

class HeightUpdater extends Component {
  constructor(props) {
    super(props)
    this.globalWindow = typeof window !== "undefined" && window

    this.onWindowResize = this.onWindowResize.bind(this)
  }

  onWindowResize() {
    const height = this.globalWindow.innerHeight
    if (height !== this.props.height) {
      this.props.onHeightChange(height)
    }
  }

  componentWillMount() {
    typeof window !== "undefined" &&
      window.addEventListener("resize", this.onWindowResize)
  }

  componentWillUnmount() {
    this.globalWindow.removeEventListener("resize", this.onWindowResize)
  }

  render() {
    return null
  }
}

HeightUpdater.propTypes = {
  height: PropTypes.number,
  onHeightChange: PropTypes.func,
}

export default HeightUpdater
