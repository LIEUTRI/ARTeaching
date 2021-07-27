'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
} from '@citychallenge/react-viro';
import CartoonGirl from './components/CartoonGirl';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    ViroMaterials.createMaterials({
      grid: {
        diffuseTexture: require('./res/hh.jpg'),
      },
    });
    return (
      // "VRX", "OBJ", "GLTF", "GLB"
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}

        {/* <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} /> */}

        <ViroAmbientLight color={"#ffffff"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <Viro3DObject
          source={require('./res/emoji_smile/emoji_smile.vrx')}
          resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
          require('./res/emoji_smile/emoji_smile_normal.png'),
          require('./res/emoji_smile/emoji_smile_specular.png')]}
          position={[-.5, .5, -1]}
          scale={[.2, .2, .2]}
          type="VRX" />

        {/* <Viro3DObject
          source={require('./res/lamborghini/lamborghini.obj')}
          resources={[require('./res/lamborghini/Lamborghinilogo.jpg'),
          require('./res/lamborghini/Avent_sport.mtl'),
          ]}
          position={[0, .4, 0]}
          scale={[.08, .08, .08]}
          type="OBJ" /> */}

        {/* <ViroNode position={[0, -1, 0]} dragType="FixedToWorld" onDrag={() => { }} >
          <Viro3DObject
            source={require('./res/emoji_smile/emoji_smile.vrx')}
            resources={[require('./res/emoji_smile/Emoji_smile_diffuse.png'),
            require('./res/emoji_smile/emoji_smile_normal.png'),
            require('./res/emoji_smile/emoji_smile_specular.png')]}
            position={[0, .5, 0]}
            scale={[.2, .2, .2]}
            type="VRX" />
        </ViroNode> */}

        {/* <ViroNode position={[0, -1, -1]} dragType="FixedToPlane" onDrag={() => { }}
          dragPlane={{
            planePoint: [0, -1, 0],
            planeNormal: [0, 1, 0],
            maxDistance: 3
          }}
        >
          <Viro3DObject
            source={require('./res/cartoongirl/cartoongirl.vrx')}
            resources={[require('./res/cartoongirl/Material.004_Base_Color.jpg'),
            require('./res/cartoongirl/Material.004_Height.jpg'),
            require('./res/cartoongirl/Material.004_Metallic.jpg'),
            require('./res/cartoongirl/Material.004_Metallic.jpg'),
            require('./res/cartoongirl/Material.004_Normal.jpg'),
            require('./res/cartoongirl/Material.004_Roughness.jpg'),
            require('./res/cartoongirl/Material.005_Base_Color.jpg'),
            require('./res/cartoongirl/Material.005_Height.jpg'),
            require('./res/cartoongirl/Material.005_Metallic.jpg'),
            require('./res/cartoongirl/Material.005_Normal_OpenGL.jpg'),
            require('./res/cartoongirl/Material.005_Normal.jpg'),
            require('./res/cartoongirl/Material.005_Roughness.jpg')
            ]}
            position={[0, .4, 0]}
            scale={[.07, .07, .07]}
            type="VRX" />
        </ViroNode> */}

        <CartoonGirl />

        {/* <Viro3DObject
          source={require('./res/mei/mei.vrx')}
          resources={[require('./res/mei/rp_mei_posed_001_dif_2k.jpg'),
          require('./res/mei/rp_mei_posed_001_dif_8k.jpg'),
          require('./res/mei/rp_mei_posed_001_norm_2k.jpg'),
          require('./res/mei/rp_mei_posed_001_norm_8k.jpg')
          ]}
          position={[-.5, .5, -1]}
          scale={[.005, .005, .005]}
          type="VRX" /> */}

        {/* <ViroNode position={[0, -1, -1]} dragType="FixedToPlane" onDrag={() => { console.log('[butterfly] draging...'); }}
          dragPlane={{
            planePoint: [0, -1, 0],
            planeNormal: [0, 1, 0],
            maxDistance: 3
          }}
        >
          <Viro3DObject
            source={require('./res/butterfly/butterfly.vrx')}
            resources={[
            require('./res/butterfly/butterfly_free.mtl'),
            require('./res/butterfly/body_albedo.jpg'),
            require('./res/butterfly/body_albedo.png'),
            require('./res/butterfly/body_glossiness.jpg'),
            require('./res/butterfly/body_height.jpg'),
            require('./res/butterfly/body_metalness.jpg'),
            require('./res/butterfly/body_normalmap.jpg'),
            require('./res/butterfly/body_roughness.jpg'),
            require('./res/butterfly/body_specular.jpg'),
            require('./res/butterfly/wing_albedo.jpg'),
            require('./res/butterfly/wing_albedo.png'),
            require('./res/butterfly/wing_alpha.jpg'),
            require('./res/butterfly/wing_glossiness.jpg'),
            require('./res/butterfly/wing_height.jpg'),
            require('./res/butterfly/wing_metallic.jpg'),
            require('./res/butterfly/wing_normalmap.jpg'),
            require('./res/butterfly/wing_roughness.jpg'),
            require('./res/butterfly/wing_specular.jpg'),
            require('./res/butterfly/wing_SSSmask.jpg')
            ]}
            position={[-.1, .4, -.1]}
            scale={[0.01, 0.01, 0.01]}
            type="VRX" />
        </ViroNode> */}

        {/* <Viro3DObject
          source={require('./res/audi/audi.vrx')}
          resources={[require('./res/audi/AudiR8-2.png'),
          // require('./res/audi/AudiR8.png'),
          // require('./res/audi/AudiR8-black.jpg'),
          require('./res/audi/AudiR8-white.jpg'),
          // require('./res/audi/BackHeadlight.jpg'),
          ]}
          position={[.1, .3, -1]}
          scale={[.1, .1, .1]}
          type="VRX" /> */}

        {/* <Viro3DObject
          scale={[0.003, 0.003, 0.003]}
          position={[-5, 0, -5]}
          source={require('./res/waving/Waving.vrx')}
          resources={[
            require('./res/waving/Remy_Body_Diffuse.png'),
            require('./res/waving/Remy_Body_Gloss.png'),
            require('./res/waving/Remy_Body_Normal.png'),
            require('./res/waving/Remy_Body_Opacity.png'),
            require('./res/waving/Remy_Body_Specular.png'),
            require('./res/waving/Remy_Bottom_Diffuse.png'),
            require('./res/waving/Remy_Bottom_Gloss.png'),
            require('./res/waving/Remy_Bottom_Normal.png'),
            require('./res/waving/Remy_Bottom_Opacity.png'),
            require('./res/waving/Remy_Bottom_Specular.png'),
            require('./res/waving/Remy_Hair_Diffuse.png'),
            require('./res/waving/Remy_Hair_Gloss.png'),
            require('./res/waving/Remy_Hair_Normal.png'),
            require('./res/waving/Remy_Hair_Opacity.png'),
            require('./res/waving/Remy_Hair_Specular.png'),
            require('./res/waving/Remy_Shoes_Diffuse.png'),
            require('./res/waving/Remy_Shoes_Gloss.png'),
            require('./res/waving/Remy_Shoes_Normal.png'),
            require('./res/waving/Remy_Shoes_Opacity.png'),
            require('./res/waving/Remy_Shoes_Specular.png'),
            require('./res/waving/Remy_Top_Diffuse.png'),
            require('./res/waving/Remy_Top_Gloss.png'),
            require('./res/waving/Remy_Top_Normal.png'),
            require('./res/waving/Remy_Top_Opacity.png'),
            require('./res/waving/Remy_Top_Specular.png'),
          ]}
          type="VRX"
          animation={{
            name: 'mixamo.com',
            run: true,
            loop: true,
            delay: 1000,
          }}
        /> */}

        {/* <ViroNode position={[0, -1, -1]} dragType="FixedToPlane" onDrag={() => { console.log('[butterfly] draging...'); }}
          dragPlane={{
            planePoint: [0, -1, 0],
            planeNormal: [0, 1, 0],
            maxDistance: 3
          }}
        >
          <Viro3DObject
            source={require('./res/apatosaurs/apatosaurs.obj')}
            resources={[
              require('./res/apatosaurs/apatosaurs.mtl'),
            ]}
            position={[-.1, .4, -.1]}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ" />
        </ViroNode> */}

        {/* <ViroNode position={[0, -1, -1]} dragType="FixedToPlane" onDrag={() => { console.log('[doraemon] draging...'); }}
          dragPlane={{
            planePoint: [0, -1, 0],
            planeNormal: [0, 1, 0],
            maxDistance: 3
          }}
        >
          <Viro3DObject
            source={require('./res/doraemon/doraemon.obj')}
            resources={[require('./res/doraemon/DORA.mtl'),
            ]}
            position={[-.1, .4, -.1]}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ" />
        </ViroNode> */}

        {/* <ViroNode position={[0, -1, -1]} dragType="FixedToPlane" onDrag={() => { console.log('[doraemon] draging...'); }}
          dragPlane={{
            planePoint: [0, -1, 0],
            planeNormal: [0, 1, 0],
            maxDistance: 3
          }}
        >
          <Viro3DObject
            source={require('./res/tiger/tiger.obj')}
            resources={[
              // require('./res/tiger/Tiger_white.png'),
              require('./res/tiger/Tiger_yellow.png'),
            ]}
            position={[-.1, .4, -.1]}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ" />
        </ViroNode> */}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
