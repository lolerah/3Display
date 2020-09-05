import React, { Component } from "react";
import * as THREE from "three";

export class Scene extends Component {
  state = {
    scene: {},
    camera: {},
    renderer: {},
    objects: {},
    width: {},
    height: {},
  };

  constructor(props) {
    super(props);

    this.state.width = window.innerWidth;
    this.state.height = window.innerHeight;

    this.state.scene = new THREE.Scene();
    this.state.camera = new THREE.PerspectiveCamera(
      75,
      this.state.width / this.state.height,
      0.1,
      1000
    );
    this.state.renderer = new THREE.WebGLRenderer({ antialias: true });
  }

  componentDidMount() {
    const { scene, camera, renderer, width, height } = this.state;

    scene.background = new THREE.Color(0xffffff);

    camera.position.z = 4;

    renderer.setClearColor("0000000");
    renderer.setSize(width, height);
    this.mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "#433F81" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    this.setState({ scene, objects: cube });
    this.start();
  }

  componentDidUpdate() {
    const { rotX, rotY } = this.props;

    this.animate(rotX, rotY);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    const { rotX, rotY } = this.props;
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(() => this.animate(rotX, rotY));
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = (rotX, rotY) => {
    const { scene } = this.state;

    scene.children[0].rotation.x += rotX;
    scene.children[0].rotation.y += rotY;
    this.renderScene();

    if (
      scene.children[0].rotation.x !== 0 ||
      scene.children[0].rotation.y !== 0
    )
      this.frameId = window.requestAnimationFrame(() =>
        this.animate(rotX, rotY)
      );
  };

  renderScene = () => {
    this.state.renderer.render(this.state.scene, this.state.camera);
  };

  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Scene;
